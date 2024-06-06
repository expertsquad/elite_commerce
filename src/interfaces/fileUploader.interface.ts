import { ReactNode } from "react";

export interface IFileUploaderProps {
  name: string;
  data: Record<string, any> | string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  accept?: string;
  multiple?: boolean;
  maxSize?: number;
  error?: string;
  className?: string;
  disabled?: boolean;
  children?: ReactNode;
  uid?: number;
  bottomText?: string;
}
