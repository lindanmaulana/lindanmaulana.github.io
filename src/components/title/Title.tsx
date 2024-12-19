import { ReactNode } from "react";
interface titleProps {
    icons?: ReactNode
    title?: string
    subtitle?: string
    style?: string
}
const Title = (props: titleProps) => {
    const {icons, subtitle, title, style} = props
  return (
    <div className={`flex flex-col gap-2 ${style}`}>
      <h4  className="flex items-center gap-1 text-xl text-dev-black dark:text-white font-montserrat-medium">
        {icons} {title}
      </h4>
      <p className="text-base text-dev-black-gray">{subtitle}</p>
    </div>
  );
};

export default Title;
