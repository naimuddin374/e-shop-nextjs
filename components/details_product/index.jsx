import Image from "next/image";
import React from "react";
import DetailImg from "../../assets/img/headPhone.png";
import Love from "../../assets/img/love.png";
import Rating from "../../assets/img/rating.png";
import Share from "../../assets/img/share.png";
import Section_title from "../section_title";
import Button from "../ui/Button";
const Details_product = () => {
  return (
    <>
      <section className="bg-blue h-[184px]">
        <div className="container mx-auto py-[48px] ">
          <span className="text-white">Home / Shop</span>
          <p className="text-white text-[22px] mt-[30px]">
            Flexible WareLess Head Phone
          </p>
        </div>
      </section>
      <section>
        <div className="container mx-auto relative  -top-[25px] ">
          <div class="grid grid-cols-12 bg-white shadow-2xl rounded p-[30px]">
            <div className="col-span-7 ">
              <div className="grid grid-cols-12 ">
                <div className="col-span-2 ">
                  <Image width="80" src={DetailImg} className="my-[15px]" />
                  <Image width="80" src={DetailImg} className="my-[15px]" />
                  <Image width="80" src={DetailImg} className="my-[15px]" />
                  <Image width="80" src={DetailImg} className="my-[15px]" />
                </div>
                <div className="col-span-10  flex items-center justify-center">
                  <Image width="321" src={DetailImg} className="" />
                </div>
              </div>
              <p className="mt-[30px] ">
                {`N.B. Image may differ with actual product's layout, color, size
                & dimension. No claim will be accepted for image mismatch.`}
              </p>
            </div>

            <div className="col-span-5 ">
              <div className="flex items-center justify-between mb-[12px]">
                <div className="flex">
                  <p className="text-[14px] mr-[3px]">Review:</p>
                  <div className="flex items-center">
                    <div className="flex items-center">
                      <Image src={Rating} className="mx-[1px]" />
                      <Image src={Rating} className="mx-[1px]" />
                      <Image src={Rating} className="mx-[1px]" />
                      <Image src={Rating} className="mx-[1px]" />
                      <Image src={Rating} className="mx-[1px]" />
                    </div>
                    <div className="text-[12px] opacity-90 ml-[8px]">(96)</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Image
                    width="17"
                    height="17"
                    src={Share}
                    className="ml-[10px]"
                  />
                  <Image
                    width="17"
                    height="17"
                    src={Love}
                    className="ml-[10px]"
                  />
                </div>
              </div>
              <h4 className="text-[22px] font-semibold mb-[12px]">
                Flexible WareLess Head Phone
              </h4>
              <p className="text-[14px] mb-[12px]">
                <span className=" font-semibold">Product Id:</span>
                <span className=" font-regular"> shiptronics18</span>
              </p>
              <p className="text-[14px] mb-[12px]">
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or
              </p>
              <p className="text-[14px] mb-[12px]">
                <span className=" font-semibold">Brand:</span>
                <span className=" font-regular"> HP</span>
              </p>
              <div className="mb-[25px]">
                <h6 className=" font-semibold text-[14px] mb-[12px]">
                  Quick Overview
                </h6>
                <ul className="text-[12px]">
                  <li>RAM - 16GB</li>
                  <li>Processor Type - Apple M1 Chip</li>
                  <li>Graphics Memory - Shared</li>
                  <li>Display Size (Inch) - 13.3</li>
                </ul>
              </div>
              <div className="price">
                <span className="font-medium text-[20px]">$399</span>
                <span className="mx-[10px]">|</span>
                <span>
                  <del className="font-medium text-[20px]">$399</del>
                  <sup className="ml-[3px]">-20%</sup>
                </span>
              </div>
              <div className="">
                <input
                  className="focus:outline-none bg-LightYellow w-[92px] h-[36px] text-[18px] text-center"
                  type="number"
                  value="2"
                />
                <Button
                  class_name="bg-blue text-white w-[300px] h-[36px] mt-[25px] ml-[20px]"
                  type=""
                  label="Add to Cart"
                  onclick={() => console.log("hello")}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Section_title
        title="Product"
        heading_bold="Related"
        heading_regular="Products"
        cardType="productCard"
      />
    </>
  );
};

export default Details_product;
