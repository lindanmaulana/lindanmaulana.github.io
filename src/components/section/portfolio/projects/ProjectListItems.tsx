import { dataProject } from "./types";

const ProjectListItems = () => {
  return (
    <>
      {dataProject?.map((project) => (
        <a href={project.url} key={project.id} className="overflow-hidden border border-dev-black-gray/20 cursor-pointer hover:scale-105 transition-global shadow-sm rounded-xl h-[400px]">
          <div className="flex flex-col justify-between h-full">
            <figure className="h-[60%]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full"
              />
            </figure>
            <div className="flex flex-col gap-2 p-5 h-[40%] ">
                <h3 className="text-lg text-dev-black-gray">{project.title}</h3>
                <p>{project.description}</p>
                <div className="flex items-center gap-3">
                    {project.tech?.map(tech => (
                        <tech.icon key={tech.name} className={`text-2xl text-${tech.color}`} />
                    ))}
                </div>
            </div>
          </div>
        </a>
      ))}
    </>
  );
};

export default ProjectListItems;
