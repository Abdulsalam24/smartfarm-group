"use client";
import Loader from "@/components/ui/loader";
import Modal from "@/components/ui/modal";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import backIcon from "../../assets/icons/back-icon.svg";
import { useRouter } from "next/navigation";

const PredictionHistory = () => {
  
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    // setLoading(true);
    setIsOpen(true);
  };

  const history = [
    {
      date: "2023 jan",
      prediction: "Rice Prediction",
    },
    {
      date: "2023 jan",
      prediction: "Rice Prediction",
    },
    {
      date: "2023 jan",
      prediction: "Rice Prediction",
    },
    {
      date: "2023 jan",
      prediction: "Rice Prediction",
    },
    {
      date: "2023 jan",
      prediction: "Rice Prediction",
    },
  ];
  return (
    <section className="relative px-6 pt-5 pb-40">
      <div className="mb-5 w-fit" onClick={() => router.push("/homepage")}>
        <Image src={backIcon} alt="backIcon" />
      </div>
      <div className="text-center">
        <h3 className="text-[18px] mb-[5px]">Precise Farming</h3>
      </div>
      <div className="flex flex-col gap-8 mt-[41px] mb-[64px]">
        {history.map((item, i) => (
          <div
            key={i}
            className="pb-3 flex border border-x-0 border-t-0 justify-between items-end"
          >
            <div>
              <p>{item.date}</p>
              <p className="mt-4">{item.prediction}</p>
            </div>
            <p className="text-[#35BF4A]" onClick={() => setIsOpen(true)}>
              View result
            </p>
          </div>
        ))}
      </div>

      <Modal
        isOpen={isOpen}
        actionButton1={() => setIsOpen(false)}
        onClose={() => setIsOpen(false)}
      />
    </section>
  );
};

export default PredictionHistory;
