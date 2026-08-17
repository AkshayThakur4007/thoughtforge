import { prisma } from "../lib/prisma";
import bcrypt from "bcrypt";
import { AppError } from "../utils/app-error";
import { RegisterInput, LoginInput } from "../validations/auth.validation";

export async function registerUser(input: RegisterInput) {
  const { name, email, password } = input;

  const normalizedEmail = email.trim().toLowerCase();

  const existingUser = await prisma.user.findUnique({
    where: {
      email: normalizedEmail,
    },
  });

  if (existingUser) {
    throw new AppError("Email already exists", 409);
  }

  const passwordHash = await bcrypt.hash(password, 12);

  const user = await prisma.user.create({
    data: {
      name,
      email: normalizedEmail,
      passwordHash,
    },
    select: {
      id: true,
      name: true,
      email: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  return user;
}

export async function loginUser(input: LoginInput) {
  const { email, password } = input;
  const normalizedEmail = email.trim().toLowerCase();

  const user = await prisma.user.findUnique({
    where: { email: normalizedEmail },
  });

  if (!user) {
    throw new AppError("Invalid email or password", 401);
  }

  const isPasswordValid = await bcrypt.compare(password, user.passwordHash);

  if (!isPasswordValid) {
    throw new AppError("Invalid email or password", 401);
  }

  // Return the user without the passwordHash
  const { passwordHash, ...userWithoutPassword } = user;
  return userWithoutPassword;
}
