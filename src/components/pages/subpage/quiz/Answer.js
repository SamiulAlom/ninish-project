import React from "react";
import Checkbox from "./Checkbox";

export default function Answer({ options = [], handleChange, input }) {
  return (
    <div className="flex justify-start bg-white">
      {options.map((option, index) => (
        <div key={index}>
          {input ? (
            <Checkbox
              key={index}
              className=" bg-white p-3"
              text={option.title}
              value={index}
              checked={option.checked}
              onChange={(e) => handleChange(e, index)}
            />
          ) : (
            <Checkbox
              key={index}
              className={`${"bg-white p-3"} ${
                option.correct
                  ? "text-green-500"
                  : option.checked
                  ? "text-red-500"
                  : null
              } `}
              text={option.title}
              defaultChecked={option.checked}
              disabled
            />
          )}
        </div>
      ))}
    </div>
  );
}
