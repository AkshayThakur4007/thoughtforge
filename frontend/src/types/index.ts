export interface User {
  id: string;
  name: string;
  email: string;
}

export interface Project {
  id: string;
  name: string;
  description: string | null;
  userId: string;
  createdAt: string;
  updatedAt: string;
}

export interface Idea {
  id: string;
  title: string;
  content: string;
  status: string;
  userId: string;
  projectId: string | null;
  createdAt: string;
  updatedAt: string;
}
