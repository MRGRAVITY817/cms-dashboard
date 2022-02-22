import { XIcon } from "@heroicons/react/outline";
import { KeyboardEvent, useRef, useState } from "react";

export const TagInput = () => {
  const [input, setInput] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);
  const tagInputRef = useRef<HTMLInputElement | null>(null);
  const parseTags = (ev: KeyboardEvent<HTMLInputElement>) => {
    if (ev.code === "Space") {
      console.log("Called");
      setTags([...tags, input]);
      setInput("");
    }
  };
  return (
    <div className="bg-white w-full items-center justify-start">
      <div
        className={`flex flex-wrap items-center gap-2 justify-start ${
          tags.length > 0 && `mb-2`
        }`}
      >
        {tags?.map((tag) => (
          <div
            key={`tag-${tag}`}
            className="pl-2 pr-1 py-1 rounded-sm bg-indigo-100 flex items-center gap-1"
          >
            <p className="text-xs">{tag}</p>
            <XIcon
              className="w-3 cursor-pointer"
              onClick={() => setTags(tags.filter((t) => t !== tag))}
            />
          </div>
        ))}
      </div>
      <input
        id="tag-input"
        type="text"
        placeholder="Press 'space' to add tag"
        value={input}
        onChange={(e) => setInput(e.currentTarget.value)}
        onKeyPress={parseTags}
        ref={tagInputRef}
        className="outline-none placeholder:text-sm border border-slate-300 focus:border-2 focus:border-slate-500 rounded-md p-2 "
      />
    </div>
  );
};
