import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps 
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "font-medium transition-all duration-200 rounded-lg",
          
          // Variant
          variant === "primary" && "bg-purple-700 text-white hover:bg-purple-700 shadow",
          variant === "outline" && "border border-gray-300 hover:bg-gray-600",
          variant === "ghost" && "hover:bg-gray-100",

          // Size
          size === "sm" && "px-3 py-1.5 text-sm",
          size === "md" && "px-4 py-2",
          size === "lg" && "px-5 py-3 text-lg",

          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
