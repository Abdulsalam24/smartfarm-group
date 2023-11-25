import React from "react";
import loaderIcon from "../../assets/img/loader.svg";
import Image from "next/image";
import isFormFilled from "@/lib/form-check";

const Button = ({
  onClick,
  loading,
  text,
  color,
  rounded,
  bgColor,
  btnStyle,
  padding,
  info,
  specialCheck,
}: any) => {
  return (
    <button
      disabled={specialCheck ? true : isFormFilled(info) || loading}
      className={`capitalize text-center ${
        rounded ? rounded : "rounded-[18px]"
      } ${color} ${bgColor} ${
        padding ? padding : "py-2 px-4"
      } ${btnStyle} disabled:bg-[#506C5B]`}
      onClick={onClick}
    >
      {loading ? (
        <Image
          className="animate-spin mx-auto h-[21px]"
          src={loaderIcon}
          alt="loaderIcon"
        />
      ) : (
        <>{text}</>
      )}
    </button>
  );
};

export default Button;
