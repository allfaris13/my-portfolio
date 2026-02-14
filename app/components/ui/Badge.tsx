import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "secondary" | "outline";
}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "px-3 py-1 text-xs font-semibold rounded-full transition-all duration-200",
        variant === "primary" &&
          "bg-purple-500/20 text-purple-400 border border-purple-500/30",
        variant === "secondary" &&
          "bg-purple-500/20 text-purple-400 border border-purple-500/30",
        variant === "outline" &&
          "border border-purple-500/50 bg-transparent text-purple-400 hover:border-purple-400 hover:bg-purple-500/10",
        className
      )}
      {...props}
    />
  );
}
