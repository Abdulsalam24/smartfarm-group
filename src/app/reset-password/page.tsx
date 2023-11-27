"use client";
import React, { useState } from "react";
import backIcon from "../../assets/icons/back-icon.svg";
import Image from "next/image";
import TextInput from "@/components/ui/text-input";
import { useRouter } from "next/navigation";
import Link from "next/link";
import AuthLayout from "@/components/layout/authLayout";
import { resetPasswordAction } from "@/stores/auth/action";
import Button from "@/components/ui/Button";

const ResetPassword = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [resetPasswordData, setResetPasswordData] = useState({
    newPassword: "",
    farmerEmail: "",
  });

  const onChange = (e: any) => {
    const { name, value } = e.target;
    setResetPasswordData({
      ...resetPasswordData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const res = await resetPasswordAction(resetPasswordData);
    if (res.success) {
      router.push("/login");
    }
    setLoading(false);
  };

  return (
    <AuthLayout>
      <div className="w-full">
        <div className="w-fit cursor-pointer">
          <Link href="/login" className="w-fit cursor-pointer ">
            <Image src={backIcon} alt="backIcon" />
          </Link>
        </div>
        <div className="text-center pt-[151px]">
          <h2>Reset Password</h2>
        </div>
        <form
          onSubmit={handleSubmit}
          className="mt-[37px] flex flex-col gap-[26px]"
        >
          <TextInput
            onChange={onChange}
            label="New Password"
            placeholder="********"
            type="password"
            name="newPassword"
          />
          <TextInput
            onChange={onChange}
            label="Confirm password"
            placeholder="********"
            type="password"
            name="farmerEmail"
          />
          <div className="mt-[62px]">
            {/* <Button
              loading={loading}
              padding="p-[15.5px]"
              rounded="rounded-[24px]"
              color="text-white"
              bgColor="bg-green-100"
              btnStyle="w-full"
              // onClick={handleSubmit}
              text="Submit"
              info={resetPasswordData}
            /> */}

            <button
              className="bg-green-100 text-white rounded-[24px] p-[13px] w-full"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};

export default ResetPassword;
