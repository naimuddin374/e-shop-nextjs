import Image from "next/image";
import React from "react";

const Category_card = ({ item }) => {
  return (
    <div className="py-[20px] cursor-pointer hover:bg-blue hover:text-white ease-in duration-300  bg-white rounded-[7px]">
      <div className=" h-[269px]  p-[15px] flex items-center justify-center overflow-hidden">
        <Image src={item.image} className="" />
      </div>

      <h4 className="text-[30px] font-light text-center pb-[12px]">{item.title}</h4>
    </div>
  );
};

export default Category_card;
