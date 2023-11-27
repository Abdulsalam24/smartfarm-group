"use client";
import React, { useEffect, useState } from "react";
import { getCookie } from "typescript-cookie";
import { getCropTrackingAction } from "@/stores/prediction/action";
import { getWeatherAction } from "@/stores/weather/action";
import Modal from "@/components/ui/modal";
import CropPrediction from "@/components/ui/crop-predcition";
import { useRouter } from "next/navigation";
import { getProfileAction } from "@/stores/auth/action";

import PlantTracking from "@/features/plant-tracking";
import MobileHomepage from "@/components/mobileHompage";
import DesktopHomepage from "@/components/desktopHomepage";
const HomePage = () => {
  const tracking = false;

  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [plantModal, setPlantModal] = useState(false);
  const [weatherLoading, setWeatherLoading] = useState(true);
  const [cropTracking, setCropTracking] = useState<any>([]);

  const [cropTrackingCheck, setCropTrackingCheck] = useState<any>(false);

  const [trackingLoader, setTrackingLoader] = useState(true);

  const [userInfo, setUserInfo] = useState("");
  const [weather, setWeather] = useState<any>({});

  const handleClose = () => {
    setIsOpen(false);
  };

  const today = new Date();

  const day = today.getDate();
  const month = today.toLocaleString("default", { month: "long" });
  const year = today.getFullYear();

  const suffix = (day: any) => {
    if (day >= 11 && day <= 13) {
      return "th";
    }
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  const todayDate = `${day}${suffix(day)} ${month} ${year}`;

  const temperatureInCelsius = (weather?.main?.temp - 273.15).toFixed(0);

  const location = weather?.sys?.country;

  const description = weather?.weather ? weather?.weather[0]?.description : "";

  useEffect(() => {
    const userDetails = JSON.parse(getCookie("user")!);
    setUserInfo(userDetails);
    const getWeather = async () => {
      const profile = await getProfileAction();
      if (profile.success) {
        const location = profile.data.location;
        const weather = await getWeatherAction(location);

        if (weather.success) {
          setWeather(weather.data);
        }
        setWeatherLoading(false);
      } else {
        return router.push(profile.redirect);
      }
    };
    getWeather();
  }, []);

  useEffect(() => {
    const getTracking = async () => {
      setTrackingLoader(true);
      const cropTracking = await getCropTrackingAction();
      if (cropTracking.success) {
        setCropTracking(cropTracking.data);
      }
      setTrackingLoader(false);
    };
    getTracking();
  }, [cropTrackingCheck]);

  

  console.log(
    cropTrackingCheck,
    trackingLoader,
    "trackingLoadetrackingLoadertrackingLoadertrackingLoaderr"
  );

  return (
    <section className="pb-[70px] md:pb-5 wrapper home-page">
      <MobileHomepage
        setPlantModal={setPlantModal}
        trackingLoader={trackingLoader}
        weatherLoading={weatherLoading}
        tracking={tracking}
        location={location}
        cropTracking={cropTracking}
        setWeather={setWeather}
        weather={weather}
        userInfo={userInfo}
        todayDate={todayDate}
        temperatureInCelsius={temperatureInCelsius}
      />

      <DesktopHomepage
        weatherLoading={weatherLoading}
        location={location}
        temperatureInCelsius={temperatureInCelsius}
        userInfo={userInfo}
        description={description}
        setPlantModal={setPlantModal}
        trackingLoader={trackingLoader}
        todayDate={todayDate}
        tracking={tracking}
        cropTracking={cropTracking}
        setIsOpen={setIsOpen}
      />

      <Modal isOpen={isOpen} onClose={handleClose}>
        <div className="custom-modal">
          <CropPrediction handleClose={handleClose} />
        </div>
      </Modal>

      <PlantTracking
        plantModal={plantModal}
        cropTrackingCheck={cropTrackingCheck}
        setCropTrackingCheck={setCropTrackingCheck}
        handleClose={() => setPlantModal(false)}
        handleOpen={() => setPlantModal(true)}
      />
    </section>
  );
};

export default HomePage;
