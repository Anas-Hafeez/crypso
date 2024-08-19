import React, { useEffect, useState } from "react";
import Cards from "../components/Cards"
import { BsGraphUpArrow } from "react-icons/bs";
import { BsGraphDownArrow } from "react-icons/bs";

const Home=()=>{
    return(
        
        <div className="py-20 px-20 flex ">
            <div className="bg-black text-[100px] border-[5px] border-black shadow-black  w-[200px] rounded-[15px] font-bold py-0 text-white">My <BsGraphUpArrow className="px-2 text-green-600" /></div>
            <div className=" text-[130px] border-[5px] border-black shadow-black     rounded-[100px]  font-bold  p-4 items-center   bg-gradient-to-r from-red-700 to-green-800">Crypto</div>
            <div className="bg-black text-[150px] border-[5px] border-black shadow-black     rounded-[280px]  font-bold p-4  text-white ">Tracker</div>
        </div>
    )
  

    
};
export default Home;