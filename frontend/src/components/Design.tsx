import React from "react";

export const Design = () => {
  return (
    <div className="h-full w-[150px] flex items-center">
      <div className="flex items-center justify-center w-[30px] h-full bg-green-600">
        <div className="w-[15px] h-[15px] bg-white flex items-center justify-center text-black rounded-full"></div>
      </div>

      <div className="text-sm text-black font-bold ml-2">
        Tech-<span>123</span>
      </div>
    </div>
  );
};
