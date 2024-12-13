import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../redux/store";
import { handleSelectPortfolio } from "../../../../redux/slices/portfolio";
import React, { useState } from "react";

const ProjectFilter = () => {
  const [btnActive, setBtnActive] = useState<(number | null)>(null);
  const dispatch = useDispatch<AppDispatch>();
  const selector = useSelector((state: RootState) => state.portfolio);
  
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const pick = e.target.value;

    dispatch(handleSelectPortfolio({ ...selector, key: pick }));
  };

  const handleTech = (id: number, tech: string) => {
    dispatch(handleSelectPortfolio({ ...selector, tech }));
    setBtnActive((prev) => (prev === id ? null : id))
  };

  return (
    <div className="flex items-center justify-end gap-1">
      <div className="flex items-center gap-1 ">
        <button
          onClick={() => handleTech(1, "html")}
          className={`${btnActive && btnActive === 1 ? "bg-dev-blue text-white" : "bg-transparent"} px-2 border rounded border-dev-black-gray/50`}
        >
          Html
        </button>
        <button
          onClick={() => handleTech(2, "reactjs")}
          className={`${btnActive && btnActive === 2 ? "bg-dev-blue text-white" : "bg-transparent"} px-2 border rounded border-dev-black-gray/50`}
        >
          Reactjs
        </button>
        <button
          onClick={() => handleTech(3, "tailwindcss")}
          className={`${btnActive && btnActive === 3 ? "bg-dev-blue text-white" : "bg-transparent"} px-2 border rounded border-dev-black-gray/50`}
        >
          Tailwindcss
        </button>
        <button
          onClick={() => handleTech(4, "expressjs")}
          className={`${btnActive && btnActive === 4 ? "bg-dev-blue text-white" : "bg-transparent"} px-2 border rounded border-dev-black-gray/50`}
        >
          Expressjs
        </button>
      </div>
      <select
        name="select type"
        id="type"
        onChange={handleChange}
        className="px-2 py-px text-sm border rounded border-dev-black-gray/50"
      >
        <option value="">--Select--</option>
        <option value="frontend">Frontend</option>
        <option value="backend">Backend</option>
        <option value="fullstack">Fullstack</option>
      </select>
    </div>
  );
};

export default ProjectFilter;
