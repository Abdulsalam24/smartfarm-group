import React, { useState } from "react";
import menuIcon from "../assets/icons/bars-3.svg";
import Image from "next/image";
import closeIcon from "../assets/img/x-mark.svg";
import Link from "next/link";
import { SwipeableDrawer } from "@mui/material";

const SideBar = ({
  mobile,
  toggleDrawer,
  firstOption,
  secoundOption,
  link1,
  link2,
}: any) => {
  return (
    <div>
      <div>
        {(["right"] as const).map((anchor) => (
          <div className="wide-900:hidden" key={anchor}>
            <div className="cursor-pointer mt-7">
              {mobile.right ? (
                <Image
                  src={closeIcon}
                  alt="menuIcon"
                  className="h-[24px] z-[999] w-[24px] text-base-dark-300 dark:text-[#9E9B9E]"
                  onClick={toggleDrawer(anchor, false)}
                />
              ) : (
                <Image
                  onClick={toggleDrawer(anchor, true)}
                  src={menuIcon}
                  alt="menuIcon"
                />
              )}
            </div>

            <SwipeableDrawer
              anchor={anchor}
              open={mobile[anchor]}
              onClose={toggleDrawer(anchor, false)}
              onOpen={toggleDrawer(anchor, true)}
            >
              <div className="pt-10 w-[70vw] wide-900:hidden z-10 bg-white">
                <Image
                  src={closeIcon}
                  alt="menuIcon"
                  className="h-[24px] z-[999] w-[24px] ml-auto mb-6 mt-2 mr-5 text-base-dark-300 dark:text-[#9E9B9E]"
                  onClick={toggleDrawer(anchor, false)}
                />
                <ul className="flex flex-col gap-4 text-black md:hidden">
                  <Link href={link1}>
                    <li className="px-6 pb-[13px] border border-x-0 border-t-0">
                      {firstOption}
                    </li>
                  </Link>
                  <Link href={link2}>
                    <li className="px-6 pb-[13px] border border-x-0 border-t-0">
                      {secoundOption}
                    </li>
                  </Link>
                </ul>
              </div>
            </SwipeableDrawer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
