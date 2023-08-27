import Image from "next/image";
import React from "react";
import DetailImg from "../../assets/img/headPhone.png";
import Button from "../../components/ui/Button";
const YourOrder = () => {
  return (
    <div className="col-span-5 bg-white shadow-md rounded">
      <h4 className="text-[22px] font-medium text-center mt-[25px] opacity-75">
        Your order
      </h4>
      <hr className="my-[25px] border-bColor" />
      <div className="flex items-center px-[30px]">
        <Image width="76" src={DetailImg} className="" alt="product" />
        <div className="ml-[15px]">
          <p className="text-[19px] opacity-90">Flexible WareLess Head Phone</p>
          <p className="text-[17px] font-light text-blue">
            <span>$399</span>
            <span className="mx-1 text-[20px]">x</span>
            <span>2</span>
          </p>
        </div>
      </div>
      <hr className="my-[25px] border-bColor" />
      <div className="px-[30px]">
        <ul className="text-[18px]">
          <li className="flex items-center justify-between opacity-70">
            <span>Subtotal (2 items)</span>
            <span>$698</span>
          </li>
        </ul>
        <h4 className="text-[22px] font-medium text-center mt-[25px] opacity-75">
          Shipping
        </h4>
        <ul>
          <li className="mb-[8px]">
            <input id="" className="mr-[15px]" type="radio" name="Shipping" />
            <label for="draft" className="opacity-70">
              Shipping Free
            </label>
          </li>
          <li className="mb-[8px]">
            <input
              id=""
              className="mr-[15px]"
              type="radio"
              name="Shipping"
              checked
            />
            <label for="" className="opacity-70">
              Shipping Fee $20
            </label>
          </li>
        </ul>
      </div>
      <hr className="my-[25px] border-bColor" />
      <div className="px-[30px]">
        <ul className="text-[18px]">
          <li className="flex items-center justify-between opacity-80">
            <span>Total</span>
            <span>$818</span>
          </li>
        </ul>
        <h4 className="text-[22px] font-medium text-center mt-[25px] opacity-75">
          Payment
        </h4>
        <ul>
          <li className="mb-[8px]">
            <input id="" className="mr-[15px]" type="radio" name="Payment" />
            <label for="draft" className="opacity-70">
              Bkash
            </label>
          </li>
          <li className="mb-[8px]">
            <input
              id=""
              className="mr-[15px]"
              type="radio"
              name="Payment"
              checked
            />
            <label for="" className="opacity-70">
              Stripe
            </label>
          </li>
        </ul>
        <div className="text-center my-[30px]">
          <Button
            class_name="w-[400px] h-[35px] bg-blue text-white rounded-[7px]"
            type=""
            label="Place Order"
            onclick={() => console.log("hello")}
          />
        </div>
      </div>
    </div>
  );
};

export default YourOrder;
