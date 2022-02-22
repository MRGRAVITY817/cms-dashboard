import { FC, ReactElement } from "react";
import Head from "next/head";
import { PrimaryNav } from "../components/PrimaryNav";

interface MainLayoutProps {
  title: string;
  secondaryNav?: ReactElement;
}
export const MainLayout: FC<MainLayoutProps> = ({ title, secondaryNav, children }) => {
  return (
    <div className="h-screen grid grid-cols-8">
      <Head>
        <title>{title} | SecureCMS</title>
      </Head>
      <div className="col-span-1">
        <PrimaryNav />
      </div>
      {secondaryNav === undefined && <div className="col-span-1">{secondaryNav}</div>}
      <div>{children}</div>
    </div>
  );
};
