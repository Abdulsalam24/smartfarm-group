"use client";
import TextInput from "@/components/ui/text-input";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../../assets/icons/logo.svg";
import Link from "next/link";
import { useRouter } from "next/navigation";
import acceptNumber from "@/helpers/acceptNumber";
import AuthLayout from "@/components/layout/authLayout";
import { registerAction } from "@/stores/auth/action";
import backIcon from "../../assets/icons/back-icon.svg";
import Button from "@/components/ui/Button";

const Register = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [formdata, setFormData] = useState({
    firstname: "",
    lastname: "",
    phoneNo: "",
    email: "",
    location: "",
    password: "",
  });

  const onChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formdata,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    setLoading(true);
    e.preventDefault();
    const res = await registerAction(formdata);
    if (res.success) {
      router.push("/login");
    }
    setLoading(false);
  };

  return (
    <AuthLayout>
      <div
        className="mt-5 md:hidden w-fit cursor-pointer"
        onClick={() => router.push("/")}
      >
        <Image src={backIcon} alt="backIcon" />
      </div>
      <div className="w-full">
        <div className="flex flex-col items-center gap-2 field-heading">
          <Image
            src={logo}
            alt="logo"
            onClick={() => router.push("/")}
            className="md:hidden"
          />
          <h2>Register</h2>
          <p>Create your new account</p>
        </div>
        <form
          className="mt-[64px] flex flex-col gap-[30px]"
          onSubmit={handleSubmit}
        >
          <TextInput
            label="First Name"
            name="firstname"
            placeholder="Enter your first name"
            type="text"
            onChange={onChange}
            value={formdata.firstname}
          />
          <TextInput
            label="Last Name"
            name="lastname"
            placeholder="Enter your last name"
            type="text"
            onChange={onChange}
            value={formdata.lastname}
          />
          <TextInput
            label="Email"
            placeholder="Enter your email"
            type="email"
            name="email"
            onChange={onChange}
            acceptNumber={acceptNumber}
            value={formdata.email}
          />
          <TextInput
            label="Phone Number"
            placeholder="Phone number"
            type="phone"
            name="phoneNo"
            onChange={onChange}
            acceptNumber={acceptNumber}
            value={formdata.phoneNo}
          />

          <TextInput
            onChange={onChange}
            label="Location"
            placeholder="Nigeria"
            type="select"
            name="location"
            options={["Nigeria", "South Africa", "Kenya", "Sudan"]}
            value={formdata.location}
          />

          <TextInput
            label="Password"
            name="password"
            type="pasword"
            onChange={onChange}
            value={formdata.password}
          />
        </form>
        <div className="mt-4 mb-8">
          <p className="leading-3">
            By signing up, you agree to our{" "}
            <span className="text-[#FF832B]">Terms & Conditions</span> and
            <span className="text-[#FF832B]"> Privacy policy</span>
          </p>
        </div>
        <div className="mb-4">
          {/* <button
            className="bg-green-100 text-white  rounded-[24px] p-[13px] w-full"
            onClick={handleSubmit}
          >
            Register
          </button> */}

          <Button
            info={formdata}
            loading={loading}
            padding="p-[15.5px]"
            rounded="rounded-[24px]"
            color="text-white"
            bgColor="bg-green-100"
            btnStyle="w-full"
            onClick={handleSubmit}
            text="Register"
          />
        </div>

        <p className="text-center">
          Already have an account?{" "}
          <span
            className="text-[#FF832B] cursor-pointer"
            onClick={() => router.push("/login")}
          >
            Login
          </span>
        </p>
      </div>
    </AuthLayout>
  );
};

export default Register;
