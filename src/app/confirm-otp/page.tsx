"use client";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import backIcon from "../../assets/icons/back-icon.svg";
import Image from "next/image";
import TextInput from "@/components/ui/text-input";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
import Link from "next/link";
import OtpInput from "@/components/ui/otp-input";
import AuthLayout from "@/components/layout/authLayout";
import { forgotPasswordEmail } from "@/stores/auth/atom";
import { useRecoilState } from "recoil";
import { verfiyOtpAction } from "@/stores/auth/action";
import { getCookie } from "typescript-cookie";

const ConfirmOtp = () => {
  const router = useRouter();

  const [forgotPasswordInfo, setForgotPasswordInfo] =
    useRecoilState(forgotPasswordEmail);

  const inputRefs = useRef<HTMLInputElement[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = e.target;
    const digit = value.replace(/[^0-9]/g, "");

    if (digit !== value) {
      return;
    }

    setOTP((prevOTP) => {
      const newOTP = [...prevOTP];
      newOTP[index] = value;
      return newOTP;
    });

    if (digit.length === 1 && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const [loading, setLoading] = useState(false);

  const [otp, setOTP] = useState(["", "", "", ""]);

  const handleSubmit = async (e: any) => {
    setLoading(true);
    e.preventDefault();
    const otpVerifcation = {
      farmerEmail: forgotPasswordInfo,
      token: otp.join(""),
    };

    const res = await verfiyOtpAction(otpVerifcation);
    if (res.success) {
      router.push("/reset-password");
    }
    setLoading(false);
  };

  return (
    <AuthLayout>
      <div className="w-full">
        <div
          className="mt-5 md:hidden w-fit"
          onClick={() => router.push("/forgot-password")}
        >
          <Image src={backIcon} alt="backIcon" />
        </div>
        <div className="text-center pt-[151px] field-heading">
          <h2>Enter 4 digit code</h2>
          <p className="mt-1">A code has been sent to your inbox</p>
        </div>
        <div className="mt-[92px]">
          <OtpInput
            handleChange={handleChange}
            otp={otp}
            setOTP={setOTP}
            inputRefs={inputRefs}
          />
        </div>
        <div className="mt-[87px]">
          <button
            className="bg-[#225C2B] text-white text-[16px] rounded-[24px] p-[13px] w-full"
            onClick={handleSubmit}
          >
            Proceed
          </button>
        </div>
        <p className="text-center mt-[26px]">
          Didn’t receive a code? <span className="text-[#EB6200]">Resend</span>
        </p>
      </div>
    </AuthLayout>
  );
};

export default ConfirmOtp;
