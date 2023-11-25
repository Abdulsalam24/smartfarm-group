"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import sunCloud from "../../assets/icons/sun-cloud.svg";
import emptyNote from "../../assets/icons/emptyState.svg";
import plus from "../../assets/icons/plus.svg";
import Link from "next/link";
import dummy from "../../assets/img/dummy-pic.png";
import houseIcon from "../../assets/img/houseIcon.svg";
import profile from "../../assets/img/70.png";
import logo from "../../assets/icons/logo.svg";
import SideBar from "@/components/sideBar";
import PredictionHistory from "@/features/prediction-history";
import { getLoginUser } from "@/utils/setUser";
import { getCookie } from "typescript-cookie";
import { getPredictionAction } from "@/stores/prediction/action";
import { getWeatherAction } from "@/stores/weather/action";
import Modal from "@/components/ui/modal";
import Button from "@/components/ui/Button";
import CropPrediction from "@/components/ui/crop-predcition";
import Loader from "@/components/ui/loader";
import { useRouter } from "next/navigation";
import { getProfileAction } from "@/stores/auth/action";

import { CiLogout } from "react-icons/ci";
import { Skeleton } from "@mui/material";
const HomePage = () => {
  const tracking = false;

  const router = useRouter();

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

  const [isOpen, setIsOpen] = useState(false);

  const [weatherLoading, setWeatherLoading] = useState(true);
  const [loading, setloading] = useState(true);

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

  const handleSubmit = () => {
    // setWeatherLoading(true);
    setIsOpen(true);
  };

  useEffect(() => {
    const token = getCookie("token");
  }, []);

  const [userInfo, setUserInfo] = useState("");
  const [weather, setWeather] = useState<any>({});

  useEffect(() => {
    setWeatherLoading(true);
    setloading(true);
    const userDetails = JSON.parse(getCookie("user")!);
    setUserInfo(userDetails);

    const getPredictionAndWeather = async () => {
      const profile = await getProfileAction();

      if (profile.success) {
        const location = profile.data.location;
        const weather = await getWeatherAction(location);
        if (weather.success) {
          setWeatherLoading(false);
          setWeather(weather.data);
        }
      } else {
        return router.push(profile.redirect);
      }
    };
    setloading(false);
    getPredictionAndWeather();
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const today = new Date();

  const day = today.getDate();
  const month = today.toLocaleString("default", { month: "long" });
  const year = today.getFullYear();

  const suffix = (day: any) => {
    if (day >= 11 && day <= 13) {
      return "th";
    }
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  const todayDate = `${day}${suffix(day)} ${month} ${year}`;

  const temperatureInCelsius = (weather?.main?.temp - 273.15).toFixed(0);

  const location = weather?.sys?.country;

  const description = weather?.weather ? weather?.weather[0]?.description : "";

  return (
    <section className="pb-[70px] md:pb-5 wrapper home-page">
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
                className="h-[70px] w-[92.55px] bg-[#eee6f2a0]"
              />

              <div className="flex">
                <Skeleton
                  variant="text"
                  className="h-[70px] w-[92.55px] bg-[#eee6f2a0]"
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
              {/* <p
                className="text-[#35BF4A] cursor-pointer"
                onClick={() => setIsOpen(true)}
              >
                + new prediction
              </p> */}
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
        <div className="w-[25%] z-[40px] px-5 shadow-md min-h-screen">
          <Image src={logo} alt="logo" />
          <ul className=" mt-[65px]">
            <li className="flex items-center gap-6 p-2">
              <Image src={houseIcon} alt="houseicon" width={24} height={24} />
              <span>Dashboard</span>
            </li>
            <li
              onClick={() => {
                localStorage.clear();
                router.push("/");
              }}
              className="flex cursor-pointer mt-[20px] items-center gap-6 p-2"
            >
              <CiLogout fill="#EF4444" className="w-[24px] h-[24px]" />
              <span className="text-red-500">Logout</span>
            </li>
          </ul>
        </div>
        <div className="w-[75%]">
          <div className="py-[10px] shadow-md border-[#a8a8a8667646%, 0.4)] broder-x-0 border-t-0 w-full">
            <div className="flex gap-4 items-center py-3 px-[60px] justify-end">
              <p className="capitalize">{userInfo}</p>
              <Image src={profile} alt="profile" />
            </div>
          </div>
          <div className="pt-5 pl-6 flex gap-5">
            <div className="w-[65%]">
              {weatherLoading ? (
                <>
                  <Skeleton
                    variant="text"
                    className="h-[70px] w-[92.55px] bg-[#eee6f2a0]"
                  />

                  <div className="flex">
                    <Skeleton
                      variant="text"
                      className="h-[70px] w-[92.55px] bg-[#eee6f2a0]"
                    />
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
                  <div>
                    <div className="flex items-center justify-between">
                      <h3>Crop Tracking</h3>
                      <p
                        className="text-[#35BF4A] cursor-pointer"
                        onClick={() => setIsOpen(true)}
                      >
                        + new prediction
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
                        <div className="min-h-screen m-10 text-center mx-auto flex flex-col items-center ">
                          <Image src={emptyNote} alt="emptyNote" />
                          <p>No history on prediction</p>
                        </div>
                        {/* {tracksList.map((track, i) => (
                          <div
                            key={i}
                            className="table-paginate-row border border-[#8C8C8C] border-t-0 border-x-0 flex w-full justify-between items-center"
                          >
                            <p>Rice</p>
                            <p>Spring</p>
                            <p>Rainy</p>
                            <p>
                              <span
                                className={` text-xs font-medium px-2 py-1 rounded-2xl ${
                                  track.status === "ongoing"
                                    ? "bg-[#ECFDF3] text-[#027A48]"
                                    : "bg-[#FFF4ED] text-[#B93815]"
                                }`}
                              >
                                ongoing
                              </span>
                            </p>
                          </div>
                        ))} */}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className=" w-[30%] max-h-screen overflow-scroll rounded-lg shadow-md p-5">
              <div className="flex flex-col">
                <h2 className="text-base">Prediction History</h2>
                {weatherLoading ? <Loader /> : <PredictionHistory />}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={handleClose}>
        <div className="custom-modal">
          <CropPrediction handleClose={handleClose} />
        </div>
      </Modal>
    </section>
  );
};

export default HomePage;
