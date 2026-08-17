import { Flame } from "lucide-react";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  iconOnly = false,
}: {
  className?: string;
  iconOnly?: boolean;
}) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm">
        <Flame className="h-5 w-5" strokeWidth={2.5} />
      </div>
      {!iconOnly && (
        <span className="text-lg font-bold tracking-tight text-foreground">
          ThoughtForge
        </span>
      )}
    </div>
  );
}
