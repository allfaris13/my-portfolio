export type ToastOptions = {
  title?: string;
  description?: string;
  type?: "success" | "error" | "info";
};

export function toast(opts: ToastOptions) {
  if (typeof window !== "undefined" && "alert" in window) {
    // simple fallback UI: use a native alert for now
    window.alert(
      `${opts.title ? opts.title + "\n" : ""}${opts.description ?? ""}`
    );
  } else {
    console.log("[toast]", opts.title, opts.description);
  }
}

export default toast;
