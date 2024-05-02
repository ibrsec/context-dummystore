import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";

const SearchInput = ({search,setSearch}) => {
     
  return (
    <form className="border w-4/5 md:w-1/2 lg:w-2/5 mx-auto py-2 px-2 rounded-3xl">
      <BsSearch  className="inline me-3"/>
      <input className=" w-[70%] focus:outline-none" type="text" name="" placeholder="Search here" id=""  value={search} onChange={(e)=>setSearch(e.target.value)}/>
    </form>
  );
};

export default SearchInput;
