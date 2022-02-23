import { SecondaryNavSection } from "@components/SecondaryNav.Section";
import { COLLECTION_TYPES, SINGLE_TYPES } from "@utils/mockData";
import { FC } from "react";
import { MainLayout } from "./Main.Layout";
import { SecondaryNavLayout } from "./SecondaryNav.Layout";

export const ContentManagerLayout: FC = ({ children }) => {
  return (
    <MainLayout title="Content Manager" secondaryNav={<SecondaryNav />}>
      {children}
    </MainLayout>
  );
};

const SecondaryNav = () => {
  return (
    <SecondaryNavLayout title="Content">
      <SecondaryNavSection
        title="Collection Types"
        items={COLLECTION_TYPES.map((c) => {
          return {
            title: c.name,
            href: `/content/collection-types/${c.href}`,
          };
        })}
      />
      <SecondaryNavSection
        title="Single Types"
        items={SINGLE_TYPES.map((s) => {
          return { title: s.name, href: `/content/single-types/${s.href}` };
        })}
      />
    </SecondaryNavLayout>
  );
};
