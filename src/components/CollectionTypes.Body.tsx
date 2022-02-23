import { FC, MouseEvent } from "react";
import {
  IoIosColorFilter,
  IoIosSearch,
  IoIosSettings,
  IoMdArrowDropdown,
} from "react-icons/io";
import { PencilAltIcon, PencilIcon, TrashIcon } from "@heroicons/react/outline";
import { EntryProps, FieldType, TableData } from "@utils/mockData";

interface CollectionTypesBodyProps {
  tableFields: EntryProps[];
  tableData: TableData;
}

export const CollectionTypesBody: FC<CollectionTypesBodyProps> = ({
  tableFields,
  tableData,
}) => {
  const toggleCheckAll = (
    e: MouseEvent<HTMLInputElement, globalThis.MouseEvent>
  ) => {
    if (typeof window !== "undefined") {
      document
        .querySelectorAll("input")
        .forEach((input) => (input.checked = e.currentTarget.checked));
    }
  };

  return (
    <main id={`collection-types body`} className="mt-20">
      <div id="content-header" className="flex items-center justify-between">
        <div id="content-search" className="flex">
          <button className="mr-2 rounded-md border border-slate-200 bg-white px-2 py-1">
            <IoIosSearch size="1.5rem" />
          </button>
          <button className="flex items-center justify-center gap-1 rounded-md border border-slate-200 bg-white px-2 py-1">
            <IoIosColorFilter size="1.5rem" />
            Filters
          </button>
        </div>
        <div id="content-setting" className="flex">
          <button className="mr-2 flex items-center justify-center gap-1 rounded-md border border-slate-200 bg-white px-2 py-1">
            4 currently selected
            <IoMdArrowDropdown size="1rem" />
          </button>
          <button className="flex items-center justify-center gap-1 rounded-md border border-slate-200 bg-white px-2 py-1">
            <IoIosSettings size="1.5rem" />
            Filters
          </button>
        </div>
      </div>
      <div
        id="content-table"
        className="mt-6 rounded-md bg-white p-4 shadow-sm"
      >
        <table className="min-w-full table-fixed">
          <thead>
            <tr>
              <th className="pb-4 pr-4 text-left">
                <input onClick={toggleCheckAll} type="checkbox" />
              </th>
              {tableFields
                .filter((field) => field.type !== "password")
                .map((field) => (
                  <th
                    scope="col"
                    key={`field-${field.name}-${field.type}`}
                    className="pb-4 text-left"
                  >
                    <button className="font-medium uppercase">
                      {field.name}
                    </button>
                  </th>
                ))}
              <th scope="col">
                <span className="sr-only">Edit and Delete</span>
              </th>
            </tr>
          </thead>
          <tbody className="border-t">
            {tableData.map((row, idx) => (
              <tr key={`row-${idx}`}>
                <td className="py-4">
                  <input id="row-checkbox" type="checkbox" />
                </td>
                {row
                  .filter((item) => item.type !== "password")
                  .map((item) => (
                    <td
                      key={`item-${idx}-${item.field}-${item.type}`}
                      className="py-4"
                    >
                      <FieldData type={item.type} data={item.data} />
                    </td>
                  ))}
                <td>
                  <div className="flex items-center justify-start gap-4">
                    <button className="font-normal text-indigo-600">
                      <PencilIcon className="w-4" />
                    </button>
                    <button className="font-normal text-slate-400">
                      <TrashIcon className="w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

const FieldData: FC<{ type: FieldType; data: string }> = ({ type, data }) => {
  switch (type) {
    case "long":
      return (
        <button className="flex items-center justify-start gap-2 rounded-sm border border-indigo-700 bg-indigo-100 px-2 py-1 text-xs font-normal text-indigo-700 hover:bg-indigo-50">
          More <PencilAltIcon className="w-4" />
        </button>
      );
    case "tags":
      return (
        <div className="flex flex-wrap items-center justify-start gap-1">
          {data.split(",").map((tag, i) => (
            <p
              key={`tag-${tag}-${i}`}
              className="rounded-sm border border-indigo-700 bg-indigo-100 p-1 text-xs text-indigo-700"
            >
              {tag}
            </p>
          ))}
        </div>
      );
    default:
      return <p>{data}</p>;
  }
};
