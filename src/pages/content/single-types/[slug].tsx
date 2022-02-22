import { ContentManagerLayout } from "@layouts/ContentManager.Layout";
import { COLLECTION_TYPES, SINGLE_TYPES } from "@utils/constants";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";

interface SingleTypesProps {
  name?: string;
}

const Post: NextPage<SingleTypesProps> = ({ name }) => {
  return (
    <ContentManagerLayout>
      <header id={`collection-types-${name}`} className="w-full">
        <button className="text-purple-600">&larr; Back</button>
        <div className="flex items-start justify-between">
          <div>
            <h1>{name}</h1>
            <h3>0 entries found</h3>
          </div>
          <button className="bg-purple-600 rounded-md py-2 px-4">
            + Create new entry
          </button>
        </div>
      </header>
      <main>Contents</main>
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
