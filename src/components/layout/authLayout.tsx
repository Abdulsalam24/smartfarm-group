import Image from 'next/image';
import React from 'react'
import bgAuthImg from "../../assets/img/bg-auth.png";
import whiteLogo from "../../assets/img/white-logo.svg";

const AuthLayout = ({children} : {children : React.ReactNode}) => {
    return (
      <div className="items-center md:flex md:px-0 md:pb-0 auth-layout">
        <div className="md:w-[50%] relative hidden md:block">
          <Image
            src={bgAuthImg}
            alt="bgAuthImg"
            className="object-cover min-h-screen"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className=" sign-up-overlay flex flex-col items-center gap-8 px-5 max-w-[632px] mx-[55px] pt-[193px] pb-[295px]">
              <Image src={whiteLogo} alt="whiteLogo" />
              <h2 className="text-[48px] text-white text-center font-semibold">
                Your one-stop solution for Smart planting!
              </h2>
            </div>
          </div>
        </div>
        <div className="px-6 pb-[100px] md:flex items-center md:w-[50%] max-w-[530px] mx-auto">
          {children}
        </div>
      </div>
    );
}

export default AuthLayout