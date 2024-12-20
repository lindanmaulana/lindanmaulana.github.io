import ProfileEducation from "./ProfileEducation";
import ProfilePicture from "./ProfilePicture";
import ProfileSkills from "./ProfileSkills";

const AboutProfile = () => {
  return (
    <section className="py-5">
      <div className="container max-w-3xl px-4 lg:px-0">
        <div className="flex flex-col gap-10 lg:flex-row">
          <ProfilePicture />
          <div className="flex flex-col gap-5">
            <ProfileEducation />
            <ProfileSkills />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProfile;
