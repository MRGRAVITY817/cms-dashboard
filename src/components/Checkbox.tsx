import { CheckIcon } from "@heroicons/react/outline";
import { FC, useState } from "react";

export const Checkbox: FC<{ selected?: boolean; onClick?: () => void }> = ({
  selected = false,
  onClick,
}) => {
  const [ok, setOk] = useState<boolean>(selected);
  return (
    // <button
    //   onClick={() => setOk(!ok)}
    //   className={`${
    //     ok ? `bg-slate-700` : `bg-transparent`
    //   } w-6 h-6 border-2 border-slate-700 flex items-center justify-center rounded-sm`}
    // >
    //   <CheckIcon
    //     className={`w-4 text-white ${ok ? `opacity-100` : `opacity-0`}`}
    //   />
    // </button>
    <input type="checkbox" />
  );
};
