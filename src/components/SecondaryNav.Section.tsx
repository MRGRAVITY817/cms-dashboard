import { FC, useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { SecondaryNavItem, SecondaryNavItemProps } from "./SecondaryNavItem";

interface SecondaryNavSectionProps {
  title: string;
  showTotal?: boolean;
  items: SecondaryNavItemProps[];
}
export const SecondaryNavSection: FC<SecondaryNavSectionProps> = ({
  title,
  showTotal = false,
  items,
}) => {
  const [hideItems, setHideItems] = useState<boolean>(false);
  return (
    <section
      id={`${title} section`}
      className="grid grid-flow-row gap-2 items-start"
    >
      <div className="flex justify-between items-center">
        <h3
          className="cursor-pointer flex items-center justify-start gap-4"
          onClick={() => setHideItems(!hideItems)}
        >
          {title}{" "}
          <span>{hideItems ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}</span>
        </h3>
        {showTotal && <p className="p-2">{items.length}</p>}
      </div>
      <div className="">
        {!hideItems &&
          items.map((item, idx) => (
            <SecondaryNavItem
              key={`${title}-${idx}`}
              title={item.title}
              href={item.href}
            />
          ))}
      </div>
    </section>
  );
};
