"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Lightbulb, Settings, Briefcase, LogOut, ChevronLeft, ChevronRight, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { logout } from "@/services/auth.service";

const navItems = [
  { name: "Projects", href: "/projects", icon: Briefcase },
  { name: "Ideas", href: "/ideas", icon: Lightbulb },
  { name: "Settings", href: "/settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (e) {
      console.error("Failed to logout:", e);
    }
    // Force hard reload to clear React state and hit middleware
    window.location.href = "/login";
  };

  return (
    <div className={cn(
      "flex h-full flex-col border-r bg-card text-card-foreground transition-all duration-300",
      isCollapsed ? "w-20" : "w-64"
    )}>
      <div className="flex h-16 items-center justify-between px-4 border-b">
        {!isCollapsed && (
          <Link href="/projects" className="flex items-center gap-2 font-bold text-xl tracking-tight text-primary truncate">
            ThoughtForge
          </Link>
        )}
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className={cn("shrink-0", isCollapsed && "mx-auto")}
          title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
        >
          {isCollapsed ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
        </Button>
      </div>

      <nav className="flex-1 space-y-2 p-4">
        {navItems.map((item) => {
          const isActive = pathname.startsWith(item.href);
          return (
            <Link key={item.name} href={item.href}>
              <Button
                variant={isActive ? "secondary" : "ghost"}
                className={cn(
                  "w-full mb-1",
                  isCollapsed ? "justify-center px-2" : "justify-start gap-3 px-4",
                  isActive && "font-semibold"
                )}
                title={isCollapsed ? item.name : undefined}
              >
                <item.icon className="h-5 w-5 shrink-0" />
                {!isCollapsed && <span>{item.name}</span>}
              </Button>
            </Link>
          );
        })}
      </nav>

      <div className="border-t p-4 flex flex-col gap-4">
        <div className={cn("flex items-center gap-3", isCollapsed && "justify-center")}>
          <Avatar className="h-9 w-9 shrink-0">
            <AvatarFallback><User className="h-5 w-5" /></AvatarFallback>
          </Avatar>
          {!isCollapsed && (
            <div className="flex flex-col truncate">
              <span className="text-sm font-medium">My Workspace</span>
              <span className="text-xs text-muted-foreground truncate">user@thoughtforge.com</span>
            </div>
          )}
        </div>
        
        <div className={cn("flex items-center", isCollapsed ? "flex-col gap-2" : "gap-2")}>
          {!isCollapsed && <div className="flex-1" />}
          <div title="Toggle Theme">
            <ThemeToggle />
          </div>
          <Button 
            variant="ghost" 
            size={isCollapsed ? "icon" : "default"}
            className={cn(!isCollapsed && "flex-1 justify-start gap-3")}
            onClick={handleLogout}
            title={isCollapsed ? "Logout" : undefined}
          >
            <LogOut className="h-5 w-5 shrink-0" />
            {!isCollapsed && "Logout"}
          </Button>
        </div>
      </div>
    </div>
  );
}
