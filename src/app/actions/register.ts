"use server";

import bcrypt from "bcryptjs";
import prisma from "@/lib/db";

export async function handleRegister(formdata: FormData) {
  const username = formdata.get("username") as string;
  const email = formdata.get("email") as string;
  const password = formdata.get("password") as string;
  const repassword = formdata.get("repassword") as string;

  if (!username || !email || !password || !repassword) {
    console.log("All fields are required");
    return;
  }

  if (password !== repassword) {
    console.log("Passwords do not match");
    return;
  }

  const existingUser = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (existingUser) {
    console.log("User already exists");
    return;
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });
    console.log("New user created", newUser);
  } catch (error) {
    console.log(error);
  }
}
