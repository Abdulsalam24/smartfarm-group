"use client";

import React, { useState } from "react";
import Image from "next/image";
import illustration from "../../assets/img/home-illustration.svg";
import ionTime from "../../assets/icons/ion_time-outline.svg";
import carbonAnalytic from "../../assets/icons/carbon_analytics.svg";
import preFooter from "../../assets/img/pre-footer-img.svg";
import preFooter2 from "../../assets/img/pre-footer-img2.svg";

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
      label: "Improve Yield",
      text: "Data analytics and predictive modeling help farmers make informed decisions, optimizing planting times, crop varieties, and harvesting schedules for higher yields.",
    },
    {
      src: carbonAnalytic,
      label: "Risk Mitigation",
      text: "By receiving timely updates on weather conditions, farmers can mitigate risks associated with adverse weather effects. This helps to reduce potential losses.",
    },
  ];

  const faq = [
    {
      id: 1,
      label: "What is SmartFarm",
      text: "Smart farming allows precise management of resources such as water, fertilizers, and pesticides, minimizing waste and maximizing efficiency",
    },
    {
      id: 2,

      label: "How accurate are the predictions?",
      text: "Our predictions are based on a combination of historical data, machine learning algorithms, and real-time weather updates. While we strive for accuracy, it's important to note that agricultural conditions can be influenced by various factors. We continuously refine our models based on user feedback and new data to improve accuracy",
    },
    {
      id: 3,

      label: "Can I receive real-time updates on weather conditions?",
      text: "Yes, smartfarm integrates real-time weather data to provide you with the latest information. You can also set up notifications and alerts based on changing weather conditions to stay informed.",
    },
    {
      id: 4,
      label: "Is smartfarm suitable for my specific location?",
      text: "Absolutely. smartfarm is customizable for different regions and takes into account local weather patterns and soil conditions. We work to provide localized recommendations to ensure relevance to your specific location.",
    },
  ];

  const [selected, setSelected] = useState<number | null>(null);

  const toggle = (id: number) => {
    if (selected === id) {
      return setSelected(null);
    }
    setSelected(id);
  };

  return (
    <div className="home mt-5">
      <header className="mt-[21.9px] wrapper px-6 pb-[50px] md:pb-0">
        <div className="w-full text-center px-3 py-5 bg-gradient rounded-t-[15px] md:flex items-center md:text-left md:pt-[86px] md:pb-[28px] md:pr-[35px] md:pl-[79px] md:items-start">
          <div className="md:w-[50%] md:pt-2">
            <h1 className="text-green-100  leading-[44px] font-bold md:leading-[72px] md:font-extrabold">
              Welcome to SmartFarm.
            </h1>
            <p className="text-green-150 md:leading-[24px] mt-4 mb-[48px] md:mt-5 md:mb-[48px] md:text-[#043E0D] md:text-[18px]">
              Optimal Yields made easy.Your one-stop solution for Smart planting
              and Harvesting with precision agriculture .
            </p>
            <Link href="/login">
              <button className="bg-green-100 text-white py-2 px-4 rounded-[18px] md:px-8 md:py-[15px] md:rouned-[28px]">
                Get Plant Prediction
              </button>
            </Link>
          </div>
          <div className="flex-col items-center hidden md:flex md:w-[50%]">
            <Image
              src={illustration}
              alt="illustration"
              className="md:w-full "
            />
          </div>
        </div>
      </header>
      <section className="mt-[45px] md:mt-[90px] wrapper px-6 ">
        <div className="flex flex-col items-center md:hidden">
          <Image src={illustration} alt="illustration" />
          <h3 className="mt-[41px] font-bold mb-6">Why choose SmartFarm</h3>
        </div>
        <div className="hidden text-center md:block">
          <h3 className="text-[48px] text-green-100 font-extrabold mb-[110px]">
            Why Choose us{" "}
          </h3>
        </div>
        <div className="flex flex-col gap-[48px] items-center md:flex-row flex-wrap justify-center md:max-w-[900px] mx-auto">
          {mainContent.map((main) => (
            <div
              className="border md:leading-[30px] border-black pt-4 px-[22px] pb-8 text-center rounded-lg max-w-[400px] md:border-0"
              key={main.label}
            >
              <div className="bg-green-200 p-3 rounded-[10px] inline-block">
                <Image src={main.src} alt="main icon" />
              </div>
              <h4 className="my-2 md:my-4">{main.label}</h4>
              <p>{main.text}</p>
            </div>
          ))}
        </div>
      </section>
      <div className="relative max-w-[1378px]  overflow-x-clip mx-auto h-[100px] md:h-[422px]">
        <Image
          className="absolute hidden md:block left-[-120px] top-[-320px] z-[-10px] w-[826px] h-[847px]"
          src={preFooter}
          alt="preFooter"
        />
        <Image
          className="absolute right-0 w-[166px] h-[166px] top-[20px] md:top-[-80px] md:w-[673px] md:h-[673px]"
          src={preFooter2}
          alt="preFooter2"
        />
      </div>
      <section className="pt-[100px] pb-5 md:pb-[65px] wrapper px-6 ">
        <div>
          <div className="mb-[57px]">
            <h3 className=" text-center md:hidden">
              Frequently Asked Questions
            </h3>
            <h3 className="hidden mb-6 text-center md:block text-[48px] text-[#043E0D]">
              FAQs
            </h3>
          </div>

          <div className="flex flex-col max-w-[1154px] mx-auto gap-6">
            {faq.map((item) => (
              <div
                key={item.id}
                className="bg-green-300 cursor-pointer p-[18px] pb-0 text-white rounded-[10px] md:py-[30px] md:px-[20px] md:pb-3"
                onClick={() => toggle(item.id)}
              >
                <div className="flex justify-between items-center ">
                  <h4 className="font-medium">{item.label}</h4>
                  <Image
                    src={plus}
                    alt="main icon"
                    className="md:w-[32px] md:h-[32px]"
                  />
                </div>
                <div
                  className={`pt-4  ${
                    selected === item.id ? "content show pb-4" : "content "
                  }`}
                >
                  <span>{item.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
