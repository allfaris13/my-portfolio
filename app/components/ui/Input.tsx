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
          "w-full px-4 py-2 rounded-lg border",
          "border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
          "transition-all outline-none",
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
