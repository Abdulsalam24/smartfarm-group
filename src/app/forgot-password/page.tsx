"use client";
import React from "react";
import backIcon from "../../assets/icons/back-icon.svg";
import Image from "next/image";
import TextInput from "@/components/ui/text-input";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
import Link from "next/link";
import acceptNumber from "@/helpers/acceptNumber";
import AuthLayout from "@/components/layout/authLayout";

const ForgotPassword = () => {
  const router = useRouter();

  const handleSubmit = () => {
    router.push("/confirm-otp");
  };

  return (
    <AuthLayout>
      <div className="w-full">
        <div className="w-fit md:hidden">
          <Link href="/login" className="w-fit ">
            <Image src={backIcon} alt="backIcon" />
          </Link>
        </div>
        <div className="text-center pt-[151px] field-heading">
          <h2>Forgot password?</h2>
          <p className="mt-1">
            Enter the phone number associated with this account
          </p>
        </div>
        <div className="mt-[78px] flex flex-col gap-[30px]">
          <TextInput
            onChange={() => ""}
            label="phone number"
            acceptNumber={acceptNumber}
            placeholder="09035648593"
            type="phone"
          />
        </div>
        <div className="mt-[104px]">
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

export default ForgotPassword;
