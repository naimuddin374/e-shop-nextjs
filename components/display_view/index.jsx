import React from "react";
import Category_card from "../../components/ui/card/category_card";
import Product_card from "../../components/ui/card/product_card";
import Section_title from "../section_title";

const DisplayView = ({
  datas,
  cardType,
  titleh,
  heading_boldh,
  heading_regularh,
}) => {
  return (
    <section className="my-[70px]">
      <div className="container mx-auto">
        <Section_title
          title={titleh}
          heading_bold={heading_boldh}
          heading_regular={heading_regularh}
        />

        <div class="grid grid-cols-4 gap-8">
          {datas && datas.map((item, index) => {
            return cardType == "productCard" ? (
              <Product_card item={item} />
            ) : (
              <Category_card item={item} />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DisplayView;
