import { CollectionTypesBody } from "@components/CollectionTypes.Body";
import { CollectionTypesHeader } from "@components/CollectionTypes.Header";
import { ContentManagerLayout } from "@layouts/ContentManager.Layout";
import { COLLECTION_TYPES } from "@utils/constants";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";

interface CollectionTypesProps {
  name?: string;
}

const Post: NextPage<CollectionTypesProps> = ({ name }) => {
  return (
    <ContentManagerLayout>
      <CollectionTypesHeader name={name ?? "Untitled"} />
      <CollectionTypesBody />
    </ContentManagerLayout>
  );
};

export default Post;

export const getStaticProps: GetStaticProps<
  CollectionTypesProps,
  { slug: string }
> = async ({ params }) => {
  const name = COLLECTION_TYPES.find((c) => c.href === params?.slug)?.name;
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
