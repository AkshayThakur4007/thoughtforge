import Container from "@/components/layout/Container";
import { Brain, Sparkles, Trees } from "lucide-react";

const principles = [
  {
    icon: Brain,
    title: "Think before AI",
    description:
      "ThoughtForge begins with your ideas. AI helps expand, organize, and refine them—it never replaces your thinking.",
  },
  {
    icon: Trees,
    title: "Knowledge compounds",
    description:
      "Every Spark, note, and project becomes part of a growing knowledge base that strengthens your future work.",
  },
  {
    icon: Sparkles,
    title: "From thought to finished work",
    description:
      "Move naturally from an idea to research, drafting, and publishing without switching between disconnected tools.",
  },
];

export default function Principles() {
  return (
    <section className="py-24">
      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-[1fr_1.3fr]">
          {/* Left */}

          <div className="lg:sticky lg:top-28">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Principles
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight lg:text-5xl">
              Built around
              <br />
              how people think.
            </h2>

            <p className="mt-8 max-w-md text-lg leading-8 text-muted-foreground">
              Most tools focus on storing information. ThoughtForge focuses on
              helping ideas evolve into meaningful work.
            </p>
          </div>

          {/* Right */}

          <div className="space-y-10">
            {principles.map((principle) => {
              const Icon = principle.icon;

              return (
                <div
                  key={principle.title}
                  className="rounded-2xl border border-border/60 p-8 transition-colors hover:bg-muted/40"
                >
                  <div className="flex items-start gap-5">
                    <div className="rounded-xl bg-primary/10 p-3">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold">
                        {principle.title}
                      </h3>

                      <p className="mt-4 leading-8 text-muted-foreground">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
