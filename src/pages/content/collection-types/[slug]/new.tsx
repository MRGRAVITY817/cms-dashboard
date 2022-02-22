import { BackButton } from "@components/BackButton";
import { EntryFormInput } from "@components/EntryFormInput";
import { BookOpenIcon, PencilIcon } from "@heroicons/react/outline";
import { ContentManagerLayout } from "@layouts/ContentManager.Layout";
import { COLLECTION_TYPES } from "@utils/constants";
import {
  EntryProps,
  POST_ENTRY_FIELDS,
  PRODUCT_ENTRY_FIELDS,
  USER_ENTRY_FIELDS,
} from "@utils/mockData";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

interface NewEntryProps {
  name: any;
}

const NewEntry: NextPage<NewEntryProps> = ({ name }) => {
  const router = useRouter();
  const newEntryFields = (apiId: string): EntryProps[] => {
    switch (apiId) {
      case "product":
        return PRODUCT_ENTRY_FIELDS;
      case "user":
        return USER_ENTRY_FIELDS;
      case "post":
        return POST_ENTRY_FIELDS;
      default:
        return [];
    }
  };
  return (
    <ContentManagerLayout>
      <header id={`collection-types header`} className="w-full">
        <BackButton />
        <div className="flex items-start justify-between">
          <div>
            <h1 className="mb-2">Create an entry</h1>
            <h3>API ID: {name}</h3>
          </div>
          <button
            onClick={router.back}
            className="bg-indigo-600 hover:bg-indigo-500 transition-colors rounded-md py-2 px-4"
          >
            <p className="text-white font-base">Save</p>
          </button>
        </div>
      </header>
      <div className="mt-20 flex items-start gap-4 w-full">
        <form className="col-span-3 grid grid-cols-2 gap-y-6 gap-x-8 bg-white shadow-md p-6 rounded-md w-3/4">
          {newEntryFields(name).map((field) => (
            <EntryFormInput
              key={field.name}
              name={field.name}
              type={field.type}
            />
          ))}
        </form>
        <div className="col-span-1 grid grid-flow-row gap-4 w-1/4">
          <div
            id="entry info"
            className="grid grid-flow-row gap-2 bg-white rounded-md shadow-md p-6 h-56"
          >
            <h3>INFORMATION</h3>
            <div className="border-b border-slate-300" />
            <div className="flex items-center justify-between">
              <p className="font-medium">Created</p>
              <p>Now</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="font-medium">By</p>
              <p>-</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="font-medium">Updated</p>
              <p>Now</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="font-medium">By</p>
              <p>-</p>
            </div>
          </div>
          <button className="border border-indigo-300 bg-indigo-100 text-indigo-700 font-medium flex items-center justify-start gap-2 rounded-sm py-2 px-4 hover:bg-indigo-50">
            <PencilIcon className="w-4" />
            Edit the model
          </button>
          <button className="border border-indigo-300 bg-indigo-100 text-indigo-700 font-medium flex items-center justify-start gap-2 rounded-sm py-2 px-4 hover:bg-indigo-50">
            <BookOpenIcon className="w-4" />
            Configure the view
          </button>
        </div>
      </div>
    </ContentManagerLayout>
  );
};

export default NewEntry;

export const getStaticProps: GetStaticProps<
  NewEntryProps,
  { slug: string }
> = async ({ params }) => {
  const name = params?.slug;
  return {
    props: {
      name,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: COLLECTION_TYPES.map((p) => ({ params: { slug: p.href } })),
    fallback: false,
  };
};
