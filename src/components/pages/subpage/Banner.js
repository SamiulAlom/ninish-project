import React from "react";
import { Link } from "react-router-dom";
import image from "../../../images/banner.jpg";
import image2 from "../../../images/footerLogo2.png";
export default function Banner() {
  return (
    <div>
      {/* click here section */}
      <div
        style={{ height: "530px", paddingBottom: "10px" }}
        className="bg-[#fff] max-sm:h-[550px] pt-5 w-50 justify-center flex"
      >
        <div className="bg-gradient-to-tr container from-purple-900 to bg-green-900 h-full relative rounded-[15px]">
          <Link to="/mujib-olympiad">
            <img
              src={image}
              alt="banner"
              className="w-full h-full object-cover absolute mix-blend-overlay opacity-25"
            />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <div className="text-center">
                <h3 className="max-sm:pt-10 mt-5 max-sm:text-2xl text-4xl text-white font-bold">
                  মুজিব অলিম্পিয়াড ২০২৩ - গাজীপুর পর্ব
                </h3>
                <span className="flex justify-center">
                  <img
                    style={{
                      height: "200px",
                      width: "200px",
                    }}
                    src={image2}
                    alt=""
                  />
                </span>
                <h1 className="text-[25px] max-sm:text-[19px] p-5 text-white font-bold">
                  মুজিব অলিম্পিয়াড ২০২৩ - গাজীপুর পর্বে অংশগ্রহণ করতে
                </h1>

                <button className="bg-[#3b1468] hover:bg-blue-700 text-white text-[18px] mb-5 font-bold py-3 px-6 rounded-full">
                  এখানে ক্লিক করুন
                </button>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
