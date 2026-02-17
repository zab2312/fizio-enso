import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const baseClasses = "inline-block px-8 py-3 rounded-lg font-medium transition-all duration-300 shadow-subtle hover:shadow-card";
  const variantClasses =
    variant === "primary"
      ? "bg-foreground text-background hover:bg-accent"
      : "bg-white text-foreground border-2 border-foreground hover:bg-foreground hover:text-background";

  if (href) {
    return (
      <Link href={href} className={`${baseClasses} ${variantClasses} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`${baseClasses} ${variantClasses} ${className}`}>
      {children}
    </button>
  );
}

