import React from "react";
import Link from "next/link";
import BillingDetals from "./billingDetals";
import YourOrder from "./yourOrder";
const Checkout = () => {
  return (
    <>
      <section className="bg-blue h-[184px]">
        <div className="container mx-auto py-[48px] ">
          <ul className="text-white flex">
            <li>
              <Link href="/">Checkout</Link>
            </li>
          </ul>
          <div className="flex">
            <p className="text-white text-[22px] mt-[30px]">Billing Details</p>
            <button className="ml-[200px] w-[150px] h-[35px] bg-white text-blue rounded-[7px]">
              Shopping
            </button>
          </div>
        </div>
      </section>
      <section className="mb-[50px] relative  -top-[25px]">
        <div className="container mx-auto  ">
          <div class="grid grid-cols-12 gap-10   rounded ">
            <BillingDetals />
            <YourOrder />
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;
