import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Example from "../components/Example";
import Loading from "../components/Loading";
import PartOfSpeech from "../components/PartOfSpeech";
import initState from "../moduls/model";
import { FcSpeaker } from "react-icons/fc";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Word() {
  const details = useSelector((state: initState) => state.Word);
  const status = useSelector((state: initState) => state.Status);
  const [word, setWord] = useState(details[0]);
  if (details.length == 0) <Loading />;
  const handelAudio = (e: any) => {
    e.preventDefault();
    const audio = new Audio(word?.phonetics[0].audio);
    audio.play();
  };
  let examples: string[] = [];
  let partOfSpeech: never[] = [];
  let allExample: any = [];
  details.forEach((item) => {
    item.meanings?.forEach(
      (i) => (allExample = i.definitions.concat(i.definitions))
    );
    item.meanings?.forEach((i) => partOfSpeech.push(i));
  });
  examples = allExample.map((item: any) => item.example);
  useEffect(() => {
    setWord(details[0]);
  }, [details]);

  return (
    <div className="max-w-screen-lg mx-auto mt-6 flex flex-wrap items-start sm:flex-nowrap">
      <div className="sm:w-8/12 w-full mx-3">
        <div className="border-[#E76F51] border-l-8 flex items-center rounded-md justify-between ring-2 ring-[#E76F51]">
          <div className="my-4 mx-5 flex flex-col">
            <div className="flex items-center">
              <h1 className="mb-3 font-bold text-3xl items-start">
                {status === "success" ? (
                  word?.word?.toLocaleUpperCase()
                ) : (
                  <Skeleton width={100} height={30} />
                )}
              </h1>

              <button onClick={handelAudio}>
                <FcSpeaker className="ml-3 text-3xl" />
              </button>
            </div>
            <span className="font-semibold text-xl">
              {status === "success" ? (
                word?.phonetic
              ) : (
                <Skeleton width={100} height={30} />
              )}
            </span>
          </div>
          <div className="max-w-[50px] mr-4">
            <img src="/assets/img/united-kingdom.png" alt="united-kingdom" />
          </div>
        </div>
        <div>
          {status === "success" &&
            partOfSpeech.map((item, index) => (
              <PartOfSpeech key={index} meanings={item} />
            ))}
        </div>
      </div>
      <div className="sm:w-4/12 w-full mt-5 sm:m-0">
        <Example examples={examples} />
      </div>
    </div>
  );
}

export default Word;
