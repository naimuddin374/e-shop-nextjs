import Link from "next/link";
import React, { useState } from "react";

import Horizontal_product_card from "../../components/ui/card/horizontal_product_card";
import Product_card from "../../components/ui/card/product_card";
import ProductImage1 from "../../public/mobile.jpg";
import ProductImage21 from "../../public/mobile1.jpg";
import ProductImage31 from "../../public/radio1.jpg";
import ProductImage41 from "../../public/tv.jpeg";
import Filter from "./filter";
import Grid from "./grid";
import Pagination from "./pagination";


const product1 = [
  {
    id: 1,
    image: ProductImage1,
    title: 'Mobile',
    price: 5,
    disPrice: 8
  },
  {
    id: 2,
    image: ProductImage31,
    title: 'Radio',
    price: 8,
    disPrice: 10
  },
  {
    id: 3,
    image: ProductImage41,
    title: 'Tv',
    price: 6,
    disPrice: 9
  },
  {
    id: 4,
    image: ProductImage21,
    title: 'mobile',
    price: 3,
    disPrice: 6
  },

]

console.log(product1)

const Shop = () => {
  const [state, setState] = useState("line");
  const grid = (gridName) => {
    setState(gridName);
  };
  return (
    <div>
      <section className="bg-blue h-[184px]">
        <div className="container mx-auto py-[48px] ">
          <ul className="text-white flex">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li className="mx-2">/</li>
            <li>
              <Link href="">Shop</Link>
            </li>
          </ul>
        </div>
      </section>
      <section>
        <div className="container mx-auto  ">
          <div class="grid grid-cols-12 gap-7">
            <div class="col-span-3 shadow-xl bg-white relative rounded-[7px]  -top-[50px] p-[30px]">
              <Filter />
            </div>
            <div class="col-span-9  pt-[100px] pb-[30px] px-[30px] relative -top-[20px]">
              <Grid grid={grid} />
              <div className="grid grid-cols-12 gap-7 ">
                {product1.map((item, index) => {
                  return (
                    <>
                      {state == "line" ? (
                        <div className="col-span-4">
                          <Product_card item={item} />
                        </div>
                      ) : (
                        <div className="col-span-12">
                          <Horizontal_product_card item={item} />
                        </div>
                      )}
                    </>
                  );
                })}
              </div>
            </div>
          </div>
          <Pagination />
        </div>
      </section>
    </div>
  );
};

export default Shop;
