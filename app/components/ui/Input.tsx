import * as React from "react";
import { cn } from "@/lib/utils";

export const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={cn(
        "w-full px-4 py-2 rounded-lg border transition-all outline-none",
        // Background hitam yang lebih terang
        "bg-gray-900 text-gray-100 border-gray-600 placeholder-gray-400",
        "focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 hover:border-purple-600",
        className
      )}
      {...props}
    />
  );
});

Input.displayName = "Input";
