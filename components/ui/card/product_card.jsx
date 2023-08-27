import Image from "next/image";
import Link from "next/link";
import React from "react";
import Star from "../../star";
import Button from "../../ui/Button";
const Product_card = ({ item }) => {
  return (
    <Link href={`shop/${item.id}`} state={item}>
      <div className="cursor-pointer  w-[289pxa] bg-white rounded-[7px] overflow-hidden group/item">
        <div className="w-[289pxa] h-[269px] p-[15px] flex items-center justify-center overflow-hidden">
          <Image src={item.image} className="hover:scale-110 duration-300" />
        </div>
        <div className="mt-[10px] mx-[20px]">
          <p className="text-[14px] opacity-50 mb-[12px]">Head Phone</p>
          <h4 className="text-[18px] opacity-90 mb-[20px]">
            {item.title}
          </h4>
          <div className="flex mt-[8px]">
            <div className="text-[15px] mr-[48px] font-medium opacity-90">
              ${item.price}.00
            </div>
            <del className="text-[15px] opacity-40 mr-[20px] font-medium">
              ${item.disPrice}.00
            </del>
            <Star />
          </div>
        </div>
        <Button
          class_name="bg-blue text-white w-full h-[36px] mt-[25px]  relative top-[32px] group-hover/item:top-[0px] ease-in duration-300"
          type=""
          label="Add to Cart"
          onclick={() => console.log("hello")}
        />
      </div>
    </Link>
  );
};

export default Product_card;
