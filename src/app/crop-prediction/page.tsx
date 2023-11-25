"use client";

import Loader from "@/components/ui/loader";
import Modal from "@/components/ui/modal";
import TextInput from "@/components/ui/text-input";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import backIcon from "../../assets/icons/back-icon.svg";
import { useRouter } from "next/navigation";
import successIcon from "../../assets/icons/success-icon.svg";
import Button from "@/components/ui/Button";

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
        <TextInput
          onChange={() => ""}
          label="Crop Type"
          placeholder="Rice"
          type="text"
        />
        <TextInput
          onChange={() => ""}
          label="Location"
          placeholder="Nigeria"
          type="text"
        />
        <TextInput
          onChange={() => ""}
          label="Soil PH"
          placeholder="6.5029999999"
          type="text"
        />
        <TextInput
          onChange={() => ""}
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

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div
          className="custom-modal"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="w-full max-w-[90%] md:min-w-[400px]  p-6 mx-auto bg-white rounded-md dark:bg-dark-primary">
            <div className="flex flex-col items-center">
              <div className="flex flex-col items-center">
                <Image src={successIcon} alt="successIcon" />
                <h3 className="text-[18px]  mt-2 mb-[13px]">
                  Prediction Result
                </h3>
                <p className="text-[#6F6F6F]">
                  This is the best season to plant rice!
                </p>
              </div>
              <div className="mt-[43px] mb-[65px]">
                <p className="font-bold">Optimum Yield</p>
                <div>
                  <p className="mt-5 mb-4">
                    Best plant season -
                    <span className="font-bold text-[14px]">Spring</span>
                  </p>
                  <p>
                    Best harvest season -
                    <span className="font-bold text-[14px]">Rainy</span>
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <Button
                  text="Proceed to Plant"
                  btnStyle="px-4 py-2"
                  color="text-white"
                  bgColor="bg-[#225C2B]"
                  padding=""
                />
                <p
                  onClick={() => setIsOpen(false)}
                  className="text-[#DA1E28] font-medium mt-5"
                >
                  Close
                </p>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </section>
  );
};

export default CropPrediction;
