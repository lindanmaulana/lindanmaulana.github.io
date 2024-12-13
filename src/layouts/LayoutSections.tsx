import { ReactNode } from "react";
import Title from "../components/title/Title";
interface LayoutSectionsProps {
  icons?: ReactNode;
  title?: string;
  subTitle?: string;
  children: ReactNode;
  styleSection?: string;
  styleContainer?: string;
}

const LayoutSections = (props: LayoutSectionsProps) => {
  const { subTitle, title, icons, children, styleContainer, styleSection } =
    props;
  return (
    <section className={styleSection}>
      <div className={`container max-w-4xl relative ${styleContainer}`}>
        <div className="flex flex-col gap-4">
          <Title icons={icons} title={title} subtitle={subTitle} />
          {children}
        </div>
      </div>
    </section>
  );
};

export default LayoutSections;
