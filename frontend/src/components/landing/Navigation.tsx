import Link from "next/link";

import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/brand/Logo";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export default function Navigation() {
  return (
    <header className="sticky top-0 z-50 border-b surface-glass">
      <Container>
        <nav className="flex h-18 items-center justify-between">
          <Link
            href="/"
            className="transition-opacity hover:opacity-80"
          >
            <Logo />
          </Link>

          <div className="flex items-center gap-1 sm:gap-2">
            <ThemeToggle />
            
            <Link
              href="/login"
              className="text-xs sm:text-sm font-medium text-muted-foreground transition-colors hover:text-foreground mx-1 sm:mx-2"
            >
              Log In
            </Link>

            <Link href="/register">
              <Button size="sm" className="h-8 sm:h-9 px-3 sm:px-4 text-xs sm:text-sm">Get Started</Button>
            </Link>
          </div>
        </nav>
      </Container>
    </header>
  );
}
