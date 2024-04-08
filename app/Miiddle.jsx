"use Client"

import React from "react";

const Miiddle = () => {
  

  // const [searchTerm, setSearchTerm] = useState('');

  // const handleSearch = (event) => {
  //   event.preventDefault();
  //   const searchTerm = event.target.searchTerm.value.toLowerCase();
  // const filteredData = data.filter((item) =>
  //   item.name.toLowerCase().includes(name)
  // };

  return (
    <div>
      <div className="w-full bg-center bg-cover h-[38rem]">
        <div className="flex items-center justify-center w-full h-2/5 bg-blue-900/40">
          <div className="text-center">
            <h1 className="text-3xl font-semibold text-white lg:text-4xl" />
          <div className="flex items-center">
              <button
        className=" select-none rounded bg-white py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 shadow-md shadow-blue-gray-500/10 transition-all hover:shadow-lg hover:shadow-blue-gray-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        All India
      </button>
         
            <div className="relative h-10 w-full min-w-[500px]">
     
      <form >
        <input
          type="search"
          id="search-input"
          className="peer h-full w-full rounded-[7px] border border-white border-t-transparent bg-transparent px-3 py-2.5 pr-10 font-sans text-sm font-normal !text-white outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-white focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
          placeholder=""
          // value={name}
          // onChange={(e) => setSearchTerm(e.target.value)}
        />
        <label
          htmlFor="search-input"
          className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none!overflow-visible truncate text-[11px] font-normal leading-tight!text-white transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-white before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-white after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-white peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-white peer-disabled:text-transparent peer-disabled:before:border-transparentpeer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
        >
          Type here...
        </label>
      </form>
      <button
        className="absolute right-1 top-1 select-none rounded bg-white py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 shadow-md shadow-blue-gray-500/10 transition-all hover:shadow-lg hover:shadow-blue-gray-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="submit"
      >
        Search
      </button>
    </div>
            </div>
          </div>
          
        </div>
        <div>
          <img
            src="https://i0.wp.com/corporate.indiamart.com/wp-content/uploads/2021/09/corporate-banner-sep-21.jpg?fit=980%2C344&ssl=1"
            className="justify-center items-center w-full"
            alt=""
          />
        </div>
            </div>
       
       </div>
      
  );
};
export default Miiddle;
