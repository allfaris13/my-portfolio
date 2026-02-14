import * as React from "react";
import { cn } from "@/lib/utils";

export function Card({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        // Background hitam yang lebih terang, tidak terlalu pekat
        "group rounded-xl border border-gray-700 bg-gray-900 bg-opacity-80 shadow-lg p-5 transform transition-all duration-300 hover:border-purple-500 hover:shadow-[0_10px_40px_rgba(147,51,234,0.3)] hover:ring-2 hover:ring-purple-500/20 motion-safe:hover:-translate-y-1 motion-safe:hover:scale-105 text-gray-100",
        className
      )}
      {...props}
    />
  );
}

export function CardContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("mt-3", className)} {...props} />;
}
