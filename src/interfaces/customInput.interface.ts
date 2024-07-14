import { ReactNode } from "react";
import { IErrorMessages } from "./error.interface";

export interface CustomInputProps {
  placeholder: string;
  placeholderIcon?: ReactNode;
  customClassName?: string;
  inputStyle?: string;
  type?: "text" | "email" | "number" | "password";
  onChange?: (e: any) => void;
  value?: string | number | unknown | any;
  defaultValue?: string | number | unknown | any;
  name?: string;
  readonly?: boolean;
  label?: string;
  disabled?: boolean;
  errors?: IErrorMessages[] | null;
}
