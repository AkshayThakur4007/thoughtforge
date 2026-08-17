import Link from "next/link";

import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import ProductPreview from "./ProductPreview";

export default function Introduction() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-24">

      <Container>
        <div className="mx-auto flex max-w-6xl flex-col items-center text-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h1 className="max-w-3xl text-5xl font-semibold leading-none tracking-tight lg:text-6xl">
            Ideas,
            <br />
            <span className="text-gradient-copper">Forged to Last.</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">
            Every breakthrough starts with a single thought. ThoughtForge helps
            you capture, refine, and transform ideas into work that lasts.
          </p>

          <div className="mt-10 flex items-center gap-4">
            <Link href="/register">
              <Button size="lg">Start Forging</Button>
            </Link>

            <Link href="#how-it-works">
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </Link>
          </div>

          <div className="mt-20 w-full">
            <ProductPreview />
          </div>
        </div>
      </Container>
    </section>
  );
}
