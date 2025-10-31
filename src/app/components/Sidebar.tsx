"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Home, Megaphone } from "lucide-react";

const links = [
  { name: "Dashboard", href: "/", icon: Home },
  { name: "Campaigns", href: "/campaigns", icon: Megaphone },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-60 bg-gray-950 text-gray-100 border-r border-gray-800 p-4 flex flex-col min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-blue-400 tracking-tight">
        Mini CRM
      </h2>

      <nav className="flex flex-col space-y-2">
        {links.map(({ name, href, icon: Icon }) => (
          <Link key={name} href={href}>
            <Button
              variant="ghost"
              className={cn(
                "w-full justify-start gap-2 text-gray-300 hover:bg-gray-800 hover:text-white",
                pathname === href && "bg-blue-600 text-white hover:bg-blue-600"
              )}
            >
              <Icon className="w-4 h-4" />
              {name}
            </Button>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
