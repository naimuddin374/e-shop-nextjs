import React from "react";

const Pagination = () => {
  return (
    <div className="grid grid-cols-12 gap-7 mb-[50px]">
      <div className="col-span-9 col-start-4 px-[30px]">
        <div className="border-t border-bColor my-[50px] flex justify-between pt-3">
          <button className="text-22 opacity-80">Prev</button>
          <ul className="flex">
            <li className="mx-2 px-1 cursor-pointer">1</li>
            <li className="mx-2 px-1 cursor-pointer">2</li>
            <li className="mx-2 px-1 cursor-pointer  bg-blue text-white">3</li>
            <li className="mx-2 px-1 cursor-pointer">4</li>
            <li className="mx-2 px-1 cursor-pointer">5</li>
          </ul>
          <button className="text-22 opacity-80">Next</button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
