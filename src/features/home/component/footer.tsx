import React from "react";
import copyRight from "../../../assets/icons/copyright-light.svg";
import footerIllustration from "../../../assets/icons/footer-illustration.svg";

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-green-100">
      <div className="pt-[32px] pb-[39px] md:flex max-w-[1200px] mx-auto md:items-center">
        <Image
          className="absolute max-w-[401px] md:w-full left-5 md:relative"
          src={footerIllustration}
          alt="footerIllustration"
          width={131}
          height={125}
        />
        <div className="relative max-w-[350px] z-[30px] ml-auto mr-5 text-center text-white md:max-w-[703px]">
          <h3 className="text-xl md:text-[36px] md:leading-[44px] md:font-medium">
            Are you looking to farm efficiently and increase profitability?
          </h3>
          <Link href="/login">
            <button className="bg-orange-100 mt-6 text-white py-2 px-4 rounded-[18px] md:px-[28px] md:py-[15px]">
              Start here
            </button>
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-center gap-1 p-5 text-white border border-b-0 border-x-0">
        <span>SmartFarm</span>
        <Image
          src={copyRight}
          alt="copyRight"
          className="md:w-[14px] md:h-[14px]"
        />
        <span>2023.All Rights Reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
