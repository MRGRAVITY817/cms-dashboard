import Link from "next/link";
import { FC, ReactElement } from "react";

interface HelpSectionItemProps {
  color: "indigo" | "orange" | "teal" | "purple";
  icon: ReactElement;
  title: string;
  description: string;
}

export const HelpSectionItem: FC<HelpSectionItemProps> = ({
  color,
  icon,
  title,
  description,
}) => {
  const outerColor = () => {
    switch (color) {
      case "indigo":
        return "bg-indigo-100";
      case "orange":
        return "bg-orange-100";
      case "teal":
        return "bg-teal-100";
      case "purple":
        return "bg-purple-100";
      default:
        return "bg-slate-100";
    }
  };

  const innerColor = () => {
    switch (color) {
      case "indigo":
        return "bg-indigo-500";
      case "orange":
        return "bg-orange-500";
      case "teal":
        return "bg-teal-500";
      case "purple":
        return "bg-purple-500";
      default:
        return "bg-slate-500";
    }
  };

  return (
    <Link href="#">
      <a className="bg-white p-6 rounded-md shadow-md flex gap-8 items-center justify-start w-full">
        <div
          className={`${outerColor()} w-16 h-16 flex items-center justify-center rounded-sm`}
        >
          <div
            className={`${innerColor()} w-10 h-10 flex items-center justify-center rounded-sm`}
          >
            {icon}
          </div>
        </div>
        <div className="grid grid-flow-row">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </a>
    </Link>
  );
};
