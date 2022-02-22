import { FC, ReactElement } from "react";
import Head from "next/head";
import { PrimaryNav } from "../components/PrimaryNav";

interface MainLayoutProps {
  title: string;
  secondaryNav?: ReactElement;
}
export const MainLayout: FC<MainLayoutProps> = ({
  title,
  secondaryNav,
  children,
}) => {
  return (
    <div className="h-screen grid grid-cols-8 text-slate-800">
      <Head>
        <title>{`${title}  •  SecureCMS`}</title>
      </Head>
      <div className="col-span-1 border-r">
        <PrimaryNav />
      </div>
      {secondaryNav !== undefined && (
        <div className="col-span-1 border-r">{secondaryNav}</div>
      )}
      <div
        className={`${
          secondaryNav !== undefined ? `col-span-6` : `col-span-7`
        } py-8 px-12 bg-slate-100`}
      >
        {children}
      </div>
    </div>
  );
};
