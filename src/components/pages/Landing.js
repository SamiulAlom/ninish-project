import React from "react";
import Banner from "./subpage/Banner";
import Ninis from "./subpage/Ninis";
import Photo from "./subpage/Photo";
import Work from "./subpage/Work";

export default function Landing() {
  return (
    <div className="max-sm:p-5 bg-white" style={{ fontFamily: "Tiro Bangla" }}>
      <Banner />
      <Photo />
      <Ninis />
      <Work />
    </div>
  );
}
