import React from "react";
import Image from "next/image";

import illustration from "../../assets/img/home-illustration.svg";
import ionTime from "../../assets/icons/ion_time-outline.svg";
import carbonAnalytic from "../../assets/icons/carbon_analytics.svg";
import plus from "../../assets/icons/plus.svg";
import Link from "next/link";

const Home = () => {
  const mainContent = [
    {
      src: ionTime,
      label: "Precision Agriculture",
      text: "Smart farming allows precise management of resources such as water, fertilizers, and pesticides, minimizing waste and maximizing efficiency",
    },
    {
      src: carbonAnalytic,
      label: "Improve Yields",
      text: "Data analytics and predictive modeling help farmers make informed decisions, optimizing planting times, crop varieties, and harvesting schedules for higher yields.",
    },
    {
      src: carbonAnalytic,
      label: "Improve Yields",
      text: "Data analytics and predictive modeling help farmers make informed decisions, optimizing planting times, crop varieties, and harvesting schedules for higher yields.",
    },
  ];

  const faq = [
    {
      label: "What is SmartFarm",
      text: "Smart farming allows precise management of resources such as water, fertilizers, and pesticides, minimizing waste and maximizing efficiency",
    },
    {
      label: "What is SmartFarm",
      text: "Data analytics and predictive modeling help farmers make informed decisions, optimizing planting times, crop varieties, and harvesting schedules for higher yields.",
    },
    {
      label: "What is SmartFarm",
      text: "Data analytics and predictive modeling help farmers make informed decisions, optimizing planting times, crop varieties, and harvesting schedules for higher yields.",
    },
    {
      label: "What is SmartFarm",
      text: "Data analytics and predictive modeling help farmers make informed decisions, optimizing planting times, crop varieties, and harvesting schedules for higher yields.",
    },
    {
      label: "What is SmartFarm",
      text: "Data analytics and predictive modeling help farmers make informed decisions, optimizing planting times, crop varieties, and harvesting schedules for higher yields.",
    },
  ];

  return (
    <div className="px-6 wrapper">
      <header className="mt-[21.9px] ">
        <div className="w-full text-center px-3 py-5 bg-gradient rounded-t-[15px] md:flex items-center md:text-left md:pt-[86px] md:pb-[28px] md:pr-[35px] md:pl-[79px] md:items-start">
          <div className="md:w-[50%] md:pt-2">
            <h1 className="text-green-100  leading-[44px] font-bold md:leading-[72px] md:font-extrabold">
              Welcome to SmartFarm.
            </h1>
            <p className="text-green-150 mt-4 mb-[48px] md:mt-5 md:mb-[48px] md:text-[#043E0D]">
              Optimal Yields made easy.Your one-stop solution for Smart planting
              and Harvesting with precision agriculture .
            </p>
            <Link href="/login">
              <button className="bg-green-100 text-white py-2 px-4 rounded-[18px] md:px-8 md:py-3 md:rouned-[28px]">
                Get Plant Prediction
              </button>
            </Link>
          </div>
          <div className="flex-col items-center hidden md:flex md:w-[50%]">
            <Image
              src={illustration}
              alt="illustration"
              className="md:w-full max-w-[534px] max-h-[401px]"
            />
          </div>
        </div>
      </header>
      <section className="mt-[45px] md:mt-[90px]">
        <div className="flex flex-col items-center md:hidden">
          <Image src={illustration} alt="illustration" />
          <h3 className="mt-[18px] font-bold mb-6">Why choose SmartFarm</h3>
        </div>
        <div className="hidden text-center md:block">
          <h3 className="text-[48px] text-green-100 font-extrabold mb-[110px]">
            Why Choose us{" "}
          </h3>
        </div>
        <div className="flex flex-col gap-[48px] items-center md:flex-row flex-wrap justify-center">
          {mainContent.map((main) => (
            <div
              className="border border-black pt-4 px-[22px] pb-8 text-center rounded-lg max-w-[400px] md:border-0"
              key={main.label}
            >
              <div className="bg-green-200 p-3 rounded-[10px] inline-block">
                <Image src={main.src} alt="main icon" />
              </div>
              <h4 className="my-2">{main.label}</h4>
              <p>{main.text}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="pt-[100px] pb-5 md:pb-[65px]">
        <div>
          <h3 className="mb-6 text-center md:hidden">
            Frequently Asked Questions
          </h3>
          <h3 className="hidden mb-6 text-center md:block text-[48px] text-[#043E0D]">
            FAQs
          </h3>

          <div className="flex flex-col gap-6">
            {faq.map((item, i) => (
              <div
                key={i}
                className="bg-green-300 flex p-[18px] text-white rounded-[10px] justify-between items-center md:py-[30px] md:px-[20px]"
              >
                <h4 className="font-medium">{item.label}</h4>
                <Image
                  src={plus}
                  alt="main icon"
                  className="md:w-[32px] md:h-[32px]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
