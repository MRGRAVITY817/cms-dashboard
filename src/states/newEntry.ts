import { FieldType } from "@utils/mockData";
import { atom } from "recoil";

interface Props {
  appId: string;
  fields: { name: string; type: FieldType }[];
}

export const NewEntryFormState = atom<Props>({
  key: "NewEntryFormState",
  default: {
    appId: "",
    fields: [],
  },
});
