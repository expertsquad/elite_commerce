export interface IErrorMessages {
  path: string;
  message: string;
}

export interface IError {
  success: false;
  message: string;
  errorMessages: IErrorMessages[];
}
