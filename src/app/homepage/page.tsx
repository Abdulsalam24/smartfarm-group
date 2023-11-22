import React from "react";
import Image from "next/image";
import sunCloud from "../../assets/icons/sun-cloud.svg";
// import emptyNote from "../../assets/icons/emptyState.svg";
import plus from "../../assets/icons/plus.svg";
import Link from "next/link";
import dummy from "../../assets/img/dummy-pic.png";

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

  return (
    <section className="px-6 pt-[55px] pb-[70px]">
      <div>
        <p>Welcome Femi,</p>
        <div className="max-w-[380px] mx-auto flex justify-between items-start text-white p-4 py-6 sm-400:px-[25px] rounded-[20px] bg-[#EC7621] mt-6 mb-[45px]">
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
              <span className="">Mostly Cloudy</span>
            </div>
          </div>
        </div>
      </div>
      {tracking ? (
        <div>
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
                <button className="flex gap-[6px] items-center p-3 px-6 bg-[#225C2B]  rounded-[24px]">
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
    </section>
  );
};

export default HomePage;
