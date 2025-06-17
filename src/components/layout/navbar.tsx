"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";
interface NavItem {
  href: string;
  label: string;
}
export default function Navbar() {
  const items: NavItem[] = [
    { href: "/", label: "Khrone SEO" },
    { href: "/pricing", label: "Pricing" },
    { href: "/docs", label: "Documentation" },
  ];

  return (
    <nav
      className="w-full flex items-center group justify-center pt-4 h-fit fixed z-10"
    >
      <AnimatePresence mode="wait">
        <motion.div className="glass-container group-hover:max-w-xl max-w-md w-full flex flex-row justify-center items-center gap-6">
          {items.map((i: NavItem) => (
            <motion.p key={i.href} className="relative px-4 py-2 group">
              <Link
                key={i.href}
                className={cn("nav-link")}
                href={i.href}
              >
                {i.label}
              </Link>
            </motion.p>
          ))}
        </motion.div>
      </AnimatePresence>
    </nav>
  );
}
