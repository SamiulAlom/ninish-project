import React from "react";
import { Link } from "react-router-dom";

export default function Form() {
  return (
    <div className="form bg-white pt-20 pr-20 pl-20">
      <div className="pb-10">
        <label htmlFor="">নামঃ</label>
        <input
          id="name"
          required
          placeholder="Enter your name"
          type="text"
          class="rounded text-[#000] mt-3 block w-full"
        />
      </div>
      <div className="pb-10">
        <label htmlFor="">শ্রেণিঃ</label>
        <input
          id="class"
          required
          placeholder="Enter your class"
          type="text"
          class="rounded text-[#000] mt-3 block w-full"
        />
      </div>
      <div className="pb-10">
        <label htmlFor="">শিক্ষা প্রতিষ্ঠানঃ</label>
        <input
          id="institute"
          required
          placeholder="Enter your institute name"
          type="text"
          class="rounded text-[#000] mt-3 block w-full"
        />
      </div>
      <div className="pb-10">
        <label htmlFor="">ফোন নম্বরঃ</label>
        <input
          id="phone"
          required
          placeholder="Enter your phone number"
          type="number"
          class="rounded text-[#000] mt-3 block w-full"
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
          type="number"
          class="rounded text-[#000] mt-3 block w-full"
        />
      </div>
      <div className="flex pb-20 justify-center pt-10">
        <Link
          to="/catagory"
          className="bg-[#3b1468] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          পরবর্তী
        </Link>
      </div>
    </div>
  );
}
