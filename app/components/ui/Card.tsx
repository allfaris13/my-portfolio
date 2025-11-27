import * as React from "react";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        // Default: faded / dim black background suitable for dark theme.
        "rounded-xl border bg-[#0b0f14] bg-opacity-80 shadow-md p-5 transition-all hover:shadow-lg text-gray-100",
        className
      )}
      {...props}
    />
  );
}

export function CardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("mt-3", className)} {...props} />
  );
}
