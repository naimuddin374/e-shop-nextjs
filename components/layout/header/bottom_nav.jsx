import Link from "next/link";
import React from "react";
const Bottom_nav = () => {
  return (
    <section className="container mx-auto">
      <div className="flex itemx-center ml-[50px]">
        {/* <div className="flex items-center cursor-pointer">
          <Image
            src={List}
            alt="list"
            width={23}
            height={23}
            className="mr-[8px]"
          />
          <p>Departments</p>
          <Image
            src={ArrowDown}
            alt="arrow down"
            width={10}
            height={10}
            className="ml-[8px]"
          />
        </div>
        <span className="ml-[50px] mr-[30px] text-[25px] opacity-25 font-light">
          |
        </span> */}

        <ul className="flex items-center">
          <li>
            <Link className=" px-[10px] mx-[10px] py-[5px] text-blue" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className=" px-[10px] mx-[10px] py-[5px]" href="/shop">
              Shop
            </Link>
          </li>
          {/* <li>
            <Link className=" px-[10px] mx-[10px] py-[5px]" href="/about">
              About
            </Link>
          </li>
          <li>
            <Link className=" px-[10px] mx-[10px] py-[5px]" href="/account">
              Account
            </Link>
          </li> */}
          {/* <li>
            <Link className=" px-[10px] mx-[10px] py-[5px]" href="/contact">
              Contact
            </Link>
          </li> */}
          <li>
            <Link className=" px-[10px] mx-[10px] py-[5px]" href="/singin">
              Singin
            </Link>
          </li>
          <li>
            <Link className=" px-[10px] mx-[10px] py-[5px]" href="/singup">
              Singup
            </Link>
          </li>
          <li>
            <Link className=" px-[10px] mx-[10px] py-[5px]" href="/checkout">
              Checkout
            </Link>
          </li>
          <li>
            <Link className=" px-[10px] mx-[10px] py-[5px]" href="/cart">
              Cart
            </Link>
          </li>
          <li>
            <Link
              className=" px-[10px] mx-[10px] py-[5px]"
              href="/user/profile"
            >
              User Profile
            </Link>
          </li>
          <li>
            <Link
              className=" px-[10px] mx-[10px] py-[5px]"
              href="/orderComplete"
            >
              Order Complete
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Bottom_nav;
