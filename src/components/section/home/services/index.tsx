import { FaServicestack } from "react-icons/fa";
import LayoutSections from "../../../../layouts/LayoutSections";
import HomeServiceListItems from "./ServiceListItems";
const HomeServices = () => {
  return (
    <LayoutSections
      styleSection="py-5 dark:bg-black"
      styleContainer="overflow-hidden"
      icons={<FaServicestack />}
      title="Services"
      subTitle="I can deliver the following services"
    >
      <div className="grid gap-4 overflow-x-auto lg:grid-cols-3">
        <HomeServiceListItems />
      </div>
    </LayoutSections>
  );
};

export default HomeServices;
