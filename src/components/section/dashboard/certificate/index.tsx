import { PiCertificateDuotone } from "react-icons/pi";
import LayoutSections from "../../../../layouts/LayoutSections";
import { dataCertificate } from "./types";
import { Link } from "react-router-dom";

const DashboardCertificate = () => {
  return (
    <LayoutSections
      styleSection="py-5"
      title="Certificate"
      subTitle="Every Achievement Counts"
      icons={<PiCertificateDuotone />}
    >
      <div className="grid gap-2 overflow-x-auto md:grid-cols-3">
        {dataCertificate?.map((certificate) => (
          <Link to={`/dashboard/${certificate.id}`} className="" key={certificate.id}>
            <figure className="">
              <img src={certificate.image} alt={certificate.title} className="w-full" />
            </figure>
          </Link>
        ))}
      </div>
    </LayoutSections>
  );
};

export default DashboardCertificate;
