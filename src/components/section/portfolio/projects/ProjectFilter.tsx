import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  handleSelectPortfolio,
  handleSetButtonTech,
} from "../../../../redux/slices/portfolio";
import { AppDispatch, RootState } from "../../../../redux/store";

const ProjectFilter = () => {
  const dispatch = useDispatch<AppDispatch>();
  const selector = useSelector((state: RootState) => state.portfolio);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const pick = e.target.value;

    dispatch(handleSelectPortfolio({ ...selector, key: pick }));
  };

  const handleTech = (id: number, tech: string) => {
    dispatch(handleSelectPortfolio({ ...selector, tech }));
    dispatch(handleSetButtonTech({ id }));
  };

  return (
    <div className="flex items-center justify-end gap-1">
      <div className="flex items-center gap-1 overflow-x-auto text-sm no-scrollbar">
        <button
          onClick={() => handleTech(1, "html")}
          className={`${
            selector.buttonTech === 1
              ? "bg-dev-blue text-white"
              : "bg-transparent"
          } px-2 border rounded border-dev-black-gray/50 dark:border-white dark:text-white`}
        >
          Html
        </button>
        <button
          onClick={() => handleTech(2, "reactjs")}
          className={`${
            selector.buttonTech === 2
              ? "bg-dev-blue text-white"
              : "bg-transparent"
          } px-2 border rounded border-dev-black-gray/50 dark:border-white dark:text-white`}
        >
          Reactjs
        </button>
        <button
          onClick={() => handleTech(3, "tailwindcss")}
          className={`${
            selector.buttonTech === 3
              ? "bg-dev-blue text-white"
              : "bg-transparent"
          } px-2 border rounded border-dev-black-gray/50 dark:border-white dark:text-white`}
        >
          Tailwindcss
        </button>
        <button
          onClick={() => handleTech(4, "expressjs")}
          className={`${
            selector.buttonTech === 4
              ? "bg-dev-blue text-white"
              : "bg-transparent"
          } px-2 border rounded border-dev-black-gray/50 dark:border-white dark:text-white`}
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
