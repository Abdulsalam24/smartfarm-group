"use client";
import Modal from "@/components/ui/modal";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import backIcon from "../../assets/icons/back-icon.svg";
import { useRouter } from "next/navigation";
import successIcon from "../../assets/icons/success-icon.svg";
import failedIcon from "../../assets/icons/failed-icon.svg";
import Button from "@/components/ui/Button";
import { getPredictionAction } from "@/stores/prediction/action";
import Loader from "@/components/ui/loader";

const PredictionHistory = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const [loading, setLoading] = useState(true);

  const [predictions, setPredictions] = useState([]);
  const [singlePrediction, setSinglePrediction] = useState<any>({});

  useEffect(() => {
    const getPredictionAndWeather = async () => {
      const predictions = await getPredictionAction();
      if (predictions.success) {
        setPredictions(predictions.data);
      }
    };
    getPredictionAndWeather();
    setLoading(false);
  }, []);

  const historyCheck = {
    isDfault: true,
    predict: true,
  };

  console.log(singlePrediction, "singlePrediction");

  const handleOpenPrediction = (id: number) => {
    const filteredPrediction = predictions.filter(
      (item: any) => item.id === id
    );
    setSinglePrediction(filteredPrediction[0]);
    setIsOpen(true);
  };

  return (
    <section className="history relative px-6 pt-5 pb-40 md:px-0 md:p-0">
      <div
        className="mb-5 md:hidden w-fit"
        onClick={() => router.push("/homepage")}
      >
        <Image src={backIcon} alt="backIcon" />
      </div>
      <div className="text-center md:hidden">
        <h3 className="text-[18px] mb-[5px]">Precise Farming</h3>
      </div>
      <div className="flex flex-col gap-8 mt-[41px] mb-[64px]">
        {loading ? (
          <Loader />
        ) : (
          predictions?.map((item: any, i: number) => (
            <div
              key={i}
              className="pb-3 flex border border-x-0 border-t-0 justify-between items-end"
            >
              <div>
                <span>21 , jan 20023</span> <br />
                <span className="mt-4">{item.prediction}</span>
              </div>
              <span
                className="text-[#35BF4A] whitespace-nowrap cursor-pointer"
                onClick={() => handleOpenPrediction(item.id)}
              >
                View result
              </span>
            </div>
          ))
        )}
      </div>

      {/* 
      <div className="text-center mt-40 self-center ">
        <Image src={emptyNote} alt="emptyNote" />
        <p>No history on prediction</p>
      </div> */}

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div
          className="custom-modal"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="w-full max-w-[90%] md:max-w-[400px] py-6 px-5 mx-auto bg-white rounded-md">
            <div className="flex flex-col items-center">
              <div className="flex flex-col items-center">
                <Image src={successIcon} alt="successIcon" />
                <h3 className="text-[18px]  mt-2 mb-[13px]">
                  Prediction Result
                </h3>
                <p className="text-[#6F6F6F]">
                  This is the best season to plant {singlePrediction?.crop}!
                </p>
              </div>
              <div className="mt-[43px] mb-[65px]">
                <p className="font-bold">Optimum Yield</p>
                <div>
                  <p className="mt-5 mb-4">{singlePrediction?.prediction}</p>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <Button
                  text={
                    historyCheck.predict
                      ? "Download Result"
                      : "Proceed to Plant"
                  }
                  btnStyle="px-4 py-2"
                  color="text-white"
                  bgColor="bg-[#225C2B]"
                  padding=""
                />
                <p
                  onClick={() => setIsOpen(false)}
                  className="text-[#DA1E28] cursor-pointer font-medium mt-5"
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

export default PredictionHistory;
