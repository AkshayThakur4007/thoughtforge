import type { Request, Response, NextFunction } from "express";
import * as ideaService from "../services/idea.service";

export async function createIdeaController(req: Request, res: Response, next: NextFunction) {
  try {
    const userId = req.user?.userId;
    if (!userId) return res.status(401).json({ success: false, message: "Unauthorized" });

    const { title, content, projectId } = req.body;
    
    const idea = await ideaService.createIdea(userId, title, content, projectId);
    
    return res.status(201).json({
      success: true,
      data: idea,
    });
  } catch (error) {
    next(error);
  }
}

export async function getIdeasController(req: Request, res: Response, next: NextFunction) {
  try {
    const userId = req.user?.userId;
    if (!userId) return res.status(401).json({ success: false, message: "Unauthorized" });

    const { projectId } = req.query;
    
    const ideas = await ideaService.getIdeasByUser(userId, projectId as string);
    
    return res.status(200).json({
      success: true,
      data: ideas,
    });
  } catch (error) {
    next(error);
  }
}

export async function getIdeaByIdController(req: Request, res: Response, next: NextFunction) {
  try {
    const userId = req.user?.userId;
    if (!userId) return res.status(401).json({ success: false, message: "Unauthorized" });

    const { id } = req.params;
    
    const idea = await ideaService.getIdeaById(userId, id as string);
    
    return res.status(200).json({
      success: true,
      data: idea,
    });
  } catch (error) {
    next(error);
  }
}

export async function updateIdeaController(req: Request, res: Response, next: NextFunction) {
  try {
    const userId = req.user?.userId;
    if (!userId) return res.status(401).json({ success: false, message: "Unauthorized" });

    const { id } = req.params;
    const { title, content, status, projectId } = req.body;
    
    const idea = await ideaService.updateIdea(userId, id as string, { title, content, status, projectId });
    
    return res.status(200).json({
      success: true,
      data: idea,
    });
  } catch (error) {
    next(error);
  }
}

export async function deleteIdeaController(req: Request, res: Response, next: NextFunction) {
  try {
    const userId = req.user?.userId;
    if (!userId) return res.status(401).json({ success: false, message: "Unauthorized" });

    const { id } = req.params;
    
    await ideaService.deleteIdea(userId, id as string);
    
    return res.status(200).json({
      success: true,
      message: "Idea deleted successfully",
    });
  } catch (error) {
    next(error);
  }
}
