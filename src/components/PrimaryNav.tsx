import { GiPlug, GiQuillInk, GiShoppingCart } from "react-icons/gi";
import { IoIosImages, IoIosSettings } from "react-icons/io";
import { AiOutlineBuild } from "react-icons/ai";
import { PrimaryNavSection } from "./PrimaryNav.Section";
import Image from "next/image";
import { PrimaryNavItem } from "./PrimaryNavItem";
import Link from "next/link";

export const PrimaryNav = () => {
  return (
    <div className="h-screen w-full bg-white">
      <Link href="/">
        <a
          id="dashboard-main"
          className="py-4 px-2 flex items-center justify-center gap-3 h-20"
        >
          <Image src="/logo.svg" alt="SecureCMS logo" width={50} height={50} />
          <div className="flex flex-col items-start justify-between">
            <h3 className="font-medium">SecureCMS</h3>
            <p className="font-light">Dashboard Workspace</p>
          </div>
        </a>
      </Link>
      <div
        id="primary-nav-separator"
        className="border-b border-slate-500 opacity-30"
      />
      <div className="p-4 grid grid-flow-row gap-6">
        <PrimaryNavItem
          icon={<GiQuillInk size="1.4em" />}
          title="Content Manager"
          href="/content"
        />
        <PrimaryNavSection
          title="Plugins"
          items={[
            {
              title: "Content-Type Builder",
              href: "/content-type-builder",
              icon: <AiOutlineBuild size="1.4em" />,
            },
            {
              title: "Media Library",
              href: "/media-library",
              icon: <IoIosImages size="1.4em" />,
            },
          ]}
        />
        <PrimaryNavSection
          title="General"
          items={[
            {
              title: "Plugins",
              href: "/plugins",
              icon: <GiPlug size="1.4em" />,
            },
            {
              title: "Marketplace",
              href: "/marketplace",
              icon: <GiShoppingCart size="1.4em" />,
            },
            {
              title: "Settings",
              href: "/settings",
              icon: <IoIosSettings size="1.4em" />,
            },
          ]}
        />
      </div>
    </div>
  );
};
