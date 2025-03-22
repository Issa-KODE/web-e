"use client"
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ComponentProps } from "react";
import { usePathname } from "next/navigation";

export function Nav({ children }: { children: React.ReactNode }) {
  return <nav className="bg-primary text-primary-foreground flex justify-center px-4">{children}</nav>
}

export function NavLink(props: Omit<ComponentProps<typeof Link>, "className">) {
  const pathname = usePathname()
  return <Link {...props} className={cn("p-4 hover:bg-secondary hover:text-secondary-foreground focus-visible:bg-secondary focus-visible:text-secondary", pathname === props.href && "bg-background text-foreground")}/>
}