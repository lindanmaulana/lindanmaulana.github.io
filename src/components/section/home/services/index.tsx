import { FaServicestack } from "react-icons/fa";
import LayoutSections from "../../../../layouts/LayoutSections";
import HomeServiceListItems from "./ServiceListItems";
const HomeServices = () => {
  return (
    <LayoutSections
    styleSection="py-5"
      icons={<FaServicestack />}
      title="Services"
      subTitle="I can deliver the following services"
    >
      <div className="grid grid-cols-3 gap-4">
        <HomeServiceListItems />
      </div>
    </LayoutSections>
  );
};

export default HomeServices;
