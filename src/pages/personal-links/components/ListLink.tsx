import { linkData } from "./link-data";
import { LinkCard } from "./LinkCard";

export const ListLink = () => {
  return (
    <>
      {linkData.map((link) => (
        <LinkCard
          key={link.id}
          title={link.title}
          icon={link.icon}
          url={link.url}
        />
      ))}
    </>
  );
};
