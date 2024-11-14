"use server";

import prisma from "@/lib/db";
import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";

export async function handleLogin(formdata: FormData) {
  const email = formdata.get("email") as string;
  const password = formdata.get("password") as string;

  if (!email || !password) {
    console.log("All fields are required");
    return;
  }

  const existingUser = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (existingUser) {
    const isPasswordValid = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (isPasswordValid) {
      console.log("Login successful");
      redirect("/");
    } else {
      console.log("Invalid password");
    }
  } else {
    console.log("User does not exist");
  }
}
