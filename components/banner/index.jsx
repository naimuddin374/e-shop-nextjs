import Image from "next/image";
import React from "react";
import BannerImg from "../../assets/img/poster.png";
import Button from "../ui/Button";

const Banner = () => {
  return (
    <section className=" my-5 ">
      <div className="container mx-auto  ">
        <div className="bg-LightYellow py-[40px] px-[40px] flex flex-row items-center">
          <div className="basis-1/2">
            <p className=" text-[12px] mb-[5px] font-light opacity-90">
              Enhance Your Music Experience
            </p>
            <h2 className="text-[50px] font-medium leading-[60px] opacity-90">
              Enhance Your Music <br /> Experience
            </h2>
            <Button
              class_name="bg-blue text-white text-[16px] w-[157px] h-[48px] rounded-[7px]  mt-[50px]"
              type=""
              label="Check it Out"
              onclick={() => console.log("hello")}
            />
          </div>
          <div className="basis-1/2 flex justify-end">
            <Image width="309" height="343" src={BannerImg} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
