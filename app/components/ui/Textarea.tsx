import * as React from "react";
import { cn } from "@/lib/utils";

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={cn(
        "w-full px-4 py-3 border rounded-xl",
        "border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
        "transition-all resize-none outline-none",
        className
      )}
      {...props}
    />
  );
});

Textarea.displayName = "Textarea";
