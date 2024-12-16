import LayoutSections from "../../../../layouts/LayoutSections";
import { dataFindme } from "../types";

const ContactFindme = () => {
  return (
    <LayoutSections title="Find me on" styleSection="py-5" styleContainer="pb-10 border-b border-dev-black/30">
      <div className="grid grid-cols-2 gap-4">
        {dataFindme?.map((findme) => {
          const hexToRgba = (hex: string, opacity: number) => {
            const r = parseInt(hex.substring(1, 3), 16);
            const g = parseInt(hex.substring(3, 5), 16);
            const b = parseInt(hex.substring(5, 7), 16);
            return `rgba(${r}, ${g}, ${b}, ${opacity})`;
          };

          return (
            <div
              key={findme.id}
              className={`flex p-8 rounded-lg gap-4`}
              style={{ backgroundColor: hexToRgba(findme.color, 0.2) }}
            >
              <div className="flex flex-col gap-3 max-w-[70%]">
                <h3
                  className={`text-lg font-medium`}
                  style={{ color: findme.color }}
                >
                  {findme.title}
                </h3>
                <p className="text-xs">{findme.subtitle}</p>
                <a href={findme.url}
                  className={`max-w-40 rounded py-1 text-center text-white`}
                  style={{ backgroundColor: findme.color }}
                >
                  {findme.titleButton}
                </a>
              </div>
              <div className="flex items-end">
                <div
                  className="p-4 rounded-full"
                  style={{ backgroundColor: findme.color }}
                >
                  <findme.icon className={`shrink-0 text-white text-4xl`} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </LayoutSections>
  );
};

export default ContactFindme;
