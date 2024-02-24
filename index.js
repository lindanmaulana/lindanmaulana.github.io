const url = "https://quran-api.santrikoding.com/api/surah";
const dataMentah = [];

// fungsi eksekusi API
function api(url) {
  console.log(url);
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => response.json())
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
}

api(url)
  .then((response) => {
    response.map((el) => dataMentah.push(el));
    console.log(response);
  })
  .catch((error) => console.log(error));

// fungsi user
function cariData() {
  const user = document.getElementById("userInput").value;

  gudangData(parseInt(user));
}

// fungsi eksekusi data
function gudangData(nomor) {
  const urutan = nomor - 1;
  const { ...dataSurah } = dataMentah[urutan];

  // DOM audio html
  const mp3 = document.getElementById("audio-mp3");
  mp3.src = dataSurah.audio;

  // screen
  screen(dataSurah);
}

// fungsi screen
function screen(dataSurah) {
  let output1 = document.querySelector(".output-1");
  output1.innerHTML = `<span>surat : ${dataSurah.nama_latin} </span><span>arti: ${dataSurah.arti}</span>`;
}
console.log(dataMentah);

// DOM button event click
const btnHamburger = document.getElementById("btn-hamburger-menu");
btnHamburger.addEventListener("click", function () {
  // DOM HAMBURGER MENU
  const hamburger1 = document.querySelector(".hamburger-1");
  const hamburger2 = document.querySelector(".hamburger-2");
  const hamburger3 = document.querySelector(".hamburger-3");

  hamburger1.classList.toggle("hamburgerA");
  hamburger2.classList.toggle("hamburgerB");
  hamburger3.classList.toggle("hamburgerC");

  // DOM NAVBAR MOBILE PHONE
  const navbarPhone = document.querySelector(".navbar-phone");
  navbarPhone.classList.toggle("screen-navbar");
  
});
