"use client";
import * as React from "react";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

export interface FadeUpProps extends React.HTMLAttributes<HTMLDivElement> {
  threshold?: number;
  delayMs?: number;
  once?: boolean;
}

export function FadeUp({
  children,
  className,
  threshold = 0.2,
  delayMs = 0,
  once = false,
  ...props
}: FadeUpProps) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold });
  const shouldShow = once ? inView || false : inView;
  return (
    <div
      ref={ref as any}
      className={cn(
        // Motion-safe only: respects prefers-reduced-motion
        "motion-safe:transition-[opacity,transform] motion-safe:duration-1000 motion-safe:ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform",
        "opacity-0 translate-y-8",
        shouldShow && "opacity-100 translate-y-0",
        className
      )}
      style={{ ...(props.style || {}), transitionDelay: `${delayMs}ms` }}
      {...props}
    >
      {children}
    </div>
  );
}

export default FadeUp;
