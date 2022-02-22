export type FieldType =
  | "short"
  | "password"
  | "long"
  | "price"
  | "number"
  | "boolean"
  | "tags"
  | "auto";

export interface EntryProps {
  name: string;
  type: FieldType;
}

export interface ProductFields {
  id: number;
  name: string;
  price: number;
  description: string;
  stock: number;
}

export interface UserFields {
  id: number;
  username: string;
  email: string;
  password: string;
  confirmed: boolean;
}

export interface PostFields {
  id: number;
  title: string;
  summary: string;
  content: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

export const PRODUCT_ENTRY_FIELDS: EntryProps[] = [
  { name: "name", type: "short" },
  { name: "price", type: "price" },
  { name: "description", type: "long" },
  { name: "stock", type: "number" },
];

export const USER_ENTRY_FIELDS: EntryProps[] = [
  { name: "username", type: "short" },
  { name: "email", type: "short" },
  { name: "password", type: "password" },
  { name: "confirmed", type: "boolean" },
];

export const POST_ENTRY_FIELDS: EntryProps[] = [
  { name: "title", type: "short" },
  { name: "summary", type: "short" },
  { name: "content", type: "long" },
  { name: "tags", type: "tags" },
];
