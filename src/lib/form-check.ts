const isFormFilled = (info:  any ) => {
  if (info && typeof info === "object") {
    return !Object.values(info).every((value) => value !== "");
  }

  return false;
};

export default isFormFilled;
