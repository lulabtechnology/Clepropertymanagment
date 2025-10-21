import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  variant?: "primary" | "ghost" | "outline";
};

export default function Button({ className, variant = "primary", ...props }: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-medium transition focus-visible:ring-2";
  const styles = {
    primary:
      "bg-brand-gold text-brand-blue hover:opacity-95 shadow-soft aria-[busy=true]:opacity-70",
    outline:
      "border border-brand-gold text-brand-blue hover:bg-brand-gold/10",
    ghost: "text-white/90 hover:text-white"
  }[variant];

  return <button className={cn(base, styles, className)} {...props} />;
}
