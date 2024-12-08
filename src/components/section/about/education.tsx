const Education = () => {
  return (
    <div>
      <h4 className="mb-2 text-xl tracking-widest font-montserrat-bold">
        Education
      </h4>
      <ul className="flex items-center gap-4">
        <li className="flex flex-col gap-1 p-4 text-white rounded bg-dev-black">
          <h5 className="text-xs font-montserrat-light">2023 - present</h5>
          <h5 className="text-xs">
            UNIVERSITAS KUNINGAN -{" "}
            <span className="font-montserrat-light">Teknik Informatika</span>
          </h5>
          <h5 className="text-xs">Kuningan</h5>
        </li>
        <li className="flex flex-col gap-1 p-4 text-white rounded shadow-2xl bg-dev-black">
          <h5 className="text-xs font-montserrat-light">2019 - 2023</h5>
          <h5 className="text-xs">
            SMKN 3 KUNINGAN -{" "}
            <span className="font-montserrat-light">
              Teknik Otomasi Industri
            </span>
          </h5>
          <h5 className="text-xs">Kuningan</h5>
        </li>
      </ul>
    </div>
  );
};

export default Education;
