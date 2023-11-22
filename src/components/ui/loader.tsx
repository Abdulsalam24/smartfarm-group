import React from 'react'
import { Oval } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center min-h-screen bg-[#00000066]">
      <Oval
        height={80}
        width={80}
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#4fa94d"
        strokeWidth={4}
        strokeWidthSecondary={4}
      />
    </div>
  );
}

export default Loader