import React from "react";

const OrderList = () => {
  return (
    <div className="col-span-9 bg-white rounded-[7px] p-[40px]">
      <table class="border-collapse border border-bColor w-full">
        <thead>
          <tr>
            <th class="border border-bColor py-2 px-2 text-[18px] ">Order</th>
            <th class="border border-bColor py-2 px-2 text-[18px] ">Date</th>
            <th class="border border-bColor py-2 px-2 text-[18px] ">Status</th>
            <th class="border border-bColor py-2 px-2 text-[18px] ">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-bColor py-2 px-2 text-[18px] font-light">
              #1244
            </td>
            <td class="border border-bColor py-2 px-2 text-[18px] font-light">
              Oct 10 22
            </td>
            <td class="border border-bColor py-2 px-2 text-[18px] font-light">
              <span className="bg-red text-white px-1 ">Pandding</span>
            </td>
            <td class="border border-bColor py-2 px-2 text-[18px] font-light">
              $152.00 for 1 item
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrderList;
