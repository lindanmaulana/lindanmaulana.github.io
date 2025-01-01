import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../../../redux/store";
import { dataProject } from "../types";

const ProjectListItems = () => {
  const { key, tech } = useSelector((state: RootState) => state.portfolio);
  const [showAll, setShowAll] = useState<boolean>(false);

  const filterDataProject = useMemo(() => {
    if (key && !tech) {
      return dataProject.filter((payload) => {
        return payload.type === key;
      });
    } else if (!key && tech) {
      return dataProject.filter((item) => {
        return item.tech.some(
          (techItem) => techItem.name.toLowerCase() === tech
        );
      });
    } else if (key && tech) {
      return dataProject;
    } else {
      return dataProject;
    }
  }, [key, tech]);

  const renderDataProject = useMemo(() => {
    const filtered = tech === "" ? dataProject : filterDataProject;

    return showAll ? filtered : filterDataProject.slice(0, 8);
  }, [filterDataProject, showAll, tech]);

  return (
    <>
      {renderDataProject?.map((project) => (
        <Link
          to={`/portfolio/${project.title}`}
          key={project.id}
          className="overflow-hidden border border-dev-black-gray/20 cursor-pointer hover:scale-105 transition-global shadow-sm rounded-xl h-[340px]"
        >
          <div className="flex flex-col justify-between h-full">
            <figure className="">
              <img
                src={project.image}
                alt={project.title}
                className="object-contain w-full h-full"
              />
            </figure>
            <div className="flex flex-col gap-3 p-5 h-[40%] ">
              <h3 className="text-lg text-dev-black-gray dark:text-white">{project.title}</h3>
              <p className="text-sm line-clamp-2 text-dev-black-gray">
                {project.description}...
              </p>
              <div className="flex items-center gap-3">
                {project.tech?.map((tech) => (
                  <tech.icon
                    key={tech.name}
                    className={`text-2xl text-${tech.color}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </Link>
      ))}

      <button
        onClick={() => setShowAll(!showAll)}
        className="absolute bottom-0 px-2 py-1 text-sm text-white translate-x-1/2 rounded-md right-1/2 bg-dev-blue/70"
      >
        {showAll ? "Read Less" : "Read More"}
      </button>
    </>
  );
};

export default ProjectListItems;
