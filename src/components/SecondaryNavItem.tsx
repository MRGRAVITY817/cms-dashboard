import Link from "next/link";
import { FC } from "react";

export interface SecondaryNavItemProps {
  title: string;
  href: string;
}
export const SecondaryNavItem: FC<SecondaryNavItemProps> = ({
  title,
  href,
}) => {
  return (
    <Link href={href}>
      <a
        id={`${title} item`}
        className="flex items-center justify-start gap-3 hover:bg-slate-100 rounded-md p-2"
      >
        <p>• {title}</p>
      </a>
    </Link>
  );
};
