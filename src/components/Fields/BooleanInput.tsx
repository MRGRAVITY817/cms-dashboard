import { useState } from "react";

export const BooleanInput = () => {
  const [yes, setYes] = useState<boolean>(false);
  return (
    <div className="flex items-center gap-0 rounded-md overflow-hidden">
      <button
        type="button"
        onClick={() => setYes(true)}
        className={`${
          yes
            ? `bg-indigo-800 text-indigo-50 font-medium`
            : `bg-indigo-50 text-indigo-800 font-light`
        } px-4 py-2 rounded-l-md`}
      >
        YES
      </button>
      <button
        type="button"
        onClick={() => setYes(false)}
        className={`${
          !yes
            ? `bg-indigo-800 text-indigo-50 font-medium`
            : `bg-indigo-50 text-indigo-800 font-light`
        } px-4 py-2 rounded-r-md`}
      >
        NO
      </button>
    </div>
  );
};
