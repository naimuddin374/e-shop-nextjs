import React from "react";
import Image from "next/image";
import BasicSel from "../../public/BasicSel.png";
import Meta from "../../public/Meta.png";
import IconFic from "../../public/IconFic.png";
import LeyaK from "../../public/LeyaK.png";
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
