import React from "react";
import successIcon from "../../../assets/icons/success-icon.svg";
import failedIcon from "../../../assets/icons/failed-icon.svg";

import Image from "next/image";
import Button from "../Button";

const Modal = ({ isOpen, onClose }: any) => {
  const active = "";

  const history = {
    isDfault: true,
    predict: true,
  };

  return (
    <>
      {isOpen && (
        <div className="modal" onClick={onClose}>
          <div
            className="flex flex-col items-center p-[38px] custom-modal"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            {history.isDfault ? (
              <>
                <div className="items-center">
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

            <div className="items-center">
              <Button
                text={history.predict ? "Download Result" : "Proceed to Plant"}
                btnStyle="px-4 py-2"
                color="text-white"
                bgColor="bg-[#225C2B]"
                padding=""
              />
              <p onClick={onClose} className="text-[#DA1E28] font-medium mt-5">
                Close
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
