import GitHubCalendar from "react-github-calendar";

const DashboardContributionsGrafik = () => {
  return (
    <div >
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
