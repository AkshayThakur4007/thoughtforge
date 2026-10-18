"use client";

import { useEffect, useState } from "react";
import { getProjects } from "@/services/project.service";
import { Project } from "@/types";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { CreateProjectSheet } from "@/components/projects/CreateProjectSheet";

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getProjects();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
          <p className="text-muted-foreground">Manage your spaces and domains.</p>
        </div>
        <CreateProjectSheet />
      </div>

      {loading ? (
        <div className="flex justify-center p-12">Loading...</div>
      ) : projects.length === 0 ? (
        <div className="text-center p-12 border border-dashed rounded-lg">
          <h3 className="text-lg font-medium">No projects found</h3>
          <p className="text-muted-foreground mt-2">Create your first project to get started.</p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}
