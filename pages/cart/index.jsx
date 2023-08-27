import React from "react";
import Link from "next/link";
import LeftCartList from "./leftCartList";
import OrderSummary from "./orderSummary";
const Details_product = () => {
  return (
    <>
      <section className="bg-blue h-[184px]">
        <div className="container mx-auto py-[48px] ">
          <ul className="text-white flex">
            <li>
              <Link href="/">Cart</Link>
            </li>
          </ul>
          <div className="flex">
            <p className="text-white text-[22px] mt-[30px]">Products</p>
            <button className="ml-[200px] w-[150px] h-[35px] bg-white text-blue rounded-[7px]">
              Shopping
            </button>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto relative  -top-[25px] ">
          <div class="grid grid-cols-12 gap-10 ">
            <LeftCartList />
            <OrderSummary />
          </div>
        </div>
      </section>
    </>
  );
};

export default Details_product;
