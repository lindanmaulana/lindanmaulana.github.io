import LayoutSections from "../../../../layouts/LayoutSections";
import ProjectListItems from "./ProjectListItems";

import ProjectFilter from "./ProjectFilter";

const Projects = () => {
  

  return (
    <LayoutSections styleSection="py-5">
     <ProjectFilter />
      <div className="grid grid-cols-2 gap-4">
        <ProjectListItems />
      </div>
    </LayoutSections>
  );
};

export default Projects;
