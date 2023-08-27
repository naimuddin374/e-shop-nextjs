import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Love from "../../assets/img/love.png";
import Share from "../../assets/img/share.png";
import DisplayView from "../../components/display_view";
import Star from "../../components/star";
import Button from "../../components/ui/Button";

import { useRouter } from "next/router";
import ProductImage1 from "../../assets/img/mobile.jpg";
import ProductImage21 from "../../assets/img/mobile1.jpg";
import ProductImage31 from "../../assets/img/radio1.jpg";
import ProductImage41 from "../../assets/img/tv.jpeg";

const product1 = [
  {
    id: 1,
    image: ProductImage1,
    title: "Mobile",
    price: 5,
    disPrice: 8,
  },
  {
    id: 2,
    image: ProductImage31,
    title: "Radio",
    price: 8,
    disPrice: 10,
  },
  {
    id: 3,
    image: ProductImage41,
    title: "Tv",
    price: 6,
    disPrice: 9,
  },
  {
    id: 4,
    image: ProductImage21,
    title: "mobile",
    price: 3,
    disPrice: 6,
  },
];

const Details = () => {
  const params = useRouter();
  const [filterItem, setFilterItem] = useState(product1[0]);

  useEffect(() => {
    const selectedItem = product1.filter(
      (item) => item.id == params.query.slug
    );
    if (selectedItem) {
      setFilterItem(selectedItem);
    }
  }, [params.query.slug]);

  return (
    <div>
      {/* Breadcrumb Start */}
      <section className="bg-blue h-[184px]">
        <div className="container mx-auto py-[48px] ">
          <ul className="text-white flex">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li className="mx-2">/</li>
            <li>
              <Link href="/">Details</Link>
            </li>
          </ul>
          <p className="text-white text-[22px] mt-[30px]">
            Flexible WareLess Head Phone
          </p>
        </div>
      </section>
      {/* Breadcrumb End */}

      <section className="container mx-auto relative  -top-[25px] ">
        <div class="grid grid-cols-12 bg-white shadow-2xl rounded p-[30px]">
          {/* Left side start*/}
          <div className="col-span-7 ">
            <div className="grid grid-cols-12 ">
              {/* <div className="col-span-2 shadow-md rounded-[7px] flex flex-col items-center">
                {productColor.map((item, index) => {
                  return (
                    <div className="borde my-3">
                      <Image
                        width="80"
                        src={item.photo}
                        className="cursor-pointer"
                        onClick={() => imageClick(item.photo)}
                      />
                    </div>
                  );
                })}
              </div> */}
              <div className="col-span-10  flex items-center justify-center">
                <Image
                  width="321"
                  src={filterItem[0]?.image ?? ""}
                  className=""
                  alt="Product"
                />
              </div>
            </div>
            <p className="mt-[30px] opacity-70 text-[11px]">
              N.B. Image may differ with actual product layout, color, size &
              dimension. No claim will be accepted for image mismatch.
            </p>
          </div>
          {/* Left side end*/}
          {/* right side start*/}

          <div className="col-span-5 ">
            <div className="flex items-center justify-between mb-[12px]">
              <div className="flex">
                <p className="text-[14px] mr-[3px] opacity-75">Review:</p>

                <Star />
              </div>
              <div className="flex items-center">
                <Image
                  width="17"
                  height="17"
                  src={Share}
                  className="ml-[10px]"
                  alt="related1"
                />
                <Image
                  width="17"
                  height="17"
                  src={Love}
                  className="ml-[10px]"
                  alt="related2"
                />
              </div>
            </div>
            <h4 className="text-[22px] font-semibold mb-[12px] opacity-90">
              Flexible WareLess Head Phone
            </h4>
            <p className="text-[14px] mb-[12px] opacity-90">
              <span className=" font-semibold">Product Id:</span>
              <span className=" font-regular"> shiptronics18</span>
            </p>
            <p className="text-[14px] mb-[12px] opacity-90">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
            </p>
            <p className="text-[14px] mb-[12px]">
              <span className=" font-semibold">Brand:</span>
              <span className=" font-regular opacity-90"> HP</span>
            </p>
            <div className="mb-[25px]">
              <h6 className=" font-semibold text-[14px] mb-[12px] opacity-90">
                Quick Overview
              </h6>
              <ul className="text-[12px] opacity-90 list-outside ">
                {/* {[...Array(4)].map((item, index) => {
                    return (
                      <div className="borde my-3">
                        <li>RAM - 16GB</li>
                      </div>
                    );
                  })} */}
                <li>RAM - 16GB</li>
                <li>Processor Type - Apple M1 Chip</li>
                <li>Graphics Memory - Shared</li>
                <li>Display Size (Inch) - 13.3</li>
              </ul>
            </div>
            <div className="price">
              <span className="font-medium text-[20px]">
                ${filterItem[0]?.price}
              </span>
              <span className="mx-[10px]">|</span>
              <span>
                <del className="font-medium text-[20px] opacity-75">
                  ${filterItem[0]?.disPrice}
                </del>
              </span>
            </div>
            <div className="">
              <input
                className="focus:outline-none bg-LightYellow w-[92px] h-[36px] text-[18px] text-center"
                type="number"
                value="2"
              />
              <Button
                class_name="bg-blue rounded-[7px] text-white w-[277px] h-[36px] mt-[40px] ml-[20px]"
                type=""
                label="Add to Cart"
                onclick={() => console.log("hello")}
              />
            </div>
          </div>
          {/* right side end*/}
        </div>
      </section>

      {/* Related product card start*/}

      <section className="container mx-auto">
        <DisplayView
          titleh="Products"
          heading_boldh="Related"
          heading_regularh="Products"
          cardType="productCard"
          datas=""
        />
      </section>
      {/* Related product card end*/}
    </div>
  );
};

export default Details;
