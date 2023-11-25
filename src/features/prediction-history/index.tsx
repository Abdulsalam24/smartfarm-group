"use client";
import Modal from "@/components/ui/modal";
import Image from "next/image";
import React, { useState } from "react";
import backIcon from "../../assets/icons/back-icon.svg";
import { useRouter } from "next/navigation";
import successIcon from "../../assets/icons/success-icon.svg";
import failedIcon from "../../assets/icons/failed-icon.svg";
import Button from "@/components/ui/Button";

const PredictionHistory = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    // setLoading(true);
    setIsOpen(true);
  };

  const active = "";

  const historyCheck = {
    isDfault: true,
    predict: true,
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
    <section className="history relative px-6 pt-5 pb-40 md:px-0">
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
        {history.map((item, i) => (
          <div
            key={i}
            className="pb-3 flex border border-x-0 border-t-0 justify-between items-end"
          >
            <div>
              <span>{item.date}</span> <br />
              <span className="mt-4">{item.prediction}</span>
            </div>
            <span
              className="text-[#35BF4A] cursor-pointer"
              onClick={() => setIsOpen(true)}
            >
              View result
            </span>
          </div>
        ))}
      </div>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div
          className="custom-modal"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="w-full max-w-[90%] md:min-w-[400px]  p-6 mx-auto bg-white rounded-md dark:bg-dark-primary">
            <div className="flex flex-col items-center">
              {historyCheck.isDfault ? (
                <>
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
                        Specific plant date -{" "}
                        <span className="font-bold text-[14px]">
                          21st November 2023
                        </span>
                      </p>
                      <p>
                        Specific harvest date -{" "}
                        <span className="font-bold text-[14px]">
                          21st November 2023
                        </span>
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="items-center">
                    <Image src={failedIcon} alt="failedIcon" />
                    <h3 className="text-[18px]  mt-2 mb-[13px]">
                      Prediction Result
                    </h3>
                    <p className="text-[#6F6F6F]">
                      This is not the best season to plant rice!
                    </p>
                  </div>
                  <div className="mt-[43px] mr-auto mb-[65px] pl-[14px]">
                    <p className="font-bold">Best crops to plant this season</p>
                    <div>
                      <p className="mt-5 mb-4">
                        <span className="mr-1 text-xl">·</span> KidneyBeans
                      </p>
                      <p>
                        <span className="mr-1 text-xl">·</span> KidneyBeans
                      </p>
                    </div>
                  </div>
                </>
              )}

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

export default PredictionHistory;
