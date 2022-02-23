import { FC } from "react";

interface SecondaryNavLayoutProps {
  title: string;
}
export const SecondaryNavLayout: FC<SecondaryNavLayoutProps> = ({
  title,
  children,
}) => {
  return (
    <nav className="h-screen w-full bg-slate-50">
      <div className="flex h-20 items-center justify-start pl-4">
        <h2 className="self-center">{title}</h2>
      </div>
      <div
        id="primary-nav-separator"
        className="ml-4 w-10 border-b border-slate-500 opacity-30"
      />
      <div id="secondary-nav-content" className="grid grid-flow-row gap-6 py-4">
        {children}
      </div>
    </nav>
  );
};
