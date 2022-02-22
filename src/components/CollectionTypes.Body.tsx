import { FIELDS } from "@utils/constants";
import { useState } from "react";
import {
  IoIosColorFilter,
  IoIosSearch,
  IoIosSettings,
  IoMdArrowDropdown,
} from "react-icons/io";
import { CheckIcon } from "@heroicons/react/outline";

export const CollectionTypesBody = () => {
  const [selectAll, setSelectAll] = useState<boolean>(false);

  return (
    <main id={`collection-types body`} className="mt-20">
      <div id="content-header" className="flex justify-between items-center">
        <div id="content-search" className="flex">
          <button className="bg-white border border-slate-200 mr-2 px-2 py-1 rounded-md">
            <IoIosSearch size="1.5rem" />
          </button>
          <button className="flex items-center gap-1 bg-white border justify-center border-slate-200 px-2 py-1 rounded-md">
            <IoIosColorFilter size="1.5rem" />
            Filters
          </button>
        </div>
        <div id="content-setting" className="flex">
          <button className="bg-white border border-slate-200 mr-2 flex items-center gap-1 justify-center px-2 py-1 rounded-md">
            4 currently selected
            <IoMdArrowDropdown size="1rem" />
          </button>
          <button className="flex items-center gap-1 justify-center border bg-white border-slate-200 px-2 py-1 rounded-md">
            <IoIosSettings size="1.5rem" />
            Filters
          </button>
        </div>
      </div>
      <div
        id="content-table"
        className="shadow-md bg-white p-4 mt-6 rounded-md"
      >
        <div
          id="content-fields"
          className="flex items-center justify-start gap-6"
        >
          <button
            onClick={() => setSelectAll(!selectAll)}
            className={`${
              selectAll && `bg-slate-600`
            } w-5 h-5 rounded-sm border-2 border-slate-600 flex items-center justify-center`}
          >
            {selectAll && <CheckIcon className="text-white font-medium w-4" />}
          </button>
          <div className="grid grid-flow-col w-full">
            {FIELDS.map((field) => (
              <button className="font-medium" key={`content-field-${field}`}>
                {field.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
        <div
          id="content-separator"
          className="border-b border-slate-200 my-4"
        />
      </div>
    </main>
  );
};
