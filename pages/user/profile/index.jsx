import Image from "next/image";
import React from "react";

import Link from "next/link";
import Profile from "./profile";
import OrderList from "./orderList";
const UserProfile = () => {
  return (
    <div>
      <section className="bg-blue h-[184px]">
        <div className="container mx-auto py-[48px] ">
          <ul className="text-white flex">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li className="mx-2">/</li>
            <li>
              <Link href="/">Account</Link>
            </li>
          </ul>
        </div>
      </section>
      <section className="mb-[50px] relative  -top-[25px]">
        <div className="container mx-auto">
          <div class="grid grid-cols-12 gap-10">
            <Profile />
            <OrderList />
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserProfile;
