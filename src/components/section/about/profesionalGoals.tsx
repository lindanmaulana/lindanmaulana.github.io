import { useSelector } from "react-redux";
import { Typewriter } from "react-simple-typewriter";
import { RootState } from "../../../redux/store";
import { useEffect, useState } from "react";

const ProfesionalGoals = () => {
  const [showTypeWriter, setShowTypeWriter] = useState<boolean>(false);
  const { goals } = useSelector((state: RootState) => state.about);

  useEffect(() => {
    if (goals) setShowTypeWriter(true);
  }, [goals]);

  return (
    <div className={`py-5 ${goals ? "block" : "hidden"}`}>
      <h4 className="mb-2 text-xl tracking-widest font-montserrat-bold">
        Professional Goals
      </h4>
      <div className="p-4 text-sm border rounded border-dev-black/20 text-dev-black ">
        {showTypeWriter && (
          <Typewriter
            words={[
              "Tujuan saya adalah menjadi seorang Software Engineer yang unggul dan spesialis dalam pemrograman JavaScript, dengan kemampuan menciptakan solusi digital yang inovatif, responsif, dan berdaya guna tinggi. Saya berkomitmen untuk terus berkembang dan memberikan kontribusi nyata dalam dunia teknologi melalui keahlian saya.",
            ]}
            cursor
            cursorStyle="_"
            typeSpeed={100}
            deleteSpeed={60}
            delaySpeed={1000}
            
          />
        )}
        
      </div>
    </div>
  );
};

export default ProfesionalGoals;
