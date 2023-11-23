"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../assets/icons/logo.svg";
import menuIcon from "../../../assets/icons/bars-3.svg";
import closeIcon from "../../../assets/img/close.svg";
import Link from "next/link";
import Button from "../Button";
import SideBar from "@/components/sideBar";

export const NavBar: React.FC = () => {

  const [mobile, setMobile] = useState({
    right: false,
  });

  const toggleDrawer =
    (anchor: any, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (event && event.type) {
        if (
          event.type === "keydown" &&
          ((event as React.KeyboardEvent).key === "Tab" ||
            (event as React.KeyboardEvent).key === "Shift")
        ) {
          return;
        }
      }
      setMobile({ ...mobile, [anchor]: open });
    };

  return (
    <nav className="relative md:px-5 overflow-hidden wrapper">
      <div className="flex justify-between items-center pr-5">
        <div>
          <Image src={logo} alt="logo" />
        </div>
        <SideBar
          mobile={mobile}
          setMobile={setMobile}
          toggleDrawer={toggleDrawer}
          firstOption="Login"
          secoundOption=" Sign up"
          link1="/login"
          link2="/register"
        />

        <div className="items-center hidden gap-6 md:flex ">
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
