import React from "react";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/input";
const Sing_up = () => {
  return (
    <>
      <section className="bg-blue h-[184px]"></section>
      <section className="mb-[50px] relative  -top-[25px]">
        <div className="container mx-auto  ">
          <div class="grid grid-cols-12 ">
            <div className="col-start-3 col-span-8 shadow-2xl bg-white  rounded px-[100px] py-[30px]">
              <h4 className="text-[25px] font-medium text-center opacity-75">
                Sing up
              </h4>
              <hr className="mt-[25px] mb-[60px] opacity-10" />
              <form>
                <Input type="text" label="User Name Or Email" />
                <Input type="password" label="Password" />
                <p className="text-[14px] font-lingt  pb-[20px]">
                  <span className="opacity-40">
                    Your personal data will be used to support your experience
                    throughout this website, to manage access to your account,
                    and for other purposes described in our
                  </span>
                  <span className="text-blue"> privacy policy</span>.
                </p>

                <Button
                  class_name="font-[21px] w-full h-[45px] bg-blue text-white rounded"
                  type=""
                  label="Sing up"
                  onclick={() => console.log("hello")}
                />
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sing_up;
