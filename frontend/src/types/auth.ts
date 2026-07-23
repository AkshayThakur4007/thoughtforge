import type { ApiResponse } from "./api";

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

export type RegisterResponse = ApiResponse<{
  user: User;
}>;