import { BackButton } from "@components/BackButton";
import {
  BookOpenIcon,
  CheckIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/outline";
import { ContentManagerLayout } from "@layouts/ContentManager.Layout";
import { SINGLE_TYPES } from "@utils/mockData";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useState } from "react";

interface SingleTypesProps {
  name?: string;
}

const Post: NextPage<SingleTypesProps> = ({ name }) => {
  const [input, setInput] = useState<string>("");
  return (
    <ContentManagerLayout>
      <header id={`collection-types header`} className="w-full">
        <BackButton />
        <div className="flex items-start justify-between">
          <div>
            <h1 className="mb-2">{name}</h1>
            <h3>API ID: {name?.toLowerCase()}</h3>
          </div>
          <div className="flex items-center justify-start gap-4">
            <p className="flex items-center gap-2 rounded-md border border-indigo-400 bg-indigo-100 py-2 px-4 font-medium text-indigo-700 transition-colors hover:bg-indigo-50">
              <CheckIcon className="w-5" /> Published
            </p>
            <button
              disabled={input.length === 0}
              onClick={() => setInput("")}
              className={`rounded-md border border-emerald-400 bg-emerald-100 py-2 px-6 font-medium text-emerald-700 transition-colors hover:bg-emerald-50 disabled:border-slate-400 disabled:bg-slate-200 disabled:text-slate-400`}
            >
              Save
            </button>
          </div>
        </div>
      </header>
      <main className="mt-20 flex items-start justify-between gap-6">
        <div
          id="value input"
          className="w-3/4 rounded-md bg-white p-6 shadow-sm"
        >
          <h3 className="mb-4">{name}</h3>
          <input
            type="text"
            value={input}
            placeholder={`Type in ${name}...`}
            className="w-2/3 rounded-md border border-slate-400 py-1 px-2 outline-none placeholder:text-sm focus:border-2 focus:border-slate-600"
            onChange={(e) => setInput(e.currentTarget.value)}
          />
        </div>
        <div id="item info" className="grid w-1/4 grid-flow-row gap-2">
          <div className="rounded-md border border-emerald-400 bg-emerald-50 p-4">
            <p className="font-normal text-emerald-700">
              • Editing <span className="font-semibold">published version</span>
            </p>
          </div>
          <div
            id="entry info"
            className="grid h-56 grid-flow-row gap-2 rounded-md bg-white p-6 shadow-sm"
          >
            <h3>INFORMATION</h3>
            <div className="border-b border-slate-300" />
            <div className="flex items-center justify-between">
              <p className="font-medium">Created</p>
              <p>2 hours ago</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="font-medium">By</p>
              <p>Hoon Wee</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="font-medium">2 hours ago</p>
              <p>Now</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="font-medium">By</p>
              <p>Hoon Wee</p>
            </div>
          </div>
          <button className="flex items-center justify-start gap-2 rounded-sm border border-indigo-300 bg-indigo-100 py-2 px-4 font-medium text-indigo-700 hover:bg-indigo-50">
            <PencilIcon className="w-4" />
            Edit the model
          </button>
          <button className="flex items-center justify-start gap-2 rounded-sm border border-indigo-300 bg-indigo-100 py-2 px-4 font-medium text-indigo-700 hover:bg-indigo-50">
            <BookOpenIcon className="w-4" />
            Configure the view
          </button>
          <button className="flex items-center justify-start gap-2 rounded-sm border border-red-300 bg-red-100 py-2 px-4 font-medium text-red-700 hover:bg-red-50">
            <TrashIcon className="w-4" />
            Delete this entry
          </button>
        </div>
      </main>
    </ContentManagerLayout>
  );
};

export default Post;

export const getStaticProps: GetStaticProps<
  SingleTypesProps,
  { slug: string }
> = async ({ params }) => {
  const name = SINGLE_TYPES.find((s) => s.href === params?.slug)?.name;
  return {
    props: {
      name,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: SINGLE_TYPES.map((p) => ({ params: { slug: p.href } })),
    fallback: false,
  };
};
