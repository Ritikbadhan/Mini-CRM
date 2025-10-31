import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import toast from "react-hot-toast";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const showSuccess = (message: string) => {
  toast.success(message, {
    style: { background: "#10b981", color: "#fff" },
    iconTheme: { primary: "#fff", secondary: "#10b981" },
  });
};

export const showError = (message: string) => {
  toast.error(message, {
    style: { background: "#ef4444", color: "#fff" },
    iconTheme: { primary: "#fff", secondary: "#ef4444" },
  });
};