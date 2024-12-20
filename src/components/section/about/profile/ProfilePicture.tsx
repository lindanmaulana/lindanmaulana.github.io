import { ImageHome } from "../../../../assets/images";

const ProfilePicture = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative w-64 ">
        <img
          src={ImageHome.me}
          alt="Lindan Maulana"
          className="w-full h-full rounded-full"
        />
        <img
          src={ImageHome.meTtd}
          alt="Me TTD"
          className="absolute bottom-0 w-56 -right-10"
        />
      </div>
      <h3 className="text-3xl text-transparent font-montserrat-bold bg-gradient-to-r from-dev-blue to-dev-blue-dark bg-clip-text">
        Lindan Maulana
      </h3>
      <div className="flex items-center gap-px mb-2">
        <h5 className="text-sm">Student,</h5>
        <h5 className="text-sm">Frontend Developer</h5>
      </div>
    </div>
  );
};

export default ProfilePicture;
