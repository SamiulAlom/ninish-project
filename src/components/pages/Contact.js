import React from "react";
import img from "../../images/fb.png";

export default function Contact() {
  return (
    <div className="min-[600px]:h-[73vh] bg-white justify-center flex">
      <div className="pb-10 bg-white  ">
        <div className="pt-20 container">
          <h1 className="text-2xl text-center font-bold">
            Click The Facebook Icon to Join Us
          </h1>
          <span className="flex pt-10 justify-center">
            <a href="https://www.facebook.com/NINISHBANGLADESH/">
              <img
                style={{ height: "100px", width: "100px" }}
                src={img}
                alt=""
              />
            </a>
          </span>
        </div>
        <div className="pt-20 container">
          <h1 className="text-2xl text-center font-bold">Our Phone Number</h1>
          <span className="flex pt-7 justify-center">
            <h2 className="text-1xl text-center font-300">+০১৭৯৩০০০৮৭৩</h2>
          </span>
        </div>
        <div className="pt-20 container">
          <h1 className="text-2xl text-center font-bold">Send Us Email</h1>
          <span className="flex pt-7 justify-center">
            <h2 className="text-1xl text-center font-300">info@ninish.com</h2>
          </span>
        </div>
      </div>
    </div>
  );
}
