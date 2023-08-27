import React from "react";

const Input = ({ type, label }) => {
  return (
    <div className="mb-[20px]">
      <label htmlFor="" className="opacity-60 pb-[8px] block">
        {label}
      </label>
      <input
        type={type}
        className="w-full h-[60px] focus:outline-none border border-bColor rounded-[7px] px-[8px] py-[8px] text-[18px] border-blue-100"
      />
    </div>
  );
};

export default Input;
