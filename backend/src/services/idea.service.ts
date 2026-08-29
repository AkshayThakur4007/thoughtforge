import { prisma } from "../lib/prisma";
import { AppError } from "../utils/app-error";

export async function createIdea(userId: string, title: string, content: string, projectId?: string) {
  // If a project is specified, ensure it belongs to the user
  if (projectId) {
    const project = await prisma.project.findFirst({
      where: { id: projectId, userId }
    });
    if (!project) {
      throw new AppError("Project not found or access denied", 404);
    }
  }

  return prisma.idea.create({
    data: {
      userId,
      title,
      content,
      projectId,
    },
  });
}

export async function getIdeasByUser(userId: string, projectId?: string) {
  return prisma.idea.findMany({
    where: {
      userId,
      ...(projectId && { projectId }), // Filter by project if provided
    },
    orderBy: { updatedAt: "desc" },
  });
}

export async function getIdeaById(userId: string, ideaId: string) {
  const idea = await prisma.idea.findFirst({
    where: {
      id: ideaId,
      userId,
    },
  });

  if (!idea) {
    throw new AppError("Idea not found", 404);
  }

  return idea;
}

export async function updateIdea(userId: string, ideaId: string, data: { title?: string; content?: string; status?: string; projectId?: string | null }) {
  // Ensure the idea belongs to this user
  await getIdeaById(userId, ideaId);

  // If assigning to a new project, ensure that project belongs to the user
  if (data.projectId) {
    const project = await prisma.project.findFirst({
      where: { id: data.projectId, userId }
    });
    if (!project) {
      throw new AppError("Target project not found or access denied", 404);
    }
  }

  return prisma.idea.update({
    where: { id: ideaId },
    data,
  });
}

export async function deleteIdea(userId: string, ideaId: string) {
  // Ensure the idea belongs to this user
  await getIdeaById(userId, ideaId);

  return prisma.idea.delete({
    where: { id: ideaId },
  });
}
