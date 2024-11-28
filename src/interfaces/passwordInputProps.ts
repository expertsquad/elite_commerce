import { IErrorMessages } from "./error.interface";

export interface PasswordInputProps {
  placeholder?: string;
  className?: string;
  inputStyle?: string;
  onChange?: (e: any) => void;
  value?: string | number;
  name?: string;
  error?: string;
  required?: boolean;
}
