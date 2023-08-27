import React from "react";

const OrderComplete = () => {
  return (
    <>
      <section className="bg-blue h-[184px]"></section>
      <section className="mb-[50px] relative  -top-[25px]">
        <div className="container mx-auto  ">
          <div className="bg-white rounded-[7px]">
            <h4 className="text-[32px] opacity-80 pt-[60px] text-center">
              Thank you. Your order has been received.
            </h4>
            <div class="grid grid-cols-12 gap-7  p-[100px]">
              <div className="col-span-4 bg-lightWhite border rounded-[7px] border-bColor ">
                <div className=" opacity-60 py-[12px] text-center">
                  Order number: 1979
                </div>
              </div>
              <div className="col-span-4 bg-lightWhite border rounded-[7px] border-bColor ">
                <div className=" opacity-60 py-[12px] text-center">
                  Date: Oct 10, 22
                </div>
              </div>
              <div className="col-span-4 bg-lightWhite border rounded-[7px] border-bColor ">
                <div className=" opacity-60 py-[12px] text-center">
                  Total: $123.00
                </div>
              </div>
              <div className="col-span-6 bg-lightWhite border rounded-[7px] border-bColor ">
                <div className=" opacity-60 py-[12px] text-center">
                  Email: mo@gmail.com
                </div>
              </div>
              <div className="col-span-6 bg-lightWhite border rounded-[7px] border-bColor ">
                <div className=" opacity-60 py-[12px] text-center">
                  Payment method: Stripe
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OrderComplete;
