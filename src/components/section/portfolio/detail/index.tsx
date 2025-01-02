import { Link } from "react-router-dom";
import LayoutSections from "../../../../layouts/LayoutSections";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { project } from "../types";
import { PiMonitorPlay } from "react-icons/pi";

const PortfolioDetail = (props: { data: project }) => {
  const { data } = props;
  return (
    <LayoutSections styleContainer="md:py-14 py-5 md:h-full h-screen dark:bg-black">
      <div >
        <Link
          to="/portfolio"
          className="flex items-center gap-2 px-3 py-1 text-sm text-white rounded bg-color-github max-w-24 group"
        >
          <IoArrowBackCircleOutline
            className="group-hover:-translate-x-2 transition-global"
            size={20}
          />
          Back
        </Link>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col gap-2 py-4 border-b border-dashed border-dev-black-gray">
          <h2 className="text-2xl font-semibold text-dev-black dark:text-white">
            {data.title}
          </h2>
          <p className="dark:text-white/40">{data.description}</p>
        </div>
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-1">
            <h3 className="text-base text-dev-black-gray dark:text-white">Tech Stack: </h3>
            <ul className="flex items-center gap-2">
              {data?.tech.map((payload) => (
                <li key={payload.name} className="text-2xl">
                  {<payload.icon className={`text-${payload.color}`} />}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <a
              href={data.url}
              className="flex items-center gap-1 text-base font-medium dark:text-white text-dev-black-gray"
            >
              <PiMonitorPlay size={22} />
              Live Demo
            </a>
          </div>
        </div>
        <div className="py-4">
          <figure className="overflow-hidden rounded hover:scale-105 transition-global">
            <img src={data.image} alt={data.title} className="w-full h-full" />
          </figure>
        </div>
      </div>
    </LayoutSections>
  );
};

export default PortfolioDetail;
