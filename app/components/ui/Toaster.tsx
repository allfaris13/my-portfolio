"use client";

import { useState, useEffect } from "react";
import { Toast } from "@/components/ui/Toast";

export function Toaster({
  toast,
}: {
  toast: { message: string; type?: "success" | "error" | "info" };
}) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return <Toast message={toast.message} type={toast.type} />;
}
