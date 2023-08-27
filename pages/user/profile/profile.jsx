import Image from "next/image";
import React from "react";
import Users from "../../../assets/img/users.png";
const Profile = () => {
  return (
    <div className="col-span-3 bg-white rounded-[7px] p-[20px]">
      <div className="border border-bColor bg-white rounded ">
        <div className="flex items-center mx-[40px] my-[30px]">
          <div className="w-[70px] h-[70px] rounded-full overflow-hidden flex items-center justify-center border-double border-bColor outline outline-offset-2 outline-1">
            <Image width="70" src={Users} />
          </div>
          <div className="ml-[15px]">
            <p className="font-medium opacity-90">Jhon Smith</p>
            <p className="text-[11px] font-lingt opacity-60">smith@gmail.com</p>
          </div>
        </div>
        <hr className="pb-[50px] border-bColor" />
        <hr className="border-bColor" />
        <ul className="divide-y opacity-75">
          <li className="text-[18px] font-light kborder-b border-bColor py-[15px] px-[15px]">
            Dashboard
          </li>
          <li className="text-[18px] font-light kborder-b py-[15px] border-bColor px-[15px] bg-blue text-white">
            Order History
          </li>
          <li className="text-[18px] font-light kborder-b py-[15px] border-bColor px-[15px]">
            Order Tracking
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
