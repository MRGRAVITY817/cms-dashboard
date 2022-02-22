import { FC } from "react";
import { PrimaryNavItem, PrimaryNavItemProps } from "./PrimaryNavItem";

interface PrimaryNavSectionProps {
  title: string;
  items: PrimaryNavItemProps[];
}
export const PrimaryNavSection: FC<PrimaryNavSectionProps> = ({
  title,
  items,
}) => {
  return (
    <div
      id={`${title} section`}
      className="grid grid-flow-row gap-2 items-start"
    >
      <h3>{title}</h3>
      {items.map((item, idx) => (
        <PrimaryNavItem
          key={`${title}-${idx}`}
          title={item.title}
          href={item.href}
          icon={item.icon}
        />
      ))}
    </div>
  );
};
