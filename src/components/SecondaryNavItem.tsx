import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";

export interface SecondaryNavItemProps {
  title: string;
  href: string;
}
export const SecondaryNavItem: FC<SecondaryNavItemProps> = ({
  title,
  href,
}) => {
  const [selected, setSelected] = useState<boolean>(false);
  const router = useRouter();
  useEffect(() => {
    setSelected(router.asPath.includes(href));
  }, [router.asPath, href]);
  return (
    <Link href={href}>
      <a
        id={`${title} item`}
        className={`flex items-center justify-start gap-3 py-2 pl-6 text-sm font-light ${
          selected
            ? `border-r-4 border-indigo-500 bg-indigo-50`
            : `bg-transparent`
        }`}
      >
        • {title}
      </a>
    </Link>
  );
};
