"use client";
import React, { useEffect, useState } from "react";
import menuIcon from "../../assets/icons/bars-3.svg";
import Image from "next/image";
import sunCloud from "../../assets/icons/sun-cloud.svg";
import closeIcon from "../../assets/img/close.svg";
import emptyNote from "../../assets/icons/emptyState.svg";
import plus from "../../assets/icons/plus.svg";
import Link from "next/link";
import dummy from "../../assets/img/dummy-pic.png";
import houseIcon from "../../assets/img/houseIcon.svg";
import profile from "../../assets/img/70.png";

import logo from "../../assets/icons/logo.svg";
import { SwipeableDrawer } from "@mui/material";
import SideBar from "@/components/sideBar";

const HomePage = () => {
  const tracking = false;

  const tracksList = [
    {
      src: dummy,
      title: "Rice",
      platDate: "21 Nov 2023 ",
      harvestDate: " 03 Jan 2024 ",
      status: "ongoing",
    },
    {
      src: dummy,
      title: "Rice",
      platDate: "21 Nov 2023 ",
      harvestDate: "03 Jan 2024 ",
      status: "Pending",
    },
    {
      src: dummy,
      title: "Rice",
      platDate: "21 Nov 2023 ",
      harvestDate: "03 Jan 2024 ",
      status: "ongoing",
    },
    {
      src: dummy,
      title: "Rice",
      platDate: "21 Nov 2023 ",
      harvestDate: "03 Jan 2024 ",
      status: "ongoing",
    },
    {
      src: dummy,
      title: "Rice",
      platDate: "21 Nov 2023 ",
      harvestDate: "03 Jan 2024 ",
      status: "ongoing",
    },
  ];

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
    <section className="pb-[70px] wrapper home-page">
      <div className="md:hidden flex items-center justify-between pr-5">
        <div>
          <Image src={logo} alt="logo" />
        </div>
        <SideBar
          mobile={mobile}
          setMobile={setMobile}
          toggleDrawer={toggleDrawer}
          firstOption="New Prediction"
          secoundOption="Prediction History"
          link1="/crop-prediction"
          link2="/prediction-history"
        />
      </div>
      <p className="md:hidden mt-8 ml-6">Welcome Femi,</p>
      <div className="md:hidden px-5">
        <div className="md:hidden max-w-[380px] mx-auto flex justify-between items-start text-white p-4 py-6 sm-400:px-[25px] rounded-[20px] bg-[#EC7621] mt-6 mb-[45px]">
          <div>
            <p className="text-white">21st November 2023</p>
            <p className="text-white">Lagos</p>
          </div>
          <div className="flex">
            <div className="mt-4">
              <Image src={sunCloud} alt="sunCloud" />
            </div>
            <div>
              <h2 className="text-[36px] leading-[20px]">26°</h2>
              <span>Mostly Cloudy</span>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden">
        {tracking ? (
          <div className="px-5">
            <h3>Crop Prediction</h3>
            <div>
              <div className="flex flex-col items-center">
                <Image src={emptyNote} alt="emptyNote" />
                <div className="mt-4 mb-[52px] text-center">
                  <h3 className="text-[18px]">No prediction</h3>
                  <h5 className="text-[#6F6F6F]">
                    You currently have no history on crop prediction
                  </h5>
                </div>
                <Link href="/crop-prediction">
                  <button className="flex gap-[6px] items-center p-3 px-5 bg-[#225C2B]  rounded-[24px]">
                    <Image src={plus} alt="main icon" />
                    <span className="text-white text-[14px]">
                      Start Prediction
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="px-5">
            <div className="flex items-center justify-between">
              <h3>Crop Tracking</h3>
              <p className="text-[#35BF4A]">+ new prediction</p>
            </div>
            <div>
              {tracksList.map((track, i) => (
                <div
                  key={i}
                  className="track-item  flex mt-8 p-4 gap-[10px] items-center justify-between"
                >
                  <div>
                    <Image src={track.src} alt="track" />
                  </div>
                  <div className="grow">
                    <h4 className="font-bold">{track.title}</h4>
                    <p>Plant date - {track.title}</p>
                    <p>Harvest date - {track.title}</p>
                  </div>
                  <div
                    className={`px-2 py-1 rounded-2xl ${
                      track.status === "ongoing"
                        ? "bg-[#ECFDF3] text-[#027A48]"
                        : "bg-[#FFF4ED] text-[#B93815]"
                    }`}
                  >
                    <h5 className="font-medium">{track.status}</h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="hidden md:flex">
        <div className="w-[25%] px-5 shadow-md min-h-screen">
          <Image src={logo} alt="logo" />
          <ul>
            <li className="flex mt-[65px] items-center gap-6 p-2">
              <Image src={houseIcon} alt="houseicon" width={24} height={24} />
              <span>Dashboard</span>
            </li>
          </ul>
        </div>
        <div className="w-[75%]">
          <div className="py-[10px] shadow-md w-full">
            <div className="flex items-center py-3 px-[60px] justify-end">
              <p>Femi Olayinka</p>
              <Image src={profile} alt="profile" />
            </div>
          </div>
          <div className="pt-5 pl-6 flex gap-5">
            <div className="w-[70%]">
              <div className="flex justify-between items-start text-white p-4 py-6 sm-400:px-[25px] rounded-[20px] bg-[#EC7621] mb-[45px] w-full shadow-md">
                <div>
                  <p className="text-white">21st November 2023</p>
                  <p className="text-white">Lagos</p>
                </div>
                <div className="flex">
                  <div className="mt-4">
                    <Image
                      className="md:w-[193px]"
                      src={sunCloud}
                      alt="sunCloud"
                    />
                  </div>
                  <div>
                    <h2 className="text-[36px] leading-[20px] md:leading-[40px] md:text-[60px]">
                      26°
                    </h2>
                    <span className="md:text-base">Mostly Cloudy</span>
                  </div>
                </div>
              </div>
              <div>
                {tracking ? (
                  <div className="px-5">
                    <h3>Crop Prediction</h3>
                    <div>
                      <div className="flex flex-col items-center">
                        <Image src={emptyNote} alt="emptyNote" />
                        <div className="mt-4 mb-[52px] text-center">
                          <h3 className="text-[18px]">No prediction</h3>
                          <h5 className="text-[#6F6F6F]">
                            You currently have no history on crop prediction
                          </h5>
                        </div>
                        <Link href="/crop-prediction">
                          <button className="flex gap-[6px] items-center p-3 px-5 bg-[#225C2B]  rounded-[24px]">
                            <Image src={plus} alt="main icon" />
                            <span className="text-white text-[14px]">
                              Start Prediction
                            </span>
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="px-5">
                    <div className="flex items-center justify-between">
                      <h3>Crop Tracking</h3>
                      <p className="text-[#35BF4A]">+ new prediction</p>
                    </div>
                    <div>
                      {tracksList.map((track, i) => (
                        <div
                          key={i}
                          className="track-item  flex mt-8 p-4 gap-[10px] items-center justify-between"
                        >
                          <div>
                            <Image src={track.src} alt="track" />
                          </div>
                          <div className="grow">
                            <h4 className="font-bold">{track.title}</h4>
                            <p>Plant date - {track.title}</p>
                            <p>Harvest date - {track.title}</p>
                          </div>
                          <div
                            className={`px-2 py-1 rounded-2xl ${
                              track.status === "ongoing"
                                ? "bg-[#ECFDF3] text-[#027A48]"
                                : "bg-[#FFF4ED] text-[#B93815]"
                            }`}
                          >
                            <h5 className="font-medium">{track.status}</h5>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="w-[30%] min-h-screen flex flex-col gap-40 shadow-md p-5 ">
              <h2 className="text-base">Prediction History</h2>
              <div className="text-center self-center ">
                <Image src={emptyNote} alt="emptyNote" />
                <p>No history on prediction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
