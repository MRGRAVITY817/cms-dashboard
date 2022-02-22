import { FieldType } from "@utils/mockData";
import { FC } from "react";
import {
  BooleanInput,
  LongTextInput,
  NumberInput,
  PriceInput,
  ShortTextInput,
} from "./Fields";

interface EntryFormInputProps {
  name: string;
  type: FieldType;
}
export const EntryFormInput: FC<EntryFormInputProps> = ({ name, type }) => {
  return (
    <div>
      <p className="mb-2 font-medium">{name}</p>
      {type === "boolean" && <BooleanInput />}
      {type === "short" && <ShortTextInput />}
      {type === "long" && <LongTextInput />}
      {type === "price" && <PriceInput />}
      {type === "number" && <NumberInput />}
    </div>
  );
};
