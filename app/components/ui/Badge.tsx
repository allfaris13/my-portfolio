import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'secondary' | 'outline';
}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "px-3 py-1 text-xs font-semibold rounded-full",
        variant === 'primary' && 'bg-blue-100 text-blue-700 border border-blue-300',
        variant === 'secondary' && 'bg-[#a78bfa]/20 text-[#a78bfa] border-[#a78bfa]/30',
        variant === 'outline' && 'border border-gray-300 bg-transparent text-gray-100',
        className
      )}
      {...props}
    />
  );
}
