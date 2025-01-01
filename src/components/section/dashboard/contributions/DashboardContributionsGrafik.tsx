import GitHubCalendar from "react-github-calendar";

const DashboardContributionsGrafik = () => {
  return (
    <div className="dark:text-white">
      <GitHubCalendar
        colorScheme="light"
        username="lindanmaulana"
        blockMargin={4}
        blockSize={10}
        blockRadius={3}
        fontSize={14}
      />
    </div>
  );
};

export default DashboardContributionsGrafik;
