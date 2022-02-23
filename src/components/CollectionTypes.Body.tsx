import { FIELDS } from "@utils/constants";
import { FC, useState } from "react";
import {
  IoIosColorFilter,
  IoIosSearch,
  IoIosSettings,
  IoMdArrowDropdown,
} from "react-icons/io";
import {
  CheckIcon,
  FolderAddIcon,
  PencilAltIcon,
} from "@heroicons/react/outline";
import { useRouter } from "next/router";
import Link from "next/link";
import { EntryProps, TableData } from "@utils/mockData";

interface CollectionTypesBodyProps {
  tableFields: EntryProps[];
  tableData: TableData;
}

export const CollectionTypesBody: FC<CollectionTypesBodyProps> = ({
  tableFields,
  tableData,
}) => {
  const [selectAll, setSelectAll] = useState<boolean>(false);
  const [data, setData] = useState<TableData>(tableData);
  const router = useRouter();

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
        <table className="min-w-full table-fixed">
          <thead>
            <tr className="">
              <th className="pb-4">
                <button
                  className={`w-6 h-6 border-2 border-slate-700 flex items-center justify-center rounded-sm`}
                >
                  <CheckIcon className="w-4" />
                </button>
              </th>
              {tableFields.map((field) => (
                <th
                  scope="col"
                  key={`field-${field.name}-${field.type}`}
                  className="text-left pb-4"
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
            {data.map((row, idx) => (
              <tr key={`row-${idx}`}>
                <td className="py-4">
                  <button
                    className={`w-6 h-6 border-2 border-slate-700 flex items-center justify-center rounded-sm`}
                  >
                    <CheckIcon className="w-4" />
                  </button>
                </td>
                {row.map((item) => (
                  <td
                    key={`item-${idx}-${item.field}-${item.type}`}
                    className="py-4"
                  >
                    {item.type === "long" ? (
                      <button className="flex items-center justify-start gap-2 bg-indigo-100 border text-indigo-700 border-indigo-700 hover:bg-indigo-50 px-2 py-1 rounded-sm text-xs">
                        More <PencilAltIcon className="w-4" />
                      </button>
                    ) : item.type === "tags" ? (
                      <div className="flex items-center justify-start gap-1 flex-wrap">
                        {item.data.split(",").map((tag) => (
                          <p
                            key={`tag-${idx}-${item.field}-${tag}`}
                            className="p-1 border border-indigo-700 bg-indigo-100 rounded-sm text-xs text-indigo-700"
                          >
                            {tag}
                          </p>
                        ))}
                      </div>
                    ) : (
                      <p>{item.data}</p>
                    )}
                  </td>
                ))}
                <td>
                  <div className="flex items-center justify-start gap-2">
                    <button className="text-indigo-600 font-normal">
                      Edit
                    </button>
                    <button className="text-slate-400 font-normal">
                      Delete
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
