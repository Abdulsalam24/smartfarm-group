"use client";
import React from "react";
import backIcon from "../../assets/icons/back-icon.svg";
import Image from "next/image";
import TextInput from "@/components/ui/text-input";
import { useRouter } from "next/navigation";
import Link from "next/link";
import AuthLayout from "@/components/layout/authLayout";

const ResetPassword = () => {
  const router = useRouter();

  const handleSubmit = () => {
    router.push("/homepage");
  };

  return (
    <AuthLayout>
      <div className="w-full">
        <div className="w-fit md:hidden">
          <Link href="/login" className="w-fit ">
            <Image src={backIcon} alt="backIcon" />
          </Link>
        </div>
        <div className="text-center pt-[151px]">
          <h2>Reset Password</h2>
        </div>
        <div className="mt-[37px] flex flex-col gap-[26px]">
          <TextInput
            onChange={() => {}}
            label="New Password"
            placeholder="********"
            type="password"
          />
          <TextInput
            onChange={() => {}}
            label="Confirm password"
            placeholder="********"
            type="password"
          />
        </div>
        <div className="mt-[62px]">
          <button
            className="bg-[#225C2B] text-white text-[16px] rounded-[24px] p-[13px] w-full"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </AuthLayout>
  );
};

export default ResetPassword;
