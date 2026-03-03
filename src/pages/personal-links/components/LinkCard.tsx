import { IconType } from "react-icons";
import { Link } from "react-router-dom";

interface LinkCardProps {
  url: string;
  icon: IconType;
  title: string;
}

export const LinkCard = (props: LinkCardProps) => {
  return (
    <Link
      to={props.url}
      className="group flex items-center justify-between p-4 bg-gray-800 border border-white/10 rounded-xl hover:bg-white/10 hover:border-blue-500/50 hover:scale-[1.02] transition-all duration-300 backdrop-blur-sm"
    >
      <div className="flex items-center gap-4">
        <div className="p-2 transition-colors rounded-lg bg-white/5 group-hover:bg-blue-500/20 group-hover:text-blue-400">
          <props.icon className="text-xl" />
        </div>
        <span className="font-semibold tracking-wide">{props.title}</span>
      </div>
      <svg
        className="w-5 h-5 transition-all text-slate-500 group-hover:translate-x-1 group-hover:text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 5l7 7-7 7"
        ></path>
      </svg>
    </Link>
  );
};
