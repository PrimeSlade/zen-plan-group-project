import { Button } from "@/components/ui/button";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import FormInput from "@/components/ui/FormInput";
import useLogin from "@/hooks/useLogin";
import { Leaf, Lock, Mail } from "lucide-react";
import React, { useState } from "react";
import { z } from "zod";
import { Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { login, loginError, setLoginError } = useLogin();

  const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6, "Password must be at least 6 characters long"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    await login(data.email, data.password);
  };

  return (
    <div className="flex justify-center items-center min-h-screen min-w-screen bg-neutral-50 p-4">
      <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-8">
        <div className="flex flex-col items-center mb-8">
          <div className="p-3 bg-[var(--color-background)] rounded-full mb-4">
            <Leaf className="h-8 w-8 text-primary-500" />
          </div>
          <h1 className="!text-2xl font-semibold text-neutral-800">
            Welcome to Zen Plan
          </h1>
          <p className="text-neutral-500 mt-2 text-center">
            Your personal wellness journey begins here.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            label={"Email"}
            icon={<Mail size={18} />}
            type={"text"}
            placeholder={"Enter your email"}
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mb-3">{errors.email.message}</p>
          )}

          <FormInput
            label={"Password"}
            icon={<Lock size={18} />}
            type={showPassword ? "text" : "password"}
            placeholder={"Enter your password"}
            toggleIcon={showPassword ? faEye : faEyeSlash}
            onToggle={() => {
              setShowPassword(!showPassword);
            }}
            {...register("password")}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mb-3">
              {errors.password.message}
            </p>
          )}
          {loginError && (
            <p className="text-red-500 text-md text-center my-3">
              {loginError}
            </p>
          )}

          <Button
            className="text-base bg-[var(--color-secondary)] w-full cursor-pointer hover:bg-[var(--color-primary)]"
            variant="default"
          >
            Sign In
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-neutral-600">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-[var(--color-secondary)] hover:text-primary-600 font-medium underline underline-offset-4"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
