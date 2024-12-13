import LayoutSections from "../../../../layouts/LayoutSections";
import ProjectListItems from "./ProjectListItems";

import ProjectFilter from "./ProjectFilter";

const Projects = () => {
  

  return (
    <LayoutSections>
     <ProjectFilter />
      <div className="grid grid-cols-2 gap-6">
        <ProjectListItems />
      </div>
    </LayoutSections>
  );
};

export default Projects;
