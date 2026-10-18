import axiosInstance from "../lib/axios";
import { Idea } from "../types";

export const getIdeas = async (projectId?: string): Promise<Idea[]> => {
  const url = projectId ? `/api/v1/ideas?projectId=${projectId}` : "/api/v1/ideas";
  const response = await axiosInstance.get(url);
  return response.data.data;
};

export const getIdeaById = async (id: string): Promise<Idea> => {
  const response = await axiosInstance.get(`/api/v1/ideas/${id}`);
  return response.data.data;
};

export const createIdea = async (data: { title: string; content: string; projectId?: string }): Promise<Idea> => {
  const response = await axiosInstance.post("/api/v1/ideas", data);
  return response.data.data;
};

export const updateIdea = async (id: string, data: { title?: string; content?: string; status?: string; projectId?: string | null }): Promise<Idea> => {
  const response = await axiosInstance.put(`/api/v1/ideas/${id}`, data);
  return response.data.data;
};

export const deleteIdea = async (id: string): Promise<void> => {
  await axiosInstance.delete(`/api/v1/ideas/${id}`);
};
