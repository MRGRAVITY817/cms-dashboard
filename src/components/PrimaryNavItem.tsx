import Link from "next/link";
import { useRouter } from "next/router";
import { FC, ReactElement, useEffect, useState } from "react";

export interface PrimaryNavItemProps {
  title: string;
  href: string;
  icon: ReactElement;
}
export const PrimaryNavItem: FC<PrimaryNavItemProps> = ({
  title,
  href,
  icon,
}) => {
  const [selected, setSelected] = useState<boolean>(false);
  const router = useRouter();
  useEffect(() => {
    setSelected(router.asPath.split("/").includes(href.replace("/", "")));
  }, [router.asPath, href]);
  return (
    <Link href={href}>
      <a
        id={`${title} item`}
        className={`flex items-center justify-start gap-3 rounded-md p-2 hover:bg-slate-100 ${
          selected ? `bg-indigo-50 text-indigo-600` : `bg-transparent`
        }`}
      >
        {icon}
        <p>{title}</p>
      </a>
    </Link>
  );
};
