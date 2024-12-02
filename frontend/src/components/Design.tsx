import React from "react";

export const Design = () => {
  return (
    <div className="h-full w-[100px] flex flex-row items-center justify-start ">
      {/* Green container with white box */}
      <div className="flex items-center justify-center w-[30px] h-full bg-green-600">
        <div className="w-[15px] h-[15px] bg-white flex items-center justify-center text-black rounded"></div>
      </div>
      {/* Text element */}
      <div className="text-sm text-black font-medium ml-[5px]">tech</div>
    </div>
  );
};
