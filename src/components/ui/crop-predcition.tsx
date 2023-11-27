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
import closeIcon from "../../assets/img/x-mark.svg";

import Button from "@/components/ui/Button";
import { getYieldPredictionAction } from "@/stores/prediction/action";
import { useRecoilState } from "recoil";
import { predictionCheck } from "@/stores/prediction/atom";

const CropPrediction = ({ handleClose }: any) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const [predictionHistoryCheck, setPredictionHistoryCheck] =
    useRecoilState(predictionCheck);

  const [loading, setLoading] = useState(false);

  const [predictionResult, setPredictionResult] = useState(false);

  const [prediction, setPrediction] = useState<any>({});

  // const handleSubmit = () => {
  //   // setLoading(true);
  //   setIsOpen(true);
  // };

  const [predictionData, setPredictionData] = useState({
    ph: "",
    location: "",
    label: "",
    water_availability: "",
  });

  // cropTrackingAction

  const onChange = (e: any) => {
    const { name, value } = e.target;
    setPredictionData({
      ...predictionData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    setLoading(true);
    e.preventDefault();
    const res = await getYieldPredictionAction(predictionData);
    if (res.success) {
      setPredictionHistoryCheck(!predictionHistoryCheck);
      setPrediction(res.data);
      setPredictionResult(true);
      setLoading(false);
    } else {
      router.push(res.redirect);
    }
    setLoading(false);
  };

  return (
    <section
      className={`relative bg-white pt-5 py-8  mx-auto rounded-md md:rounded-[20px] ${
        predictionResult ? "max-w-[400px] px-[40px]" : "max-w-[605px] px-[50px]"
      } w-full`}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <div
        className="mb-5 w-fit cursor-pointer md:ml-auto"
        onClick={() => router.push("/homepage")}
      >
        <Image className="md:hidden" src={backIcon} alt="backIcon" />
        <Image
          className="hidden md:block cursor-pointer"
          onClick={handleClose}
          src={closeIcon}
          alt="backIcon"
        />
      </div>
      {predictionResult ? (
        <div className="w-full flex flex-col items-center">
          <div className="flex flex-col items-center">
            <Image src={successIcon} alt="successIcon" />
            <h3 className="text-[18px]  mt-2 mb-[13px]">Prediction Result</h3>
            <p className="text-[#6F6F6F]">
              This is the best season to plant {prediction?.crop}!
            </p>
          </div>
          <div className="mt-[43px] mb-[65px]">
            <p className="font-bold">Optimum Yield</p>
            <div>
              <p className="mt-5 mb-4">{prediction?.prediction}</p>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <Button
              text="Save for harvest"
              btnStyle="px-4 py-2"
              color="text-white"
              bgColor="bg-[#225C2B]"
              padding=""
              loading={loading}
              onClick={() => {
                handleClose();
              }}
            />
            <p
              onClick={handleClose}
              className="text-[#DA1E28] cursor-pointer font-medium mt-5"
            >
              Close
            </p>
          </div>
        </div>
      ) : (
        <>
          <div className="text-center">
            <h3 className="text-[18px] mb-[5px] md:text-[20px]">
              Precise Farming
            </h3>
            <h5 className="text-[#525252]">
              Input data to get information on precise farming
            </h5>
          </div>
          <div className="flex flex-col gap-8 mt-[41px] mb-[30px]">
            <TextInput
              onChange={onChange}
              label="Crop Type"
              placeholder="Rice"
              type="select"
              name="label"
              options={[
                "rice",
                "maize",
                "chickpea",
                "kidneybeans",
                "pigeonpeas",
                "mothbeans",
                "mungbean",
                "blackgram",
                "lentil",
                "watemelon",
                "muskmelon",
                "cotton",
                "jute",
              ]}
            />

            <TextInput
              onChange={onChange}
              label="Location"
              placeholder="Nigeria"
              type="select"
              name="location"
              options={["Nigeria", "South Africa", "Kenya", "Sudan"]}
            />

            <TextInput
              onChange={onChange}
              label="Soil PH"
              placeholder="6.5029999999"
              type="text"
              name="ph"
            />
            <TextInput
              onChange={onChange}
              label="Water availability"
              placeholder="202.5029999999"
              type="text"
              name="water_availability"
            />
          </div>

          <Link href="/crop-prediction" className="block text-center">
            <Button
              loading={loading}
              padding="p-[15.5px]"
              rounded="rounded-[18px]"
              color="text-white"
              bgColor="bg-green-100"
              btnStyle="w-full"
              onClick={handleSubmit}
              text=" Analyze Data"
              info={predictionData}
            />
          </Link>
        </>
      )}
    </section>
  );
};

export default CropPrediction;
