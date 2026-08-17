import {
  Brain,
  FolderOpen,
  Lightbulb,
  PencilLine,
  Search,
  Sparkles,
} from "lucide-react";
import { Button } from "../ui/button";

export default function ProductPreview() {
  return (
    <div className="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border/60 px-6 py-4">
        {/* Left */}
        <div className="flex items-center gap-8">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              ThoughtForge
            </h2>

            <span className="mt-1.5 inline-flex h-6 items-center gap-1.5 rounded-full border border-border/60 bg-muted/30 px-2.5 text-[11px] font-medium text-muted-foreground">
              <Sparkles className="h-3 w-3 text-primary" />
              Personal Workspace
            </span>
          </div>

          <div className="flex items-center gap-2 rounded-lg border border-border/60 bg-muted/30 px-3 py-2 text-sm text-muted-foreground">
            <Search className="h-4 w-4 shrink-0" />

            <span className="min-w-[180px] flex-1">
              Search sparks, projects...
            </span>

            <kbd className="rounded border border-border bg-background px-1.5 py-0.5 text-[10px]">
              ⌘K
            </kbd>
          </div>
        </div>

        {/* Right */}
        <Button variant="outline" size="sm" className="h-9 rounded-xl px-4">
          New Spark
        </Button>
      </div>

      {/* Workspace */}
      <div className="overflow-x-auto hide-scrollbar">
        <div className="grid h-[680px] min-w-[1000px] grid-cols-[240px_minmax(0,1fr)_320px]">
          {/* Sidebar */}
          <aside className="border-r border-border/60 bg-muted/20 p-5">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Workspace
            </p>

            <nav className="space-y-1">
              <SidebarItem icon={Lightbulb} label="Sparks" count="3" active />
              <SidebarItem icon={FolderOpen} label="Projects" count="12" />
              <SidebarItem icon={Brain} label="Knowledge" count="148" />
              <SidebarItem icon={PencilLine} label="Drafts" count="8" />
            </nav>

            <div className="mt-10">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Recent
              </p>

              <div className="space-y-2">
                <RecentItem title="ThoughtForge Vision" time="2m" />
                <RecentItem title="Landing Page Copy" time="15m" />
                <RecentItem title="Knowledge Graph" time="Yesterday" />
                <RecentItem title="AI Assistant" time="2d" />
              </div>
            </div>
          </aside>

          {/* Editor */}

          <main className="flex flex-col border-r border-border/60">
            {/* Toolbar */}

            <div className="flex h-14 items-center justify-between border-b border-border/60 px-8">
              <div className="flex items-center gap-3">
                <span className="rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                  Spark
                </span>

                <span className="text-sm text-muted-foreground">
                  Last edited 2 minutes ago
                </span>
              </div>

              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <span>742 words</span>
                <span>4 min read</span>

                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-emerald-500" />
                  Saved
                </div>
              </div>
            </div>

            {/* Content */}

            <div className="flex-1 overflow-y-auto px-10 py-4">
              <div className="mb-6 flex items-center gap-2 text-xs text-muted-foreground">
                <span>Workspace</span>

                <span>/</span>

                <span>Sparks</span>

                <span>/</span>

                <span className="font-medium text-foreground">
                  Building ThoughtForge
                </span>
              </div>

              <h1 className="text-4xl font-semibold tracking-tight">
                Building ThoughtForge
              </h1>

              <div className="mt-6 space-y-5 text-[17px] leading-8 text-muted-foreground">
                <h2 className="pt-2 text-xl font-semibold text-foreground">
                  Core Principles
                </h2>

                <ul className="space-y-3">
                  <li>✓ Capture ideas before they disappear.</li>

                  <li>✓ Build connected knowledge.</li>

                  <li>✓ Let AI improve your thinking.</li>

                  <li>✓ Publish when you're ready.</li>
                </ul>

                <blockquote className="border-l-2 border-primary pl-5 italic text-foreground">
                  Great work isn't created in one sitting. It's refined through
                  countless iterations.
                </blockquote>

                <p>
                  Every document should feel like part of a larger knowledge
                  system instead of another isolated note.
                </p>
              </div>
            </div>
          </main>

          {/* Assistant */}

          <aside className="flex flex-col bg-muted/20">
            {/* Header */}

            <div className="flex h-14 items-center gap-2 border-b border-border/60 px-5">
              <Sparkles className="h-4 w-4 text-primary" />

              <div>
                <h3 className="text-sm font-semibold">Helping with</h3>

                <p className="text-xs text-muted-foreground">
                  Building ThoughtForge
                </p>
              </div>
            </div>

            <div className="flex-1 p-5">
              {/* Analysis */}

              <div className="rounded-xl border border-border/60 bg-background p-4">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                  Watching your cursor
                </p>

                <p className="mt-3 text-sm leading-6">
                  You're currently editing the introduction. Consider adding a
                  practical example before explaining how ThoughtForge connects
                  knowledge.
                </p>
              </div>

              {/* Suggestions */}

              <div className="mt-8">
                <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                  Suggestions
                </p>

                <div className="space-y-2">
                  <Suggestion>Add a real-world example</Suggestion>

                  <Suggestion>Connect this to Knowledge</Suggestion>

                  <Suggestion>Rewrite in an editorial tone</Suggestion>
                </div>
              </div>

              {/* Quick Actions */}

              <div className="mt-8">
                <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                  Quick Actions
                </p>

                <div className="flex flex-wrap gap-2">
                  <ActionChip>Continue</ActionChip>
                  <ActionChip>Rewrite</ActionChip>
                  <ActionChip>Explain</ActionChip>
                  <ActionChip>Summarize</ActionChip>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
type SidebarItemProps = {
  icon: React.ElementType;
  label: string;
  count?: string;
  active?: boolean;
};

function SidebarItem({
  icon: Icon,
  label,
  count,
  active = false,
}: SidebarItemProps) {
  return (
    <button
      className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm transition-all ${
        active
          ? "border-l-2 border-primary bg-primary/10 text-foreground pl-[10px]"
          : "text-muted-foreground hover:bg-secondary hover:text-foreground"
      }`}
    >
      <div className="flex items-center gap-3">
        <Icon className="h-4 w-4 shrink-0" />
        <span>{label}</span>
      </div>

      {count && (
        <span
          className={`rounded-full px-2 py-0.5 text-xs ${
            active
              ? "bg-primary/15 text-primary"
              : "bg-secondary text-muted-foreground"
          }`}
        >
          {count}
        </span>
      )}
    </button>
  );
}

function RecentItem({ title, time }: { title: string; time: string }) {
  return (
    <button className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left transition-colors hover:bg-secondary">
      <span className="text-sm text-muted-foreground">{title}</span>

      <span className="text-xs text-muted-foreground">{time}</span>
    </button>
  );
}
function Suggestion({ children }: { children: React.ReactNode }) {
  return (
    <button className="flex w-full items-start gap-3 rounded-lg px-3 py-3 text-left transition-colors hover:bg-secondary">
      <Sparkles className="mt-0.5 h-3.5 w-3.5 text-primary" />

      <span className="text-sm">{children}</span>
    </button>
  );
}
function ActionChip({ children }: { children: React.ReactNode }) {
  return (
    <button className="rounded-full border border-border/60 px-3 py-1.5 text-xs transition-colors hover:bg-secondary">
      {children}
    </button>
  );
}
