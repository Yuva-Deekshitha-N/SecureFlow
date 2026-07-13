"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

const AdminNavLink = ({
  href,
  icon,
  children,
}: AdminNavLinkProps) => {

export function AdminNavLink({ href, icon: Icon, children }: AdminNavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 px-3 py-2.5 rounded-sm text-sm font-bold uppercase tracking-wide transition-all",
        isActive
          ? "bg-primary/10 text-primary border-l-2 border-primary"
          : "text-muted-foreground hover:bg-white/5 hover:text-white border-l-2 border-transparent"
      )}
    >
      {icon}
      {children}
    </Link>
  );
}
