"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { BookOpenTextIcon, HomeIcon, LucideIcon } from "lucide-react";
interface NavItem {
  href: string;
  label: string;
  icon: LucideIcon;
}
export default function Navbar() {
  const items: NavItem[] = [
    { href: "/", label: "Home", icon: HomeIcon },
    { href: "/docs", label: "Documentation", icon: BookOpenTextIcon },
  ];

  return (
    <nav className="w-full flex items-center rounded-none justify-evenly not-md:glass-container md:justify-between flex-col md:flex-row md:px-12 md:pt-4 h-fit fixed z-10">
        <motion.div className="glass-container not-md:rounded-none not-md:w-full not-md:py-2  md:px-12 flex flex-row justify-center items-center gap-6">
          <Link className={cn("nav-link font-semibold text-gray-50")} href={"https://khrone.tech/"}>
            Khrone
          </Link>
        </motion.div>
        <motion.div className="glass-container group not-md:rounded-none not-md:w-full py-4 md:max-w-md w-full flex flex-row justify-center items-center gap-6">
          {items.map((i: NavItem) => (

            <Link title={i.label} key={i.href} className={cn("nav-link")} href={i.href}>
              {i.icon && <i.icon className="" aria-label={i.label} />}
              <span className="sr-only">{i.label}</span>
            </Link>
          ))}
        </motion.div>
        <motion.div className=" pt-2 not-md:border-b-accent not-md:w-full px-12 flex flex-row justify-center items-center gap-6">
          <Link className={cn("nav-link font-semibold text-gray-50")} href={"/dashboard"}>
            Dashboard
          </Link>
        </motion.div>
    </nav>
  );
}
