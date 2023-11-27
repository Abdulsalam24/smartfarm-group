"use client";
import React, { useState } from "react";
import backIcon from "../../assets/icons/back-icon.svg";
import Image from "next/image";
import TextInput from "@/components/ui/text-input";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
import Link from "next/link";
import acceptNumber from "@/helpers/acceptNumber";
import AuthLayout from "@/components/layout/authLayout";
import { forgotPasswordAction } from "@/stores/auth/action";
import { useRecoilState } from "recoil";
import { forgotPasswordEmail } from "@/stores/auth/atom";

const ForgotPassword = () => {
  const router = useRouter();

  const [forgotPasswordInfo, setForgotPasswordInfo] =
    useRecoilState<any>(forgotPasswordEmail);

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    setLoading(true);
    e.preventDefault();
    const res = await forgotPasswordAction({ email: forgotPasswordInfo });
    if (res.success) {
      router.push("/confirm-otp");
    }
    setLoading(false);
  };

  return (
    <AuthLayout>
      <div className="w-full">
        <div
          className="mt-5 w-fit cursor-pointer cursor-pointer"
          onClick={() => router.push("/login")}
        >
          <Image src={backIcon} alt="backIcon" />
        </div>
        <div className="text-center pt-[151px] field-heading">
          <h2>Forgot password?</h2>
          <p className="mt-1">
            Enter the phone number associated with this account
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mt-[78px] flex flex-col gap-[30px]">
            <TextInput
              onChange={(e) => setForgotPasswordInfo(e.target.value)}
              label="Email"
              acceptNumber={acceptNumber}
              placeholder="Enter email"
              type="email"
              value={forgotPasswordInfo}
            />
          </div>
          <div className="mt-[104px]">
            <Button
              specialCheck={forgotPasswordInfo.length < 5}
              loading={loading}
              padding="p-[15.5px]"
              rounded="rounded-[24px]"
              color="text-white"
              bgColor="bg-green-100"
              btnStyle="w-full"
              onClick={handleSubmit}
              text="Submit"
            />
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};

export default ForgotPassword;
