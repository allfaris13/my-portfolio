import { cn } from "@/lib/utils";

export function Toast({ message, type = "success" }: { message: string; type?: 'success' | 'error' | 'info' }) {
  return (
    <div
      className={cn(
        "fixed bottom-5 right-5 px-4 py-3 rounded-lg shadow-lg text-white animate-slideUp",
        type === "success" && "bg-green-600",
        type === "error" && "bg-red-600",
        type === "info" && "bg-blue-600"
      )}
    >
      {message}
    </div>
  );
}
