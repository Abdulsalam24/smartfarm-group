import React, { useState } from "react";
import emptyNote from "../../assets/icons/emptyState.svg";
import logo from "../../assets/icons/logo.svg";
import sunCloud from "../../assets/icons/sun-cloud.svg";
import Image from "next/image";
import Link from "next/link";
import plus from "../../assets/icons/plus.svg";
import { useRouter } from "next/navigation";
import { Skeleton } from "@mui/material";
import SideBar from "../sideBar";

const MobileHomepage = ({
  tracking,
  trackingLoader,
  setPlantModal,
  todayDate,
  description,
  cropTracking,
  weather,
  weatherLoading,
  location,
  temperatureInCelsius,
  userInfo,
}: any) => {
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
    <>
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
      <p className="md:hidden mt-8 ml-6">Welcome {userInfo},</p>
      <div className="md:hidden px-5">
        <div className="md:hidden max-w-[380px] mx-auto flex justify-between items-start text-white p-4 py-6 sm-400:px-[25px] rounded-[20px] bg-[#EC7621] mt-6 mb-[45px]">
          {weatherLoading ? (
            <>
              <Skeleton
                variant="text"
                className="weather-skeleton1 h-[109px] w-[132px] bg-[#eee6f2a0]"
              />
              <div className="flex">
                <Skeleton
                  variant="text"
                  className="weather-skeleton2  w-[43.55px] bg-[#eee6f2a0] mt-4"
                />
                <Skeleton
                  variant="text"
                  className="  weather-skeleton  w-[48.55px] bg-[#eee6f2a0]"
                />
              </div>
            </>
          ) : (
            <>
              <div>
                <p className="text-white">{todayDate}</p>
                <p className="text-white">{location}</p>
              </div>
              <div className="flex">
                <div className="mt-4">
                  <Image src={sunCloud} alt="sunCloud" />
                </div>
                <div>
                  <h2 className="text-[36px] leading-[20px]">
                    {temperatureInCelsius}°
                  </h2>
                  <span>{description}</span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="md:hidden">
        <div className="px-5">
          <div className="flex items-center justify-between">
            <h3>Crop Tracking</h3>
            <p
              className="text-[#35BF4A] cursor-pointer"
              onClick={() => setPlantModal(true)}
            >
              + New plant tracking
            </p>
          </div>
          <div>
            {trackingLoader ? (
              Array.from({ length: 6 }).map((_: any, i) => (
                <div
                  key={i}
                  className="track-item  flex mt-8 p-4 gap-[10px] items-center justify-between"
                >
                  <div>
                    <Skeleton
                      variant="text"
                      className="h-[76px] w-[164px] bg-[#eee6f2a0]"
                    />
                  </div>
                  <div>
                    <Skeleton
                      variant="text"
                      className="h-[76px] w-[25px] bg-[#eee6f2a0]"
                    />
                  </div>
                </div>
              ))
            ) : cropTracking.length > 1 ? (
              cropTracking?.map((track: any) => (
                <div
                  key={track.id}
                  className="track-item  flex mt-8 p-4 gap-[10px] items-center justify-between"
                >
                  <div className="grow flex flex-col gap-2">
                    <h4 className="font-bold">Crop type - {track.crop}</h4>
                    <p>Plant date - {track.plantedSzn}</p>
                    <p>Harvest date - {track.harvestSzn}</p>
                  </div>
                  <div
                    className={`px-2 py-1 rounded-2xl ${
                      track.status === "ONGOING"
                        ? "bg-[#ECFDF3] text-[#027A48]"
                        : "bg-[#FFF4ED] text-[#B93815]"
                    }`}
                  >
                    <h5 className="font-medium">{track.status}</h5>
                  </div>
                </div>
              ))
            ) : (
              <div className="px-5">
                <div>
                  <div className="flex flex-col items-center">
                    <Image src={emptyNote} alt="emptyNote" />
                    <div className="mt-4 mb-[52px] text-center">
                      <h3 className="text-[18px]">No tracking</h3>
                      <h5 className="text-[#6F6F6F]">
                        You currently have no history on crop tracking
                      </h5>
                    </div>
                    <button
                      onClick={() => setPlantModal(true)}
                      className="flex gap-[6px] items-center p-3 px-5 bg-[#225C2B]  rounded-[24px]"
                    >
                      <Image src={plus} alt="main icon" />
                      <span className="text-white text-[14px]">
                        Start Prediction
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileHomepage;
