import { FC } from "react";

interface SecondaryNavLayoutProps {
  title: string;
}
export const SecondaryNavLayout: FC<SecondaryNavLayoutProps> = ({
  title,
  children,
}) => {
  return (
    <div className="h-screen w-full bg-slate-50">
      <div className="h-20 flex items-center justify-start pl-4">
        <h2 className="self-center">{title}</h2>
      </div>
      <div
        id="primary-nav-separator"
        className="border-b border-slate-500 opacity-30 w-10 ml-4"
      />
      <div
        id="secondary-nav-content"
        className="grid grid-flow-row gap-6 py-4 px-4"
      >
        {children}
      </div>
    </div>
  );
};
