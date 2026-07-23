import axios from "@/lib/axios";
import { API } from "@/constants/api";
import type { RegisterRequest, RegisterResponse } from "@/types/auth";

export async function register(
  data: RegisterRequest,
): Promise<RegisterResponse> {
  const response = await axios.post<RegisterResponse>(API.AUTH.REGISTER, data);

  return response.data;
}
