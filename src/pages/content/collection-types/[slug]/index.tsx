import { CollectionTypesBody } from "@components/CollectionTypes.Body";
import { CollectionTypesHeader } from "@components/CollectionTypes.Header";
import { ContentManagerLayout } from "@layouts/ContentManager.Layout";
import {
  COLLECTION_TYPES,
  EntryProps,
  POST_TABLE_DATA,
  POST_TABLE_FIELDS,
  PRODUCT_TABLE_DATA,
  PRODUCT_TABLE_FIELDS,
  TableData,
  USER_TABLE_DATA,
  USER_TABLE_FIELDS,
} from "@utils/mockData";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";

interface CollectionTypesProps {
  name?: string;
  fields: EntryProps[];
  data: TableData;
}

const CollectionTypes: NextPage<CollectionTypesProps> = ({
  name,
  fields,
  data,
}) => {
  return (
    <ContentManagerLayout>
      <CollectionTypesHeader total={data.length} name={name ?? "Untitled"} />
      <CollectionTypesBody tableFields={fields} tableData={data} />
    </ContentManagerLayout>
  );
};

export default CollectionTypes;

export const getStaticProps: GetStaticProps<
  CollectionTypesProps,
  { slug: string }
> = async ({ params }) => {
  const name = COLLECTION_TYPES.find((c) => c.href === params?.slug)?.name;
  const fieldsAndData = (collection: string) => {
    switch (collection) {
      case "Product":
        return { fields: PRODUCT_TABLE_FIELDS, data: PRODUCT_TABLE_DATA };
      case "User":
        return { fields: USER_TABLE_FIELDS, data: USER_TABLE_DATA };
      case "Post":
        return { fields: POST_TABLE_FIELDS, data: POST_TABLE_DATA };
      default:
        return { fields: [], data: [] };
    }
  };
  return {
    props: {
      name,
      ...fieldsAndData(name + ""),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: COLLECTION_TYPES.map((p) => ({ params: { slug: p.href } })),
    fallback: false,
  };
};
