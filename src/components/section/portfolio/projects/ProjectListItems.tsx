import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../../../redux/store";
import { dataProject, project } from "./types";

const ProjectListItems = () => {
  const { key, tech } = useSelector((state: RootState) => state.portfolio);
  const [project, setProject] = useState<project[] | undefined>(undefined);

  useEffect(() => {
    const filterData = () => {
      if (key && !tech) {
        const data = dataProject.filter((payload) => {
          return payload.type === key;
        });

        setProject(data);
      } else if (!key && tech) {
        const data = dataProject.filter((item) => {
          return item.tech.some(
            (techItem) => techItem.name.toLowerCase() === tech
          );
        });

        setProject(data);
      } else if (key && tech) {
        console.log("ketiga");
        setProject(dataProject);
      } else {
        setProject(dataProject);
      }
    };

    filterData();
  }, [key, tech]);


  useEffect(() => {
    if(tech === "") setProject(dataProject)
  }, [tech])
  
  return (
    <>
      {project?.map((project) => (
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
              <h3 className="text-lg text-dev-black-gray">{project.title}</h3>
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
    </>
  );
};

export default ProjectListItems;
