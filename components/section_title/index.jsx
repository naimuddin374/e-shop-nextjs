import React from "react";

const Section_title = ({ title, heading_bold, heading_regular }) => {
  return (
    <div className="mb-[30px]">
      <p className="font-lingt text-[16px] text-blue mb-[3px]">{title}</p>
      <h3 className="text-[30px] ">
        <span className="font-regular">{heading_bold} </span>
        <span className="font-light">{heading_regular}</span>
      </h3>
    </div>
  );
};

export default Section_title;
