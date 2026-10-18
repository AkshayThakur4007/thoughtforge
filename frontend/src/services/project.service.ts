import axiosInstance from "../lib/axios";
import { Project } from "../types";

export const getProjects = async (): Promise<Project[]> => {
  const response = await axiosInstance.get("/api/v1/projects");
  return response.data.data;
};

export const getProjectById = async (id: string): Promise<Project> => {
  const response = await axiosInstance.get(`/api/v1/projects/${id}`);
  return response.data.data;
};

export const createProject = async (data: { name: string; description?: string }): Promise<Project> => {
  const response = await axiosInstance.post("/api/v1/projects", data);
  return response.data.data;
};

export const updateProject = async (id: string, data: { name?: string; description?: string }): Promise<Project> => {
  const response = await axiosInstance.put(`/api/v1/projects/${id}`, data);
  return response.data.data;
};

export const deleteProject = async (id: string): Promise<void> => {
  await axiosInstance.delete(`/api/v1/projects/${id}`);
};
