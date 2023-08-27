import React from "react";
import Star from "../../components/star";
import Accordion from "../../components/accodion";
const Filter = () => {
  return (
    <ul>
      <li className="mb-[10px]">
        <h3 className=" text-[19px] font-medium opacity-75 mb-[10px]">
          Categorys
        </h3>

        <ul className="w-full">
          <li className="mb-5px">
            <Accordion title="Computer" />
          </li>
          <li className="mb-5px">
            <Accordion title="Mobile" />
          </li>
          <li className="mb-5px">
            <Accordion title="Head Phone" />
          </li>
          <li className="mb-5px">
            <Accordion title="Speaker" />
          </li>
          <li className="mb-5px">
            <Accordion title="Mouse" />
          </li>
          <li className="mb-5px">
            <Accordion title="Key Board" />
          </li>
        </ul>
      </li>
      <li className="mb-[10px]">
        <h3 className="text-[19px] font-medium opacity-75 mb-[10px]">Price</h3>
        <input type="range" className="w-full" />
      </li>
      <li className="mb-[10px]">
        <h3 className="text-[19px] font-medium opacity-75 mb-[10px]">Size</h3>
        <ul>
          <li className="mb-[8px]">
            <input id="" className="mr-[15px]" type="checkbox" name="size" />
            <label for="draft" className="opacity-70">
              Xtra Large
            </label>
          </li>
          <li className="mb-[8px]">
            <input id="" className="mr-[15px]" type="checkbox" name="size" />
            <label for="" className="opacity-70">
              Large
            </label>
          </li>
          <li className="mb-[8px]">
            <input id="" className="mr-[15px]" type="checkbox" name="size" />
            <label for="" className="opacity-70">
              Small
            </label>
          </li>
          <li className="mb-[8px]">
            <input id="" className="mr-[15px]" type="checkbox" name="size" />
            <label for="" className="opacity-70">
              Xtra Small
            </label>
          </li>
        </ul>
      </li>
      <li className="mb-[10px]">
        <h3 className="text-[19px] font-medium opacity-75 mb-[10px]">Brand</h3>
        <ul>
          <li className="mb-[8px]">
            <input id="" className="mr-[15px]" type="checkbox" name="brand" />
            <label for="draft" className="opacity-70">
              Apple
            </label>
          </li>
          <li className="mb-[8px]">
            <input id="" className="mr-[15px]" type="checkbox" name="brand" />
            <label for="" className="opacity-70">
              Sumsang
            </label>
          </li>
          <li className="mb-[8px]">
            <input id="" className="mr-[15px]" type="checkbox" name="brand" />
            <label for="" className="opacity-70">
              Realme
            </label>
          </li>
          <li className="mb-[8px]">
            <input id="" className="mr-[15px]" type="checkbox" name="brand" />
            <label for="" className="opacity-70">
              Nokia
            </label>
          </li>
        </ul>
      </li>
      <li className="mb-[10px]">
        <h3 className="text-[19px] font-medium opacity-75 mb-[10px]">Rating</h3>
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </li>
      <li className="mb-[10px]">
        <h3 className="text-[19px] font-medium opacity-75 mb-[10px]">
          Color Family
        </h3>
        <ul>
          <li className="mb-[8px]">
            <input
              id=""
              className="mr-[15px]"
              type="checkbox"
              name="colorFamily"
            />
            <label for="draft" className="opacity-70">
              Red
            </label>
          </li>
          <li className="mb-[8px]">
            <input
              id=""
              className="mr-[15px]"
              type="checkbox"
              name="colorFamily"
            />
            <label for="" className="opacity-70">
              Yellow
            </label>
          </li>
          <li className="mb-[8px]">
            <input
              id=""
              className="mr-[15px]"
              type="checkbox"
              name="colorFamily"
            />
            <label for="" className="opacity-70">
              Blue
            </label>
          </li>
          <li className="mb-[8px]">
            <input
              id=""
              className="mr-[15px]"
              type="checkbox"
              name="colorFamily"
            />
            <label for="" className="opacity-70">
              White
            </label>
          </li>{" "}
          <li className="mb-[8px]">
            <input
              id=""
              className="mr-[15px]"
              type="checkbox"
              name="colorFamily"
            />
            <label for="" className="opacity-70">
              Black
            </label>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default Filter;
