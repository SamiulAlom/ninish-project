import React from "react";
import Banner from "./subpage/Banner";
import Photo from "./subpage/Photo";
import Ninis from "./subpage/Ninis";
import Work from "./subpage/Work";

export default function Landing() {
  return (
    <div style={{ fontFamily: "Tiro Bangla" }}>
      <Banner />
      <Photo />
      <Ninis />
      <Work />
    </div>
  );
}
