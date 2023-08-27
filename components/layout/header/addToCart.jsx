import Image from "next/image";
import DetailImg from "../../../assets/img/headPhone.png";
import Button from "../../ui/Button";
const AddToCart = () => {
  return (
    <div className="z-40 absolute right-0 top-10 bg-white shadow-xl w-[366px]  rounded-[7px] px-[30px] py-[30px] ">
      <div className="flex items-center mb-[8px]">
        <div className="text-red  font-[18px] w-[18px] h-[18px] cursor-pointer border border-red rounded-full">
          <span className="text-center block leading-[15px]"> x</span>
        </div>
        <Image width="62" src={DetailImg} className="mx-3" />
        <div className="">
          <p className="text-[15px] opacity-90">Flexible WareLess Head Phone</p>
          <p className="text-[13px] font-light text-blue">
            <span>$399</span>
            <span className="mx-1 text-[20px]">x</span>
            <span>2</span>
          </p>
        </div>
      </div>
      <div className="flex items-center mb-[8px]">
        <div className="text-red  font-[18px] w-[18px] h-[18px] cursor-pointer border border-red rounded-full">
          <span className="text-center block leading-[15px]"> x</span>
        </div>
        <Image width="62" src={DetailImg} className="mx-3" />
        <div className="">
          <p className="text-[15px] opacity-90">Flexible WareLess Head Phone</p>
          <p className="text-[13px] font-light text-blue">
            <span>$399</span>
            <span className="mx-1 text-[20px]">x</span>
            <span>2</span>
          </p>
        </div>
      </div>
      <div className="flex justify-between my-[20px]">
        <p className="text-[16px] opacity-60">Subtotal: $123.00</p>
        <button className="border px-2 py-1 text-[13px]">Expand Cart</button>
      </div>
      <div className="text-center">
        <Button
          class_name="bg-blue text-white w-[121px] h-[26px] text-[12px] rounded-[7px]"
          type=""
          label="checkout"
          onclick="onclick"
        />
      </div>
    </div>
  );
};

export default AddToCart;
