import Link from "next/link";
import { FC, ReactElement } from "react";

export interface PrimaryNavItemProps {
  title: string;
  href: string;
  icon: ReactElement;
}
export const PrimaryNavItem: FC<PrimaryNavItemProps> = ({ title, href, icon }) => {
  return (
    <Link href={href}>
      <a id={`${title} item`} className="flex items-center justify-start gap-3 hover:bg-gray-100 rounded-md p-2">
        {icon}
        <p>{title}</p>
      </a>
    </Link>
  );
};
