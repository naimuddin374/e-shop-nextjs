import Image from "next/image";
import React from "react";
import GridViewLine from "../../public/images/view-line.png";
import GridViewList from "../../public/images/view-list.png";
const Grid = ({ grid }) => {
  return (
    <div className="shadow-xl border border-bColor rounded-[7px] px-[20px] py-[10px] mb-[50px]">
      <div className="flex justify-between items-center">
        <div className="text-[15px] opacity-70">
          <span>1</span>
          <span>/</span>
          <span>4</span>
        </div>
        <div className="flex items-center">
          <span className="text-[10px] opacity-80">Sort by:</span>
          <button className="text-[11px] opacity-60 ml-1">Hight to Low</button>
          <div className="flex items-center">
            <span className="text-[10px] opacity-80 mr-1 ml-2">View:</span>
            <Image
              width="15"
              height="15"
              className="m-[5px] cursor-pointer"
              src={GridViewLine}
              onClick={() => grid("line")}
              alt="settings"
            />
            <Image
              width="15"
              height="15"
              className="m-[5px] cursor-pointer"
              src={GridViewList}
              onClick={() => grid("list")}
              alt="settings"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid;
