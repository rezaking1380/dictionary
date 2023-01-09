import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useSelector } from "react-redux";
import initState from "../moduls/model";

export default function Example({ examples }: any) {
  const Examples: string[] = examples?.filter((item: any) => item !== undefined);
  const status = useSelector((state: initState) => state.Status);
  const [count, setcount] = useState(5);
  const handelClick = (e: any) => {
    e.preventDefault();
    if (Example.length <= count) {
      setcount(count + 5);
    }
  };
  return (
    <div className="border-2 border-l-8 mx-3 p-5 rounded-lg border-[#264653] mb-4">
      <div className="text-2xl font-semibold mb-2">
        Examples
      </div>
      <ul>
        {status === "success" ? (
          Examples?.slice(0, count).map((example, index) => (
            <div
              key={index}
              className="flex text-gray-600 font-medium text-lg mb-3"
            >
              {example !== undefined ? (
                <>
                  <span className="mr-2">{index + 1}.</span>
                  <li>{example !== undefined && example}</li>
                </>
              ) : (
                <span>Empty</span>
              )}
            </div>
          ))
        ) : (
          <div>
            <Skeleton
              height={30}
              count={6}
              className="mb-2 w-[250px] sm:w-[280px]"
            />
            <Skeleton width={150} height={30} />
          </div>
        )}
      </ul>
      <button
        className="flex mx-auto text-gray-500 font-medium text-lg mt-3"
        onClick={handelClick}
      >
        More
      </button>
    </div>
  );
}
