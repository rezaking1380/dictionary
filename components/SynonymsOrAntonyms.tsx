import React from "react";

export default function SynonymsOrAntonyms({ syORan, name }: any) {
  const synORant: string[] = syORan;
  return (
    <div className="flex item-center m-2 flex-wrap">
      <span
        className={
          synORant.length === 0
            ? `hidden`
            : "font-semibold text-lg text-gray-500"
        }
      >
        {name} :
      </span>
      <div className="flex flex-wrap">
        {synORant.map((item, index) => (
          <span
            key={index}
            className="font-normal text-[#33658a] text-lg ml-2 decoration-dashed decoration-[#33658a] underline underline-offset-4"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
