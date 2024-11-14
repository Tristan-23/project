import Link from "next/link";
import { handleLogin } from "../actions/login";
import { AuthForm } from "../components/auth";
import prisma from "@/lib/db";

export default function Login() {
  return (
    <form
      action={handleLogin}
      className="flex justify-center items-center min-h-screen bg-gray-100"
    >
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-gray-700">Login</h1>
            <Link href="/">&#x2715;</Link>
          </div>
          <div className="space-y-2">
            <input
              type="email"
              name="email"
              placeholder="E-Mail"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-blue-500 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
