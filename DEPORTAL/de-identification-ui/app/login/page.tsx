"use client";

import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Button from "../components/common/Button";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import Logo from "../components/Logo";
import Link from "next/link";
import { tokenManager } from "../api/TokenManager";
import { setCookie } from "../utils/clientCookieUtils";

interface LoginForm {
  email: string;
  password: string;
}

const AUTH_URL = process.env.NEXT_PUBLIC_AUTH_URL || "";

export default function LoginPage() {
  const [loading, setLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();

  const onSubmit = async (data: LoginForm) => {
    setLoading(true);
    setErrorMessage(null);
    try {
      const response = await axios.post(`${AUTH_URL}login/`, data, {
        headers: {
          "Content-Type": "application/json",
          api_version: "v1",
        },
      });

      const result = response.data;

      // Store access token using TokenManager
      tokenManager.setToken(result.access_token);

      // Store session ID in cookie storage
      setCookie("sessionId", result.session_id, 0.2);

      // Store user email in session storage
      setCookie("user-email", data.email, 0.2);

      // Redirect to the home page or dashboard
      window.location.href = "/";
    } catch (error: any) {
      console.error("Login error", error);
      if (error.response?.data?.message) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage("Invalid Credentials.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-full w-full flex-row items-center">
      <div className="m-auto max-md:hidden">
        <Image
          src="/images/login.png"
          alt="Login Image"
          width={590}
          height={480}
          style={{ objectFit: "cover", objectPosition: "center" }}
          className="h-full w-full"
          priority
        />
      </div>
      <div className="mr-auto flex h-full py-8">
        <div className="m-auto flex flex-col">
          <form
            className="relative flex w-full max-w-[450px] flex-col items-center rounded-lg bg-white p-16"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="absolute -top-12 left-1/2 -translate-x-1/2">
              <Logo width={270} />
            </div>
            <h3 className="text-xl font-semibold">Welcome Back!</h3>
            <h3 className="mb-1 text-xs font-semibold text-primary">
              Sign in to data de-identification platform
            </h3>
            <label className="mr-auto mt-6 text-xs text-secText">
              Username
            </label>

            <input
              className={`mt-1 h-10 w-full rounded-md border px-4 ${
                errors.email ? "border-red-500" : "border-grayText"
              }`}
              placeholder="Username"
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <span className="mt-2 text-xs text-red-500">
                {errors.email.message}
              </span>
            )}
            <label className="mb-1 mr-auto mt-4 text-xs text-secText">
              Password
            </label>

            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                className={`h-10 w-full rounded-md border px-4 ${
                  errors.password ? "border-red-500" : "border-grayText"
                }`}
                placeholder="Password"
                {...register("password", {
                  required: "Password is required",
                })}
              />
              <div
                className="absolute inset-y-0 right-4 flex cursor-pointer items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
            {errors.password && (
              <span className="mt-2 text-xs text-red-500">
                {errors.password.message}
              </span>
            )}

            {errorMessage && (
              <div className="mt-2 text-center text-xs text-red-500">
                {errorMessage}
              </div>
            )}

            <Button
              loading={loading}
              type="submit"
              className="mt-6 !px-16"
              disabled={loading}
            >
              {loading ? "Loading..." : "Sign In"}
            </Button>
            <div className="mt-2 flex w-full flex-row text-xs">
              <Link
                href={"/forgot-password"}
                className="m-auto cursor-pointer hover:text-secondary hover:underline"
              >
                Forgot password?
              </Link>
            </div>
            <div className="mt-3 flex w-full flex-row justify-center text-xs">
              New user?
              <Link
                href={"/forgot-password"}
                className="ml-1 cursor-pointer text-secondary hover:underline"
              >
                Request Access
              </Link>
            </div>
          </form>
          <div className="ml-auto mt-3 text-sm text-secText">
            © NeuroDiscovery AI 2025.
          </div>
        </div>
      </div>
    </div>
  );
}
