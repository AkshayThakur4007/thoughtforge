import Container from "@/components/layout/Container";
import {
  ArrowRight,
  BookOpen,
  FileText,
  FolderOpen,
  Lightbulb,
  Rocket,
} from "lucide-react";

const workflow = [
  {
    title: "Spark",
    description: "Capture ideas before they disappear.",
    icon: Lightbulb,
  },
  {
    title: "Project",
    description: "Group related thoughts into focused work.",
    icon: FolderOpen,
  },
  {
    title: "Knowledge",
    description: "Connect research and references.",
    icon: BookOpen,
  },
  {
    title: "Draft",
    description: "Turn knowledge into structured writing.",
    icon: FileText,
  },
  {
    title: "Publish",
    description: "Share work when it's ready.",
    icon: Rocket,
  },
];

export default function Workflow() {
  return (
    <section id="workflow" className="py-36">
      <Container>
        <div className="max-w-2xl">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
            Workflow
          </span>

          <h2 className="mt-4 text-5xl font-semibold tracking-tight">
            Every idea follows
            <br />a natural path.
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            ThoughtForge guides your thinking from the first spark to finished
            work.
          </p>
        </div>

        <div className="mt-12 sm:mt-20 overflow-x-auto pb-8 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 snap-x snap-mandatory hide-scrollbar">
          <div className="flex w-max items-start gap-4 sm:gap-6">
            {workflow.map((step, index) => {
              const Icon = step.icon;

              return (
                <div key={step.title} className="flex items-center gap-4 sm:gap-6 snap-center">
                  <div className="w-[260px] sm:w-64 h-[220px] shrink-0 hover-lift rounded-2xl bg-card border border-border/40 p-6 flex flex-col">
                    <div className="mb-5 inline-flex rounded-xl bg-primary/10 p-3">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>

                    <h3 className="text-xl font-semibold">{step.title}</h3>

                    <p className="mt-3 text-muted-foreground leading-7">
                      {step.description}
                    </p>
                  </div>

                  {index !== workflow.length - 1 && (
                    <ArrowRight className="text-muted-foreground" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
