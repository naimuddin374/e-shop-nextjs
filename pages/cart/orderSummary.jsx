import React from "react";
import Button from "../../components/ui/Button";
const OrderSummary = () => {
  return (
    <div className="col-span-5 bg-white shadow-md rounded-[7px]">
      <h4 className="text-[22px] font-medium text-center mt-[25px] opacity-75">
        Order Summary
      </h4>
      <hr className="my-[25px] border-bColor" />
      <div className="px-[30px]">
        <ul>
          <li className="flex items-center justify-between mb-[8px] opacity-70">
            <span>Subtotal (2 items)</span>
            <span>$698</span>
          </li>
          <li className="flex items-center justify-between mb-[8px] opacity-70">
            <span>Shipping fee</span>
            <span>$20</span>
          </li>
        </ul>
        <hr className="my-[25px] border-bColor" />
        <ul className="text-[18px]">
          <li className="flex items-center justify-between opacity-80">
            <span>Total</span>
            <span>$818</span>
          </li>
        </ul>
        <div className="text-center my-[30px]">
          <Button
            class_name="w-[400px] h-[35px] bg-blue text-white rounded-[5px]"
            type=""
            label="Proceed to checkout"
            onclick={() => console.log("hello")}
          />
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
