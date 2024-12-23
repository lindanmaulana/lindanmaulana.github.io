import { ReactNode } from "react";
interface titleProps {
    icons: ReactNode
    title: string
    subtitle: string
}
const TitleAbout = (props: titleProps) => {
    const {icons, subtitle, title} = props
  return (
    <div>
      <h4 className="flex items-center gap-1 text-xl tracking-widest dark:text-white font-montserrat-medium">
        {icons} {title}
      </h4>
      <p className="text-sm text-dev-black/60 dark:text-white/20">{subtitle}</p>
    </div>
  );
};

export default TitleAbout;
