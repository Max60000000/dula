"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-toastify";

export default function Login() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const response = await axios.post(`$API_END_POINT/auth/login`, user);
      console.log("Login success", response.data);
      toast.success("Login success");
      router.push("/profile");
    } catch (error) {
      console.log("Login failed", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <hr />
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="data:image/png;base64,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"
          alt="Your Company"
        />

        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          <span>{loading ? "Processing" : "Sign in to your account    "}</span>
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                value={user.email}
                type="email"
                autoComplete="email"
                required
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                value={user.password}
                type="password"
                autoComplete="current-password"
                required
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              onClick={handleSubmit}
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
