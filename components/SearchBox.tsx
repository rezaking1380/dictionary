import axios from "axios";
import { useRouter } from "next/router";
import React, { FC, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Actions } from "../moduls/Action.model";
import initState from "../moduls/model";
import { action } from "../pages/api/Store";
import WordService from "../Service/Word";
import Loading from "./Loading";



export default function SearchBox() {
  const Router = useRouter();
  const dispatcher = useDispatch();
  const [value, setValue] = useState("");
  const status = useSelector((state: initState) => state.Status);
  const suggestions = (e: any) => setValue(e.target.value);
  const sentWord = (e: any) => {
    e.preventDefault();
    dispatcher(Actions.get(value));
    Router.push("/word");
    setValue("");
  };
  return (
    <div
      className={` flex flex-col max-w-screen-sm m-auto h-full justify-center`}
      id="searchbox"
    >
      <div className="flex justify-center items-center flex-col mb-8">
        <img src='/assets/img/Eng (2).png' className="mb-4 md:mb-8 w-[90px] md:w-[200px]"/>
        <h1 className="font-bold text-3xl md:text-5xl">English Dictionary</h1>
      </div>
      
      <div
        className="relative flex items-center p-0 transition-all duration-300 border-[0.35rem]
    border-[#E76F51] ring-4 ring-[#6248B1]/10 rounded-3xl mx-3  shadow-none"
      >
        <img src="/assets/img/united-kingdom (1).png" alt="united-kingdom" className="w-16 ml-2" />
        <input
          type="text"
          placeholder="Enter Word"
          className="flex overflow-hidden focus:outline-none placeholder:text-gray-200 placeholder:uppercase py-4 md:py-7 w-[90%]
            rounded-3xl pl-3 md:pl-4 font-quicksand-bold text-lg md:text-2xl"
          onChange={suggestions}
          value={value}
        />
        {status === "loading" ? (
          <Loading />
        ) : (
          <button onClick={sentWord} className='pr-2'>
            <FaSearch className=" text-3xl md:text-4xl text-gray-500 m-2" />
          </button>
        )}

        <div className="flex justify-center items-center h-[100%] absolute top-0 right-0 mr-2"></div>
      </div>
    </div>
  );
}
