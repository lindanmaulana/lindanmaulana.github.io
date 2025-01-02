import { Link } from "react-router-dom";
import LayoutSections from "../../../../layouts/LayoutSections";
import { certificate } from "./types";
import { IoArrowBackCircleOutline } from "react-icons/io5";
interface detailCertificateProps {
  data: certificate;
}

const DetailCertificate = (props: detailCertificateProps) => {
  const { data } = props;
  return (
    <LayoutSections styleSection="md:py-5 md:h-full h-screen">
      <div>
        <Link
          to="/dashboard"
          className="flex items-center gap-2 px-3 py-1 text-sm text-white rounded bg-color-github max-w-24 group"
        >
          <IoArrowBackCircleOutline className="group-hover:-translate-x-2 transition-global" size={20} />
          Back
        </Link>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-3 pb-4 border-b border-dashed border-dev-black-gray dark:border-white/50">
          <h2 className="text-3xl font-medium dark:text-white">{data.title}</h2>
          <p className="dark:text-white/50">{data.desc}</p>
        </div>
        <div>
          <figure className="">
            <img src={data.image} alt={data.title} className="w-full h-full" />
          </figure>
        </div>
      </div>
    </LayoutSections>
  );
};

export default DetailCertificate;
