import React from "react";
import Input from "../../components/ui/input";
const BillingDetals = () => {
  return (
    <div className="col-span-7 bg-white rounded p-[30px] shadow-md">
      <div className="grid grid-cols-2 gap-10">
        <Input type="text" label="First name" />
        <Input type="text" label="Last name" />
      </div>
      <div className="grid grid-cols-2 gap-10">
        <Input type="number" label="Phone" />
        <Input type="email" label="Email" />
      </div>
      <Input type="text" label="Street address" />
      <Input type="text" label="Note" />
    </div>
  );
};

export default BillingDetals;
