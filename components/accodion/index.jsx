import { useState } from "react";

const Accordion = ({ title }) => {
  const [isShowing, setIsShowing] = useState(false);
  const toggle = () => {
    setIsShowing(!isShowing);
  };

  return (
    <div>
      <div
        onClick={toggle}
        className="text-[16px] font-regular opacity-60 py-[3px]  cursor-pointer hover:bg-blue hover:text-white px-2"
      >
        {title}
      </div>

      {isShowing && (
        <ul className="w-full">
          <li>
            <input
              type="text"
              placeholder="Search"
              className="mb-[8px] mt-[10px] border border-blue w-full h-[32px] rounded-[7px] px-2 focus:outline-none text-[14px]"
            />
          </li>
          {/* {[...Array(5)].map((item, index) => {
            return (
              <li className="font-light text-[14px] my-[3px] py-[3px] pl-[12px] opacity-80 cursor-pointer hover:bg-blue hover:text-white mx-3 ">
                View all
              </li>
            );
          })} */}
          <li className="font-light text-[14px] my-[3px] py-[3px] pl-[12px] opacity-80 cursor-pointer hover:bg-blue hover:text-white mx-3 ">
            View all
          </li>
          <li className="font-light text-[14px] my-[3px] py-[3px] pl-[12px] opacity-80 cursor-pointer hover:bg-blue hover:text-white mx-3">
            Desktop
          </li>
          <li className="font-light text-[14px] my-[3px] py-[3px] pl-[12px] opacity-80 cursor-pointer hover:bg-blue hover:text-white mx-3">
            Leptop
          </li>
          <li className="font-light text-[14px] my-[3px] py-[3px] pl-[12px] opacity-80 cursor-pointer hover:bg-blue hover:text-white mx-3">
            Mother Board
          </li>
          <li className="font-light text-[14px] my-[3px] py-[3px] pl-[12px] opacity-80 cursor-pointer hover:bg-blue hover:text-white mx-3">
            Others
          </li>
        </ul>
      )}
    </div>
  );
};
export default Accordion;
