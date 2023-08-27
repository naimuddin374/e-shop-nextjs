import Image from "next/image";
import Link from "next/link";
import Button from "../../ui/Button";

const Top_nav = () => {
  return (
    <section className="container mx-auto">
      <div className="flex items-center justify-between mb-[20px]">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={188}
            height={35}
            className=""
          />
        </Link>
        <div className="flex items-center border rounded-[7px] overflow-hidden border-blue w-[700px] bg-white">
          <Image
            src="/images/search.png"
            alt="search icon"
            width={23}
            height={23}
            className="mx-[8px]"
          />
          <input
            type="text"
            placeholder="Search"
            className="w-full focus:outline-none text-[19px]  h-[53px]"
          />
          <Button
            class_name="bg-blue text-white w-[180px] h-[53px] text-[19px]"
            type=""
            label="Search"
            onclick={() => console.log("hello")}
          />
        </div>
        <div className="flex items-center">
          <Image
            src="/images/user.png"
            alt="User icon"
            width={24}
            height={24}
            className="mx-[15px]  cursor-pointer"
          />
          <Image
            src="/images/love.png"
            alt="Love icon"
            width={24}
            height={24}
            className="mx-[15px]  cursor-pointer"
          />
          <div className="relative">
            <Image
              src="/images/cart.png"
              alt="Cart"
              width={24}
              height={24}
              className="mx-[15px]  cursor-pointer"
            />
            <div className="absolute text-center right-0 -top-3 bg-blue w-[15px] h-[15px] rounded-full  text-[10px] text-white">
              10
            </div>
            {/* <AddToCart /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Top_nav;
