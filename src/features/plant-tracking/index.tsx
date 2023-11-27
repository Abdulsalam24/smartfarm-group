"use client";

import Modal from "@/components/ui/modal";
import backIcon from "../../assets/icons/back-icon.svg";
import { useRouter } from "next/navigation";
import successIcon from "../../assets/icons/success-icon.svg";
import failedIcon from "../../assets/icons/failed-icon.svg";
import Button from "@/components/ui/Button";
import {
  cropTrackingAction,
  getPredictionAction,
} from "@/stores/prediction/action";
import Loader from "@/components/ui/loader";
import emptyNote from "../../assets/icons/emptyState.svg";
import TextInput from "@/components/ui/text-input";
import { useState } from "react";
import Link from "next/link";

const PlantTracking = ({
  handleClose,
  plantModal,
  setCropTrackingCheck,
}: any) => {
  const [loading, setLoading] = useState(false);

  const [plantTracking, setPlantTracking] = useState({
    crop: "",
    plantedSzn: "spring",
    harvestSzn: "",
  });

  const onChange = (e: any) => {
    const { name, value } = e.target;
    setPlantTracking({
      ...plantTracking,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    setLoading(true);
    e.preventDefault();
    const res = await cropTrackingAction(plantTracking);
    if (res.success) {
      setLoading(false);
      handleClose();
      setCropTrackingCheck((prev: any) => !prev);
    }
    setLoading(false);
  };

  return (
    <Modal isOpen={plantModal} onClose={handleClose}>
      <div
        className="custom-modal"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="w-full max-w-[90%] md:max-w-[600px] py-6 md:py-10 md:px-10 px-5 mx-auto bg-white rounded-2xl">
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
              label="Crop"
              placeholder="Rice"
              type="select"
              name="crop"
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
              label="plant Season"
              placeholder="spring"
              type="select"
              name="plantedSzn"
              value="spring"
              options={["spring"]}
            />

            <TextInput
              onChange={onChange}
              label="Harvest Season"
              placeholder="Harvest Season"
              type="select"
              name="harvestSzn"
              options={["spring", "summer", "autumn", "winter"]}
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
              text="track"
              info={plantTracking}
            />
          </Link>
        </div>
      </div>
    </Modal>
  );
};

export default PlantTracking;
