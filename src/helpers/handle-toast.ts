import { toast } from "react-hot-toast";

export const toaster = (msg: string, type: string) => {
  switch (type) {
    case "success":
      toast.success(msg, {
        style: {
          background: "#8F0DCC",
          color: "#fff",
        },
      });
      break;
    case "error":
      toast.error(msg, {
        style: {
          background: "#BC6EE0",
          color: "#fff",
        },
      });
      break;
    default:
      break;
  }
};
