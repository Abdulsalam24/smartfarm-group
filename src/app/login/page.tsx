"use client";
import React, { useState } from "react";
import logo from "../../assets/icons/logo.svg";
import Image from "next/image";
import TextInput from "@/components/ui/text-input";
import { useRouter } from "next/navigation";
import Link from "next/link";
import AuthLayout from "@/components/layout/authLayout";
import { loginAction } from "@/stores/auth/action";
import Button from "@/components/ui/Button";

const Login = () => {
  const router = useRouter();

  const [loginData, setLoginData] = useState({
    phoneNo: "",
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
            name="phoneNo"
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
