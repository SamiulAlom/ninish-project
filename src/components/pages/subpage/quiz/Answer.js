import React from "react";
import Checkbox from "./Checkbox";

export default function Answer() {
  return (
    <div className="flex justify-start bg-white">
      <div>
        <Checkbox className={" bg-white p-3 "} />
      </div>
    </div>
  );
}
