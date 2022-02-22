import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface CommunityItemProps {
  src: string;
  title: string;
  href: string;
}

export const CommunityItem: FC<CommunityItemProps> = ({ src, title, href }) => {
  return (
    <Link href={href}>
      <a className="flex items-center gap-2 justify-start">
        <Image src={src} alt={title} width={30} height={30} />
        <p className="font-medium">{title}</p>
      </a>
    </Link>
  );
};
