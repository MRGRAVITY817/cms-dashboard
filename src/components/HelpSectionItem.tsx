import Link from "next/link";
import { FC, ReactElement } from "react";

interface HelpSectionItemProps {
  href?: string;
  color: "indigo" | "orange" | "teal" | "purple";
  icon: ReactElement;
  title: string;
  description: string;
}

export const HelpSectionItem: FC<HelpSectionItemProps> = ({
  href = "#",
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
    <Link href={href}>
      <a className="flex w-full items-center justify-start gap-8 rounded-md bg-white p-6 shadow-sm">
        <div
          className={`${outerColor()} flex h-16 w-16 items-center justify-center rounded-sm`}
        >
          <div
            className={`${innerColor()} flex h-10 w-10 items-center justify-center rounded-sm`}
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
