import React, { FC, useState } from "react";
import initState, { meanings } from "../moduls/model";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import SynonymsOrAntonyms from "./SynonymsOrAntonyms";
import { useSelector } from "react-redux";

export default function PartOfSpeech(meanings: any) {
  const meaning: meanings = meanings.meanings;
  const status = useSelector((status:initState) => status.Status)
  return (
    <div className="border-2 mt-6 p-5 rounded-lg border-l-8 border-[#50C9E7] mb-2">
      <div>
        <div className="text-2xl font-semibold border-b-2 pb-3">
          {meaning.partOfSpeech}
        </div>
      </div>
      <div className="divide-y py-3">
        {meaning.definitions.map((item, index) => (
          <div key={index} className="py-2">
            <div className="text-lg font-semibold text-gray-800 flex">
              <span className="mr-2">{index + 1}.</span>
              {item.definition}
            </div>
            <div className="pl-3">
              <SynonymsOrAntonyms syORan={item.synonyms} name={"synonyms"} />
              <SynonymsOrAntonyms syORan={item.antonyms} name={"antonyms"} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
