import { FC } from "react";

export const CollectionTypesHeader: FC<{ name: string }> = ({ name }) => {
  return (
    <header id={`collection-types header`} className="w-full">
      <button className="text-indigo-600 text-sm mb-4">&larr; Back</button>
      <div className="flex items-start justify-between">
        <div>
          <h1 className="mb-2">{name}</h1>
          <h3>0 entries found</h3>
        </div>
        <button className="bg-indigo-700 rounded-md py-2 px-4">
          <p className="text-white font-base">+ Create new entry</p>
        </button>
      </div>
    </header>
  );
};
