"use client";
import React from "react";
import logo from "../../assets/icons/logo.svg";
import Image from "next/image";
import TextInput from "@/components/ui/text-input";
import { useRouter } from "next/navigation";
import Link from "next/link";
import AuthLayout from "@/components/layout/authLayout";

const Login = () => {
  const router = useRouter();

  const handleSubmit = () => {
    router.push("/homepage");
  };

  return (
    <AuthLayout>
        <div className="w-full">
          <div className="flex flex-col items-center gap-2 field-heading">
            <Image src={logo} alt="logo" className="md:hidden" />
            <h2>Sign in</h2>
            <p>Sign in to your account</p>
          </div>
          <div className="mt-[112px] flex flex-col gap-[30px]">
            <TextInput
              label="phone number"
              placeholder="09035648593"
              type="phone"
              onChange={() => ""}
            />
            <TextInput label="password" type="password" onChange={() => ""} />
          </div>
          <div className="mt-4 text-right">
            <div className="ml-auto w-fit">
              <Link href="/forgot-password">
                <p className="text-[#FF832B] md:text-base">Forgot password?</p>
              </Link>
            </div>
          </div>
          <div className="mt-[36px]">
            <button
              className="bg-green-100 text-white  rounded-[24px] p-[13px] w-full"
              onClick={handleSubmit}
            >
              Login
            </button>
          </div>
          <p className="mt-4 text-center">
            Dont have an account?{" "}
            <span
              className="text-[#FF832B] cursor-pointer"
              onClick={() => router.push("/register")}
            >
              Sign Up
            </span>
          </p>
        </div>
    </AuthLayout>
  );
};

export default Login;
