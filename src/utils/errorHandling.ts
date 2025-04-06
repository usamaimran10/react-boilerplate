import { AxiosError } from "axios";

export function normlizeErrorMessage(error: unknown) {
  console.log(error instanceof AxiosError);
  if (error instanceof AxiosError) {
    // return errorMessages[
    //   error.response?.data?.message as keyof typeof errorMessages
    // ];
  }
  if (error instanceof Error) {
    return error.message;
  }

  return String(error);
}
