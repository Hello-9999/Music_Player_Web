// import toast from "sonner";
import { toast } from "sonner";

export const errorToast = (msg) => {
  return toast.error(msg);
};
export const successToast = (msg) => {
  return toast.success(msg);
};
export const infoToast = (msg) => {
  return toast.info(msg);
};

export const customErrorToaster = (title, des) => {
  return toast.error(title, {
    description: des,
  });
};
export const customInfoToaster = (title, des) => {
  return toast.warning(title, {
    description: des,
  });
};
