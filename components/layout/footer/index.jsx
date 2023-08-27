import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../../../assets/img/logo.png";
import Button from "../../ui/Button";
const Footer = () => {
  return (
    <footer className="bg-LightYellow py-[100px]">
      <div className="container mx-auto">
        <div class="grid grid-cols-4 gap-12">
          <div className="">
            <Link href="/">
              <Image
                src={Logo}
                alt="logo"
                width={220}
                height={40}
                className=""
              />
            </Link>
            <p className="text-[18px] opacity-60 font-light mt-[12px]">
              Elegant pink origami design three dimensional view and decoration
              co-exist. Great for adding a decorative touch to any room’s decor.
            </p>
          </div>
          <div className="ml-[80px]">
            <span className="text-[20px] text-blue font-semibold">
              Information
            </span>
            <ul className="mt-[12px] opacity-60">
              <li className="mb-[8px]">
                <Link href="/custom-service">Custom Service</Link>
              </li>
              <li className="mb-[8px]">
                <Link href="/faqs">FAQs</Link>
              </li>
              <li className="mb-[8px]">
                <Link href="/ordering-tracking">Ordering Tracking</Link>
              </li>
              <li className="mb-[8px]">
                <Link href="/contact">Contact</Link>
              </li>
              <li className="mb-[8px]">
                <Link href="/events">Events</Link>
              </li>
            </ul>
          </div>
          <div className="ml-[40px]">
            <span className="text-[20px] text-blue font-semibold">
              My Account
            </span>
            <ul className="mt-[12px] opacity-60">
              <li className="mb-[8px]">
                <Link href="/"> Delivery Information</Link>
              </li>
              <li className="mb-[8px]">
                <Link href="/">Privacy Policy</Link>
              </li>
              <li className="mb-[8px]">
                <Link href="/">Discount</Link>
              </li>
              <li className="mb-[8px]">
                <Link href="/">Custom Service</Link>
              </li>
              <li className="mb-[8px]">
                <Link href="/">Terms & Condition</Link>
              </li>
            </ul>
          </div>
          <div className="">
            <span className="text-[20px] text-blue font-semibold">
              Get Newsletter
            </span>
            <p className="text-[18px] opacity-60 font-light mt-[12px]">
              Get on the list and get 10% off your first order!
            </p>
            <div className="mt-[12px]">
              <input
                type="text"
                name=""
                id=""
                placeholder="You Email"
                className="w-full bg-white border-sm px-[8px] py-[8px] mb-[10px]"
              />
              <Button
                class_name="bg-blue text-white w-full h-[35px] "
                type=""
                label="Subscrie Now"
                onclick={() => console.log("hello")}
              />
            </div>
          </div>
        </div>
        <div className="mt-[30px]  text-[18px]">
          Copyright 2022 ©Ninja. All rights reserved. Powered by Ninja.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
