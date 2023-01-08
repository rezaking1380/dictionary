import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Example from "../components/Example";
import Loading from "../components/Loading";
import PartOfSpeech from "../components/PartOfSpeech";
import initState, { meanings } from "../moduls/model";
import { FcSpeaker } from "react-icons/fc";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import SearchBox from "../components/SearchBox";

function Word() {
  const details = useSelector((state: initState) => state.Word);
  const status = useSelector((state: initState) => state.Status);
  const [word, setWord] = useState(details[0]);
  if (details.length == 0) <Loading />;
  if (word == undefined) <Loading />
    let wordAudio: string | undefined
    let wordPhonetic
    word?.phonetics.forEach((item) => {
      wordPhonetic = item.text;
      wordAudio = item.audio
    })
  const handelAudio = (e: any) => {
    e.preventDefault();
    const audio = new Audio(wordAudio);
    audio.play();
  };
  let examples: string[] = [];
  let partOfSpeech:meanings[] = [];
  let allExample: any = [];
  let a
  details.forEach((item) => {
    item.meanings?.forEach(
      
      (i) => {
        a = i.definitions.concat(i.definitions)
        allExample = a.map((e) => e.definition)

      }
    );
    item.meanings?.forEach((i) => partOfSpeech.push(i));
  });
        examples = allExample.concat(allExample)
  useEffect(() => {
    setWord(details[0]);
  }, [details]);
  return (
    <div>
      <div className="mt-5">
       <SearchBox /> 
      </div>
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
                wordPhonetic
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
          {partOfSpeech.map((item, index) => (
              <PartOfSpeech key={index} meanings={item} />
            ))}
        </div>
      </div>
      <div className="sm:w-4/12 w-full mt-5 sm:m-0">
        <Example examples={examples} />
      </div>
    </div>
    </div>
  );
}

export default Word;
