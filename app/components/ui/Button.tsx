import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  /** When true, disables the hover shadow so callers can preserve legacy button visuals. */
  noHoverShadow?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      noHoverShadow = false,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          // base
          "font-medium transition-all duration-300 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/20",
          !noHoverShadow && "shadow-sm",

          // Variant - tema hitam dan ungu
          variant === "primary" &&
            `bg-gradient-primary text-white hover:opacity-90 ${
              !noHoverShadow
                ? "hover:shadow-[0_8px_28px_rgba(147,51,234,0.4)] glow-purple"
                : ""
            }`,
          variant === "outline" &&
            `border border-purple-500 text-purple-400 bg-transparent hover:bg-purple-500/10 ${
              !noHoverShadow
                ? "hover:shadow-[0_8px_28px_rgba(147,51,234,0.3)] hover:border-purple-400"
                : ""
            }`,
          variant === "ghost" &&
            `bg-transparent hover:bg-purple-500/10 text-purple-400 ${
              !noHoverShadow
                ? "hover:shadow-[0_6px_20px_rgba(147,51,234,0.2)]"
                : ""
            }`,

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
