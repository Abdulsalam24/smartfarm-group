/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { KeyboardEvent } from "react";

const OtpInput = ({ handleChange, otp, setOTP, inputRefs }: any) => {
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && index > 0 && otp[index] === "") {
      inputRefs.current[index - 1].focus();
    }
  };
  const handlePaste = (
    e: React.ClipboardEvent<HTMLInputElement>,
    index: number
  ) => {
    e.preventDefault();
    const pastedData = Array.from(e.clipboardData.getData("text"));
    const newOTP = [...otp];

    pastedData.forEach((digit, i) => {
      if (index + i < otp.length) {
        newOTP[index + i] = digit;
      }
    });

    setOTP(newOTP);

    const nextIndex = Math.min(index + pastedData.length, otp.length - 1);
    inputRefs.current[nextIndex]?.focus();
  };
  return (
    <div className="flex justify-center gap-6 md:gap-4">
      {otp.map((digit: any, index: any) => (
        <input
          key={index}
          type="text"
          id="otp"
          name="otp"
          value={digit}
          inputMode="numeric"
          onChange={(e) => handleChange(e, index)}
          onPaste={(e) => handlePaste(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          maxLength={1}
          ref={(ref) => (inputRefs.current[index] = ref!)}
          className="w-[50px] border border-x-0 border-t-0 border-[#000000] h-[50px] px-4 md:w-[71.75px] md:px-7"
          required
        />
      ))}
    </div>
  );
};

export default OtpInput;
