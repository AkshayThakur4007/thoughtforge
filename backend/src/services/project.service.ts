import { prisma } from "../lib/prisma";
import { AppError } from "../utils/app-error";

export async function createProject(userId: string, name: string, description?: string) {
  return prisma.project.create({
    data: {
      userId,
      name,
      description,
    },
  });
}

export async function getProjectsByUser(userId: string) {
  return prisma.project.findMany({
    where: { userId },
    orderBy: { updatedAt: "desc" },
  });
}

export async function getProjectById(userId: string, projectId: string) {
  const project = await prisma.project.findFirst({
    where: {
      id: projectId,
      userId,
    },
  });

  if (!project) {
    throw new AppError("Project not found", 404);
  }

  return project;
}

export async function updateProject(userId: string, projectId: string, data: { name?: string; description?: string }) {
  // First ensure the project belongs to this user
  await getProjectById(userId, projectId); 

  return prisma.project.update({
    where: { id: projectId },
    data,
  });
}

export async function deleteProject(userId: string, projectId: string) {
  // First ensure the project belongs to this user
  await getProjectById(userId, projectId);

  return prisma.project.delete({
    where: { id: projectId },
  });
}
