import React from "react";
import Image from "next/image";
import Rating from "../../public/rating.png";
const Star = () => {
  return (
    <div className="flex items-center">
      <div className="flex items-center">
        {[...Array(5)].map((item, index) => {
          return <Image src={Rating} className="mx-[2px]" />;
        })}
      </div>
      <div className="text-[12px] opacity-70 ml-[8px]">(96)</div>
    </div>
  );
};

export default Star;
