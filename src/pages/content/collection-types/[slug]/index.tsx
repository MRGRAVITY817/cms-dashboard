import { CollectionTypesBody } from "@components/CollectionTypes.Body";
import { CollectionTypesHeader } from "@components/CollectionTypes.Header";
import { ContentManagerLayout } from "@layouts/ContentManager.Layout";
import {
  COLLECTION_TYPES,
  POST_TABLE_DATA,
  POST_TABLE_FIELDS,
  PRODUCT_TABLE_DATA,
  PRODUCT_TABLE_FIELDS,
  USER_TABLE_DATA,
  USER_TABLE_FIELDS,
} from "@utils/mockData";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";

interface CollectionTypesProps {
  name?: string;
}

const CollectionTypes: NextPage<CollectionTypesProps> = ({ name }) => {
  const fields = (collection: string) => {
    switch (collection) {
      case "Product":
        return PRODUCT_TABLE_FIELDS;
      case "User":
        return USER_TABLE_FIELDS;
      case "Post":
        return POST_TABLE_FIELDS;
      default:
        return [];
    }
  };
  const data = (collection: string) => {
    switch (collection) {
      case "Product":
        return PRODUCT_TABLE_DATA;
      case "User":
        return USER_TABLE_DATA;
      case "Post":
        return POST_TABLE_DATA;
      default:
        return [];
    }
  };
  return (
    <ContentManagerLayout>
      <CollectionTypesHeader name={name ?? "Untitled"} />
      <CollectionTypesBody
        tableFields={fields(name + "")}
        tableData={data(name + "")}
      />
    </ContentManagerLayout>
  );
};

export default CollectionTypes;

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
