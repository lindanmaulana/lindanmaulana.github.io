import { FaGithub } from "react-icons/fa";
import LayoutSections from "../../../../layouts/LayoutSections";
import DashboardContributionsGrafik from "./DashboardContributionsGrafik";

const DashboardContributions = () => {
  return (
    <LayoutSections
    styleSection="py-5"
      title="Contributions"
      subTitle="My contributions from last year on github."
      icons={<FaGithub />}
    >
      <DashboardContributionsGrafik />
    </LayoutSections>
  );
};

export default DashboardContributions;
