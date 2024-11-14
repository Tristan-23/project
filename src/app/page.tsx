import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
        Welcome
      </h1>
      <div className="flex space-x-4">
        <Link
          href="/login"
          className="px-6 py-2 text-lg font-semibold text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 transition-colors"
        >
          Login
        </Link>
        <Link
          href="/register"
          className="px-6 py-2 text-lg font-semibold text-blue-500 border-2 border-blue-500 rounded-lg shadow-md hover:bg-blue-50 transition-colors"
        >
          Register
        </Link>
      </div>
    </div>
  );
}
