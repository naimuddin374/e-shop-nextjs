import React from "react";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/input";
const Sing_in = () => {
  return (
    <>
      <section className="bg-blue h-[184px]"></section>
      <section className="mb-[50px] relative  -top-[25px]">
        <div className="container mx-auto ">
          <div class="grid grid-cols-12 ">
            <div className="col-start-3 col-span-8 shadow-2xl bg-white  rounded px-[100px] py-[30px]">
              <h4 className="text-[25px] font-medium text-center opacity-75">
                Sing in
              </h4>
              <hr className="mt-[25px] mb-[60px] opacity-10" />
              <form>
                <Input type="text" label="User Name Or Email" />
                <Input type="password" label="Password" />

                <div className="flex items-center justify-between mt-[20px] mb-[30px]">
                  <div>
                    <input type="checkbox" />
                    <label
                      htmlFor=""
                      className="text-[16px] font-lingt opacity-70 ml-[8px]"
                    >
                      Remember Me
                    </label>
                  </div>
                  <p className="text-[16px] font-lingt opacity-70">
                    Forgotten password?
                  </p>
                </div>

                <Button
                  class_name="rounded font-[21px] w-full h-[45px] bg-blue text-white"
                  type=""
                  label="Sing in"
                  onclick={() => console.log("hello")}
                />
                <p className="text-center font-[21px] mt-[25px] mb-[10px]">
                  Don't have an account?
                </p>

                <Button
                  class_name="rounded font-[21px] w-full h-[45px] bg-white border border-bColor hover:bg-blue hover:text-white"
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

export default Sing_in;
