import React from "react";
import { Link } from "react-router-dom";
import image from "../../../images/banner.jpg";
import image2 from "../../../images/footerLogo2.png";
export default function Banner() {
  return (
    <div>
      {/* click here section */}
      <div
        style={{ height: "480px", paddingBottom: "10px" }}
        className="bg-[#fff] w-50"
      >
        <div className="bg-gradient-to-tr from-purple-900 to bg-green-900 h-full relative">
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
                <h3 className="max-[600px]:pt-10 text-4xl text-white font-bold">
                  মুজিব অলিম্পিয়াড ২০২৩ - গাজীপুর পর্ব
                </h3>
                <span className="flex justify-center">
                  <img
                    style={{
                      height: "250px",
                      width: "250px",
                    }}
                    src={image2}
                    alt=""
                  />
                </span>
                <h1 className="text-1xl p-5 text-white font-bold">
                  মুজিব অলিম্পিয়াড ২০২৩ - গাজীপুর পর্বে অংশগ্রহণ করতে
                </h1>

                <Link
                  to="/mujib-olympiad"
                  className="bg-[#3b1468] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                >
                  এখানে ক্লিক করুন
                </Link>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
