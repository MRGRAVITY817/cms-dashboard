export type FieldType =
  | "short"
  | "password"
  | "long"
  | "price"
  | "number"
  | "boolean"
  | "tags";

export interface EntryProps {
  name: string;
  type: FieldType;
}

export type TableData = { field: string; type: FieldType; data: string }[][];

export const PRODUCT_TABLE_FIELDS: EntryProps[] = [
  { name: "id", type: "number" },
  { name: "name", type: "short" },
  { name: "price", type: "price" },
  { name: "description", type: "long" },
  { name: "stock", type: "number" },
];

export const PRODUCT_ENTRY_FIELDS: EntryProps[] = [
  { name: "name", type: "short" },
  { name: "price", type: "price" },
  { name: "description", type: "long" },
  { name: "stock", type: "number" },
];

export const PRODUCT_TABLE_DATA: TableData = [
  [
    { field: "id", type: "number", data: "1" },
    { field: "name", type: "short", data: "Hoon T-shirt" },
    { field: "price", type: "price", data: "12" },
    {
      field: "description",
      type: "long",
      data: "Just an ordinary T-shirt, But with extra specialties in it.",
    },
    { field: "stock", type: "number", data: "12" },
  ],
  [
    { field: "id", type: "number", data: "2" },
    { field: "name", type: "short", data: "Hoon Hoodies" },
    { field: "price", type: "price", data: "25" },
    {
      field: "description",
      type: "long",
      data: "Wanna be one of the cool guys? Try this on.",
    },
    { field: "stock", type: "number", data: "6" },
  ],
  [
    { field: "id", type: "number", data: "3" },
    { field: "name", type: "short", data: "Harry Potter Sunglasses" },
    { field: "price", type: "price", data: "30" },
    {
      field: "description",
      type: "long",
      data: "To protect his eyes from light bursting out of his wand, Harry needs sunglasses.",
    },
    { field: "stock", type: "number", data: "9" },
  ],
];

export const USER_TABLE_FIELDS: EntryProps[] = [
  { name: "id", type: "number" },
  { name: "username", type: "short" },
  { name: "email", type: "short" },
  { name: "password", type: "password" },
  { name: "confirmed", type: "boolean" },
];

export const USER_ENTRY_FIELDS: EntryProps[] = [
  { name: "username", type: "short" },
  { name: "email", type: "short" },
  { name: "password", type: "password" },
  { name: "confirmed", type: "boolean" },
];

export const USER_TABLE_DATA: TableData = [
  [
    { field: "id", type: "number", data: "1" },
    { field: "username", type: "short", data: "mrgravity817" },
    { field: "email", type: "short", data: "mrgravity817@gmail.com" },
    { field: "password", type: "password", data: "" },
    { field: "confirmed", type: "boolean", data: "True" },
  ],
  [
    { field: "id", type: "number", data: "2" },
    { field: "username", type: "short", data: "coderoundhoon" },
    { field: "email", type: "short", data: "coderoundhoon@gmail.com" },
    { field: "password", type: "password", data: "" },
    { field: "confirmed", type: "boolean", data: "True" },
  ],
  [
    { field: "id", type: "number", data: "3" },
    { field: "username", type: "short", data: "hello123" },
    { field: "email", type: "short", data: "hello123@email.com" },
    { field: "password", type: "password", data: "" },
    { field: "confirmed", type: "boolean", data: "False" },
  ],
  [
    { field: "id", type: "number", data: "4" },
    { field: "username", type: "short", data: "warmachineroxx" },
    { field: "email", type: "short", data: "warmachineroxx@avengers.us" },
    { field: "password", type: "password", data: "" },
    { field: "confirmed", type: "boolean", data: "True" },
  ],
  [
    { field: "id", type: "number", data: "5" },
    { field: "username", type: "short", data: "kingsleysbolt" },
    { field: "email", type: "short", data: "kingsleysbolt@ministry.magic" },
    { field: "password", type: "password", data: "" },
    { field: "confirmed", type: "boolean", data: "True" },
  ],
];

export const POST_TABLE_FIELDS: EntryProps[] = [
  { name: "id", type: "number" },
  { name: "title", type: "short" },
  { name: "summary", type: "short" },
  { name: "content", type: "long" },
  { name: "tags", type: "tags" },
  { name: "createdAt", type: "short" },
  { name: "updatedAt", type: "short" },
];

export const POST_ENTRY_FIELDS: EntryProps[] = [
  { name: "title", type: "short" },
  { name: "summary", type: "short" },
  { name: "content", type: "long" },
  { name: "tags", type: "tags" },
];

export const POST_TABLE_DATA: TableData = [
  [
    { field: "id", type: "number", data: "1" },
    { field: "title", type: "short", data: "Hello and welcome!" },
    {
      field: "summary",
      type: "short",
      data: "I am grateful to have you here.",
    },
    {
      field: "content",
      type: "long",
      data: "Hello, stranger. My name is Hoon Wee, and I am the founder of the SecureCMS. SecureCMS is actually just a clone project for Strapi CMS, so don't that this too seriously. I hope you wander around and have fun!",
    },
    { field: "tags", type: "tags", data: "greetings,easteregg,intro" },
    { field: "createdAt", type: "short", data: "2022-02-22" },
    { field: "updatedAt", type: "short", data: "2022-02-22" },
  ],
];

export const COLLECTION_TYPES = [
  { name: "Product", href: "product" },
  { name: "User", href: "user" },
  { name: "Post", href: "post" },
];
export const SINGLE_TYPES = [{ name: "Title", href: "title" }];
