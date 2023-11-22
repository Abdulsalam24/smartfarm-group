"use client";
import React, { ChangeEvent, useRef, useState } from "react";
import backIcon from "../../assets/icons/back-icon.svg";
import Image from "next/image";
import TextInput from "@/components/ui/text-input";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
import Link from "next/link";
import OtpInput from "@/components/ui/otp-input";
import AuthLayout from "@/components/layout/authLayout";

const ConfirmOtp = () => {
  
  const router = useRouter();
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const handleSubmit = () => {
    router.push("/reset-password");
  };


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
  const [otp, setOTP] = useState(["", "", "", ""]);

  return (
    <AuthLayout>
      <div className="w-full">
        <div className="w-fit md:hidden">
          <Link href="/login" className="w-fit ">
            <Image src={backIcon} alt="backIcon" />
          </Link>
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
