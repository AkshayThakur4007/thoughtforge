import type { Request, Response, NextFunction } from "express";
import * as projectService from "../services/project.service";

export async function createProjectController(req: Request, res: Response, next: NextFunction) {
  try {
    const userId = req.user?.userId;
    if (!userId) return res.status(401).json({ success: false, message: "Unauthorized" });

    const { name, description } = req.body;
    
    const project = await projectService.createProject(userId, name, description);
    
    return res.status(201).json({
      success: true,
      data: project,
    });
  } catch (error) {
    next(error);
  }
}

export async function getProjectsController(req: Request, res: Response, next: NextFunction) {
  try {
    const userId = req.user?.userId;
    if (!userId) return res.status(401).json({ success: false, message: "Unauthorized" });

    const projects = await projectService.getProjectsByUser(userId);
    
    return res.status(200).json({
      success: true,
      data: projects,
    });
  } catch (error) {
    next(error);
  }
}

export async function getProjectByIdController(req: Request, res: Response, next: NextFunction) {
  try {
    const userId = req.user?.userId;
    if (!userId) return res.status(401).json({ success: false, message: "Unauthorized" });

    const { id } = req.params;
    
    const project = await projectService.getProjectById(userId, id as string);
    
    return res.status(200).json({
      success: true,
      data: project,
    });
  } catch (error) {
    next(error);
  }
}

export async function updateProjectController(req: Request, res: Response, next: NextFunction) {
  try {
    const userId = req.user?.userId;
    if (!userId) return res.status(401).json({ success: false, message: "Unauthorized" });

    const { id } = req.params;
    const { name, description } = req.body;
    
    const project = await projectService.updateProject(userId, id as string, { name, description });
    
    return res.status(200).json({
      success: true,
      data: project,
    });
  } catch (error) {
    next(error);
  }
}

export async function deleteProjectController(req: Request, res: Response, next: NextFunction) {
  try {
    const userId = req.user?.userId;
    if (!userId) return res.status(401).json({ success: false, message: "Unauthorized" });

    const { id } = req.params;
    
    await projectService.deleteProject(userId, id as string);
    
    return res.status(200).json({
      success: true,
      message: "Project deleted successfully",
    });
  } catch (error) {
    next(error);
  }
}
