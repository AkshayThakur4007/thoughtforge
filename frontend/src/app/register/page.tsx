"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { register as registerUser } from "@/services/auth.service";
import {
  registerSchema,
  RegisterFormData,
} from "@/validations/auth.validation";

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      const response = await registerUser(data);

      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main>
      <h1>Create your account</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("name")} placeholder="Name" />
        {errors.name && <p>{errors.name.message}</p>}

        <input type="email" {...register("email")} placeholder="Email" />
        {errors.email && <p>{errors.email.message}</p>}

        <input
          type="password"
          {...register("password")}
          placeholder="Password"
        />
        {errors.password && <p>{errors.password.message}</p>}

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Creating account..." : "Create account"}
        </button>
      </form>
    </main>
  );
}
