import { ReactNode } from "react";

export interface IFileUploaderProps {
  name: string;
  url?: string;
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
  imageController?: string;
  overlay?: any;
  overlayIConX?: any;
  overlayIConXClassName?: string;
  childrenMainDiv?: string;
  imgClassName?: string;
  deleteServerImage?: boolean;
  setDeletedImageUrl?: any;
  onDelete?: (url: string) => void;
}
