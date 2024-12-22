import AboutBanner from "../../components/section/about/banner";
import AboutGithubUnwrapped from "../../components/section/about/githubUnwraped";
import AboutProfesionalGoals from "../../components/section/about/professionalGoals";
import AboutProfile from "../../components/section/about/profile";

const PageAboutMe = () => {
  return (
    <>
      <AboutBanner />
      <AboutProfile />
      <AboutProfesionalGoals />
      <AboutGithubUnwrapped />
    </>
  );
};

export default PageAboutMe;