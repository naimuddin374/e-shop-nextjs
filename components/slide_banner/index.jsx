import Image from "next/image";
import React from "react";
import Rating from "../../assets/img/rating.png";
import BannerImg from "../../assets/img/slide-mockup.png";
import Button from "../ui/Button";

const SlideBanner = () => {
  return (
    <section className="bg-LightYellow my-5 py-[100px]">
      <div className="container mx-auto relative ">
        <div className="flex flex-row items-center">
          <div className="basis-1/2">
            <p className="text-blue text-[21px] mb-[3px]">
              Hot Deal In This Week
            </p>
            <h2 className="text-[50px] font-medium leading-[60px] opacity-90">
              Intelectial Digital <br /> Computer
            </h2>
            <div className="flex items-center mt-[25px]">
              <Button
                class_name="bg-white text-[25px] w-[184px] opacity-75 h-[64px] rounded-[7px]  hover:bg-blue hover:text-white duration-300"
                type=""
                label="Buy Now"
                onclick={() => console.log("hello")}
              />
              <div className=" ml-[20px]">
                <div className="flex items-center">
                  <Image src={Rating} className="mx-[1px]" />
                  <Image src={Rating} className="mx-[1px]" />
                  <Image src={Rating} className="mx-[1px]" />
                  <Image src={Rating} className="mx-[1px]" />
                  <Image src={Rating} className="mx-[1px]" />
                </div>
                <div className="text-[12px] opacity-90 mt-[5px] text-center opacity-70">
                  100 Reviews
                </div>
              </div>
            </div>
          </div>
          <div className="basis-1/2">
            <Image src={BannerImg} />
          </div>
        </div>
        <div className="w-[152px] h-[152px] bg-blue text-white text-[50px] rounded-full text-center leading-[152px] absolute top-0 right-0">
          $97
        </div>
      </div>
    </section>
  );
};

export default SlideBanner;
