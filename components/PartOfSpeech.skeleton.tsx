import React from "react";
import Skeleton from "react-loading-skeleton";

export default function PartOfSpeechSkeleton() {
  return (
    <>
      <div className="border-2 mt-6 p-5 rounded-lg border-l-8 border-[#50C9E7]">
        <div>
          <div className="text-2xl font-semibold border-b-2 pb-3">
            {<Skeleton height={30} width={100} />}
          </div>
        </div>
        <div className="divide-y">
            <div className=" py-3">
              <Skeleton height={30} />
              <Skeleton height={30} width={180} />
            </div>
            <div className="py-3">
              <Skeleton height={30} />
              <Skeleton height={30} width={180} />
            </div>
            <div className="py-3">
              <Skeleton height={30} />
              <Skeleton height={30} width={180} />
            </div>
            <div className="py-3">
              <Skeleton height={30} />
              <Skeleton height={30} width={180} />
            </div>
        </div>
      </div>
    </>
  );
}
