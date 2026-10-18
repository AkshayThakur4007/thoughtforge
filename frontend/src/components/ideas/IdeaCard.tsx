import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Idea } from "@/types";

export function IdeaCard({ idea }: { idea: Idea }) {
  const date = new Date(idea.updatedAt).toLocaleDateString();

  return (
    <Card className="hover:shadow-lg transition-shadow flex flex-col h-full">
      <CardHeader className="flex flex-row items-start justify-between pb-2 space-y-0">
        <CardTitle className="text-lg font-bold leading-tight">{idea.title}</CardTitle>
        <Badge variant={idea.status === "published" ? "default" : "secondary"}>
          {idea.status}
        </Badge>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col justify-between pt-2">
        <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
          {idea.content}
        </p>
        <p className="text-xs text-muted-foreground mt-auto">Updated {date}</p>
      </CardContent>
    </Card>
  );
}
