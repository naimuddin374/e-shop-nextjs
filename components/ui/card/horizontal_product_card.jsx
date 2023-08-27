import Image from "next/image";
import Link from "next/link";
import React from "react";
import Star from "../../star";
import Button from "../Button";
const Horizontal_product_card = ({ item }) => {
  console.log(item)
  return (
    <Link href="shop/1">
      <div className="cursor-pointer bg-white rounded-[7px] overflow-hidden group/item flex justify-between items-center">
        <div className=" h-[269px] p-[15px] flex items-center justify-center overflow-hidden">
          <Image src={item.image} className="hover:scale-110 duration-300" />
        </div>
        <div className="mx-[20px]">
          <div className="mx-[20px]">
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
            class_name="bg-blue text-white w-full h-[36px] mt-[25px]  relativee top-[90px] group-hover/item:top-[0px] ease-in duration-300"
            type=""
            label="Add to Cart"
            onclick={() => console.log("hello")}
          />
        </div>
      </div>
    </Link>
  );
};

export default Horizontal_product_card;
