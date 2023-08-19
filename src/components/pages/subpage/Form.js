import React from "react";
// import { Link } from "react-router-dom";

export default function Form() {
  return (
    <div className="form flex justify-center bg-white pt-20 pr-20 pl-20">
      <form to="/catagory" action="/catagory">
        <div className="pb-10">
          <label htmlFor="">নামঃ</label>
          <input
            id="name"
            required
            placeholder="Enter your name"
            type="text"
            class="rounded text-[#000] mt-3 block w-[50vw] p-3"
          />
        </div>
        <div className="pb-10">
          <label htmlFor="">শ্রেণিঃ</label>
          <input
            id="class"
            required
            placeholder="Enter your class"
            type="text"
            class="rounded text-[#000] mt-3 block w-[50vw] p-3"
          />
        </div>
        <div className="pb-10">
          <label htmlFor="">শিক্ষা প্রতিষ্ঠানঃ</label>
          <input
            id="institute"
            required
            placeholder="Enter your institute name"
            type="text"
            class="rounded text-[#000] mt-3 block w-[50vw] p-3"
          />
        </div>
        <div className="pb-10">
          <label htmlFor="">ফোন নম্বরঃ</label>
          <input
            id="phone"
            required
            placeholder="Enter your phone number"
            type="text"
            class="rounded text-[#000] mt-3 block w-[50vw] p-3"
          />
        </div>
        <div className="pb-10">
          <label htmlFor="">
            প্রবেশ পত্রের রেজিষ্ট্রেশন নম্বর টি নিচের ঘরে লিখুন
          </label>
          <input
            id="regNumber"
            required
            placeholder="Enter your registration number"
            type="text"
            class="rounded text-[#000] mt-3 block w-[50vw] p-3"
          />
        </div>
        <div className=" pb-20  pt-10">
          <button
            type="submit"
            value="Submit"
            className="bg-[#3b1468] hover:bg-blue-700 text-white font-bold py-3 px-7 rounded-full"
          >
            পরবর্তী
          </button>
        </div>
      </form>
    </div>
  );
}
