"use client";

import Loader from "@/components/ui/loader";
import Modal from "@/components/ui/modal";
import TextInput from "@/components/ui/text-input";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import backIcon from "../../assets/icons/back-icon.svg";
import { useRouter } from "next/navigation";

const CropPrediction = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    // setLoading(true);
    setIsOpen(true);
  };

  return (
    <section className="relative px-6 pt-5 pb-40">
      <div className="mb-5 w-fit" onClick={() => router.push("/homepage")}>
        <Image src={backIcon} alt="backIcon" />
      </div>
      {loading ? <Loader /> : ""}
      <div className="text-center">
        <h3 className="text-[18px] mb-[5px]">Precise Farming</h3>
        <h5 className="text-[#525252]">
          Input data to get information on precise farming
        </h5>
      </div>
      <div className="flex flex-col gap-8 mt-[41px] mb-[64px]">
        <TextInput label="Crop Type" placeholder="Rice" type="text" />
        <TextInput label="Location" placeholder="Nigeria" type="text" />
        <TextInput label="Soil PH" placeholder="6.5029999999" type="text" />
        <TextInput
          label="Water availability"
          placeholder="202.5029999999"
          type="text"
        />
      </div>

      <Link href="/crop-prediction" className="block text-center">
        <button className="py-2 px-4 bg-[#225C2B] rounded-[18px]">
          <span onClick={handleSubmit} className="text-white text-[14px]">
            Analyze Data
          </span>
        </button>
      </Link>

      <Modal
        isOpen={isOpen}
        actionButton1={() => setIsOpen(false)}
        onClose={() => setIsOpen(false)}
      />
    </section>
  );
};

export default CropPrediction;
