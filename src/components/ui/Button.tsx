import React from "react";
import loaderIcon from "../../assets/img/loader.svg";
import Image from "next/image";

const Button = ({
  onClick,
  loading,
  text,
  color,
  rounded,
  bgColor,
  btnStyle,
  padding,
}: any) => {
  return (
    <button
      className={`capitalize text-center ${rounded ? rounded : "rounded-[18px]"} ${color} ${bgColor} ${
        padding ? padding : "py-2 px-4"
      } ${btnStyle}`}
      onClick={onClick}
    >
      {loading ? (
        <Image className="animate-spin mx-auto" src={loaderIcon} alt="loaderIcon" />
      ) : (
        <>{text}</>
      )}
    </button>
  );
};

export default Button;
