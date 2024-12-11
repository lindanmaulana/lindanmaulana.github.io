import LayoutSections from "../../../../layouts/LayoutSections"
import ProjectListItems from "./ProjectListItems"

const Projects = () => {
    return (
        <LayoutSections styleSection="py-5">
            <div className="grid grid-cols-2 gap-6">
                <ProjectListItems />
            </div>
        </LayoutSections>

    )
}

export default Projects