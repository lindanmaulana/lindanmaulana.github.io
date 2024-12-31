import DashboardBanner from "../../components/section/dashboard/banner";
import DashboardCertificate from "../../components/section/dashboard/certificate";
import DashboardContributions from "../../components/section/dashboard/contributions";

const PageDashboard = () => {
  return (
    <>
      <DashboardBanner />
      <DashboardContributions />
      <DashboardCertificate />
    </>
  );
};

export default PageDashboard;
