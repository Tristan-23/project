import Link from "next/link";
import React, { ReactNode } from "react";

interface AuthFormProps {
  children: ReactNode;
}

export function AuthForm({ children }: AuthFormProps) {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <form className="space-y-6">
          <div>
            <Link
              href="/"
              className="text-gray-500 hover:text-gray-700 text-2xl"
            >
              &times;
            </Link>
            {children}{" "}
          </div>
        </form>
      </div>
    </div>
  );
}
