import LayoutSections from "../../../../layouts/LayoutSections";
import { dataFindme } from "../types";

const ContactFindme = () => {
  return (
    <LayoutSections title="Find me on">
      <div className="grid grid-cols-2 gap-4">
        {dataFindme?.map((findme) => (
          <div key={findme.id} className={`bg-${findme.color} flex`}>
            <div className="flex flex-col gap-1">
              <h3 className={`text-${findme.color} text-xl font-medium`}>{findme.title}</h3>
              <p>{findme.subtitle}</p>
              <button className="max-w-40">{findme.titleButton}</button>
            </div>
            <div>
                <findme.icon className={`bg-${findme.color}`} />
            </div>
          </div>
        ))}
      </div>
    </LayoutSections>
  );
};

export default ContactFindme;
