import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Project } from "@/types";

export function ProjectCard({ project }: { project: Project }) {
  const date = new Date(project.updatedAt).toLocaleDateString();

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle>{project.name}</CardTitle>
        <CardDescription className="line-clamp-2">
          {project.description || "No description provided."}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-xs text-muted-foreground">Updated {date}</p>
      </CardContent>
    </Card>
  );
}
