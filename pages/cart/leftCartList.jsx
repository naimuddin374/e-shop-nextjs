import Image from "next/image";
import React from "react";
import DetailImg from "../../public/images/headPhone.png";

const LeftCartList = () => {
  return (
    <div className="col-span-7 bg-white shadow-md rounded-[7px] p-[30px]">
      {[...Array(2)].map((item, index) => {
        return (
          <div
            key={index}
            className="flex items-center justify-between shadow-md p-[12px] mb-3 rounded-[7px]"
          >
            <div className="flex items-center">
              <Image width="102" src={DetailImg} className="" />
              <div className="ml-[15px]">
                <p className="text-[22px] font-medium opacity-90">
                  Flexible WareLess Head Phone
                </p>
                <p className="text-[17px] ">$399</p>
              </div>
            </div>
            <div className="d">
              <p className="text-[19px] opacity-90">Quantity</p>
              <div className="my-[10px]">
                <input
                  className="rounded-[7px] focus:outline-none bg-LightYellow w-[92px] h-[36px] text-[18px] text-center"
                  type="number"
                  value="2"
                />
              </div>
              <button className="text-red">Remove</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LeftCartList;
