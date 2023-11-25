"use client";
import React, { useEffect, useState } from "react";
import logo from "../../assets/icons/logo.svg";
import Image from "next/image";
import TextInput from "@/components/ui/text-input";
import { useRouter } from "next/navigation";
import Link from "next/link";
import AuthLayout from "@/components/layout/authLayout";
import { loginAction } from "@/stores/auth/action";
import Button from "@/components/ui/Button";
import { removeCookie } from "typescript-cookie";
import backIcon from "../../assets/icons/back-icon.svg";

const Login = () => {
  const router = useRouter();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const onChange = (e: any) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    setLoading(true);
    e.preventDefault();
    const res = await loginAction(loginData);
    if (res.success) {
      router.push("/homepage");
    }
    setLoading(false);
  };

  useEffect(() => {
    removeCookie("token");
  }, []);

  return (
    <AuthLayout>
      <div className="mt-5 md:hidden w-fit" onClick={() => router.push("/")}>
        <Image src={backIcon} alt="backIcon" />
      </div>
      <div className="w-full">
        <div className="flex flex-col items-center gap-2 field-heading">
          <Image
            onClick={() => router.push("/")}
            src={logo}
            alt="logo"
            className="md:hidden"
          />
          <h2>Sign in</h2>
          <p>Sign in to your account</p>
        </div>
        <div className="mt-[112px] flex flex-col gap-[30px]">
          <TextInput
            label="Email"
            placeholder="abdoyobos@gmail.com"
            type="email"
            name="email"
            onChange={onChange}
          />
          <TextInput
            label="password"
            type="password"
            name="password"
            onChange={onChange}
          />
        </div>
        <div className="mt-4 text-right">
          <div className="ml-auto w-fit">
            <Link href="/forgot-password">
              <p className="text-[#FF832B] md:text-base">Forgot password?</p>
            </Link>
          </div>
        </div>
        <div className="mt-[36px]">
          <Button
            info={loginData}
            loading={loading}
            padding="p-[15.5px]"
            rounded="rounded-[24px]"
            color="text-white"
            bgColor="bg-green-100"
            btnStyle="w-full"
            onClick={handleSubmit}
            text="Login"
          />
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
