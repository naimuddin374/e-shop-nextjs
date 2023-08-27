import Image from "next/image";
import React from "react";
import BasicSel from "../../assets/img/BasicSel.png";
import IconFic from "../../assets/img/IconFic.png";
import LeyaK from "../../assets/img/LeyaK.png";
import Meta from "../../assets/img/Meta.png";
const Client_logo = () => {
  return (
    <section className="my-[70px]">
      <div className="container mx-auto">
        <div className="grid grid-cols-4 gap-0  ">
          {/* {[...Array(5)].map((item, index) => {
            return (
              <div className="bg-whit border border-bColor w-full h-[140px] flex items-center justify-center">
                <Image src={BasicSel} className="" />
              </div>
            );
          })} */}
          <div className="bg-whit border border-bColor w-full h-[140px] flex items-center justify-center">
            <Image src={BasicSel} className="" />
          </div>
          <div className="bg-whit border border-bColor w-full h-[140px] flex items-center justify-center">
            <Image src={Meta} className="" />
          </div>
          <div className="bg-whit border border-bColor w-full h-[140px] flex items-center justify-center">
            <Image src={IconFic} className="" />
          </div>
          <div className="bg-whit border border-bColor w-full h-[140px] flex items-center justify-center">
            <Image src={LeyaK} className="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Client_logo;
