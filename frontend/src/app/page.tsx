"use client";

import axios from "@/lib/axios";
import { API } from "@/constants/api";
import { register } from "@/services/auth.service";

export default function Home() {
  const testConnection = async () => {
    await register({
      name: "Akshay",
      email: "akshay@test.com",
      password: "password123",
    });
    try {
      const response = await axios.get(API.HEALTH);

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return <button onClick={testConnection}>Test Axios</button>;
}
