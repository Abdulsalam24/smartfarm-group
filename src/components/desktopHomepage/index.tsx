import React from "react";
import emptyNote from "../../assets/icons/emptyState.svg";
import Image from "next/image";
import Link from "next/link";
import plus from "../../assets/icons/plus.svg";
import { CiLogout } from "react-icons/ci";
import PredictionHistory from "@/features/prediction-history";
import { Skeleton } from "@mui/material";
import houseIcon from "../../assets/img/houseIcon.svg";
import sunCloud from "../../assets/icons/sun-cloud.svg";

import logo from "../../assets/icons/logo.svg";
import { useRouter } from "next/navigation";

const DesktopHomepage = ({
  setIsOpen,
  tracking,
  weatherLoading,
  description,
  todayDate,
  location,
  trackingLoader,
  userInfo,
  temperatureInCelsius,
  setPlantModal,
  cropTracking,
}: any) => {
  const router = useRouter();

  function getFirstTwoLetters(inputString: string): string {
    const words = inputString.split(" ");
    const firstLettersArray = words.map((word: string) => word[0]);
    const resultString = firstLettersArray.join("");
    return resultString;
  }

  return (
    <div className="hidden md:flex">
      <div className="w-[25%] z-[40px] shadow-md">
        <Image src={logo} alt="logo" />
        <ul className="max-h-screen mt-[65px]">
          <li className="flex cursor-pointer mt-[20px] pl-4 items-center gap-6 py-4 hover:bg-[#ebe8e8]">
            <Image src={houseIcon} alt="houseicon" width={24} height={24} />
            <span>Dashboard</span>
          </li>
          <li
            onClick={() => {
              localStorage.clear();
              router.push("/");
            }}
            className="flex cursor-pointer pl-4 items-center gap-6 py-4 hover:bg-[#ebe8e8]"
          >
            <CiLogout fill="#EF4444" className="w-[24px] h-[24px]" />
            <span className="text-red-500">Logout</span>
          </li>
        </ul>
      </div>
      <div className="w-[75%]">
        <div className="py-[10px] shadow-md border-[#a8a8a8667646%, 0.4)] broder-x-0 border-t-0 w-full">
          <div className="flex gap-4 items-center py-3 px-[60px] justify-end">
            <div className="border border-black rounded-full p-2">
              <h2 className="text-base">{getFirstTwoLetters(userInfo)}</h2>
            </div>
          </div>
        </div>
        <div className="pt-5 pl-6 flex items-baseline gap-5">
          <div className="w-[63%]">
            {weatherLoading ? (
              <>
                <div className="flex justify-between items-start text-white p-4 py-6 sm-400:px-[25px] rounded-[20px] bg-[#EC7621] mb-[45px] w-full shadow-md">
                  <Skeleton
                    variant="text"
                    className="h-[48px] w-[151px] bg-[#eee6f2a0]"
                  />
                  <div className="flex gap-[30px]">
                    <Skeleton
                      variant="text"
                      className="h-[113px] w-[193px] bg-[#eee6f2a0] mt-4"
                    />
                    <Skeleton
                      variant="text"
                      className="h-[124px] w-[129px] bg-[#eee6f2a0]"
                    />
                  </div>
                </div>
              </>
            ) : (
              <div className="flex justify-between items-start text-white p-4 py-6 sm-400:px-[25px] rounded-[20px] bg-[#EC7621] mb-[45px] w-full shadow-md">
                <div>
                  <p className="text-white text-[18px]">{todayDate}</p>
                  <p className="text-white mt-2 text-[18px]">{location}</p>
                </div>
                <div className="flex gap-[30px]">
                  <div className="mt-4">
                    <Image
                      className="md:w-[193px]"
                      src={sunCloud}
                      alt="sunCloud"
                    />
                  </div>
                  <div>
                    <h2 className="text-[36px] leading-[20px] md:leading-[50px] md:text-[60px]">
                      {temperatureInCelsius}°
                    </h2>
                    <span className="md:text-base">{description}</span>
                  </div>
                </div>
              </div>
            )}
            <div>
              <div>
                <div className="flex items-center justify-between">
                  <h3>Crop Tracking</h3>
                  <p
                    className="text-[#35BF4A] cursor-pointer"
                    onClick={() => setPlantModal(true)}
                  >
                    + New plant tracking
                  </p>
                </div>
                <div className="mt-5">
                  <div className="table-paginate shadow-lg rounded-lg overflow-hidden flex flex-col items-start w-full">
                    <div className="table-paginate-head flex w-full justify-between items-center">
                      <p>Crop Name</p>
                      <p>Planted Season</p>
                      <p>Harvest Season</p>
                      <p>Status</p>
                    </div>
                    <div className="max-h-screen overflow-scroll">
                      {trackingLoader ? (
                        Array.from({ length: 6 }).map((_: any, i) => (
                          <div
                            key={i}
                            className="table-paginate-row border border-[#8C8C8C] border-t-0 border-x-0 flex w-full justify-between items-center"
                          >
                            <div>
                              <Skeleton
                                variant="text"
                                className="h-[40px] w-[50%] bg-[#eee6f2a0]"
                              />
                            </div>
                            <div>
                              <Skeleton
                                variant="text"
                                className="h-[40px] w-[50%] bg-[#eee6f2a0]"
                              />
                            </div>
                            <div>
                              <Skeleton
                                variant="text"
                                className="h-[40px] w-[50%] bg-[#eee6f2a0]"
                              />
                            </div>
                            <div>
                              <Skeleton
                                variant="text"
                                className="h-[40px] w-[50%] bg-[#eee6f2a0]"
                              />
                            </div>
                          </div>
                        ))
                      ) : cropTracking.length > 1 ? (
                        cropTracking.map((track: any) => (
                          <div
                            key={track.id}
                            className="table-paginate-row border border-[#8C8C8C] border-t-0 border-x-0 flex w-full justify-between items-center"
                          >
                            <p>{track.crop}</p>
                            <p>{track.plantedSzn}</p>
                            <p>{track.harvestSzn}</p>
                            <p>
                              <span
                                className={`text-xs font-medium px-2 py-1 rounded-2xl ${
                                  track.status === "ONGOING"
                                    ? "bg-[#ECFDF3] text-[#027A48]"
                                    : "bg-[#FFF4ED] text-[#B93815]"
                                }`}
                              >
                                {track.status === "ONGOING"
                                  ? "ongoing"
                                  : "completed"}
                              </span>
                            </p>
                          </div>
                        ))
                      ) : (
                        <div className="px-5">
                          <h3>Crop Prediction</h3>
                          <div>
                            <div className="flex flex-col items-center">
                              <Image src={emptyNote} alt="emptyNote" />
                              <div className="mt-4 mb-[52px] text-center">
                                <h3 className="text-[18px]">No prediction</h3>
                                <h5 className="text-[#6F6F6F]">
                                  You currently have no history on crop
                                  prediction
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
              </div>
            </div>
          </div>

          <div className=" w-[35%] max-h-[100vh] overflow-scroll rounded-lg shadow-md p-5">
            <div className="flex flex-col">
              <div className="flex items-center justify-between">
                <h3 className="text-base">Prediction History</h3>
                <p
                  className="text-xs text-[#35BF4A] cursor-pointer"
                  onClick={() => setIsOpen(true)}
                >
                  + New prediction
                </p>
              </div>
              <PredictionHistory />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopHomepage;
