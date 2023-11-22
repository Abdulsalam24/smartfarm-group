"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../assets/icons/logo.svg";
import menuIcon from "../../../assets/icons/bars-3.svg";
// import closeIcon from "../../../assets/icons/close.svg";
import Link from "next/link";
import Button from "../Button";

export const NavBar: React.FC = () => {
  return (
    <nav className="wrapper relative overflow-hidden">
      <div className="flex justify-between items-center pr-5 pl-[5px]">
        <div>
          <Image src={logo} alt="logo" />
        </div>
        <div className="items-center hidden gap-6 md:flex">
          <Link href="/login">
            <p>Login</p>
          </Link>
          <Link href="/register">
            <Button bgColor="bg-green-100" color="text-white" text="Register" />
          </Link>
        </div>
      </div>
    </nav>
  );
};
