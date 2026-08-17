import Link from "next/link";

import { ArrowRight } from "lucide-react";

import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";

export default function Closing() {
  return (
    <section className="py-32">
      <Container>
        <div className="rounded-3xl border border-border/60 bg-card px-8 py-16 lg:px-16 lg:py-20">
          <div className="grid gap-14 lg:grid-cols-[1.8fr_1fr] lg:items-center">
            {/* Left */}

            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                Start Building
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight lg:text-5xl">
                Your next great idea
                <br />
                deserves more than
                <br />
                another notes app.
              </h2>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">
                Capture thoughts, organize knowledge, and write with AI that
                enhances your thinking instead of replacing it.
              </p>
            </div>

            {/* Right */}

            <div className="flex flex-col items-start gap-5 lg:items-end">
              <Link href="/register">
                <Button size="lg">
                  Create an account
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>

              <p className="text-sm text-muted-foreground">
                Free during beta · No credit card required
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
