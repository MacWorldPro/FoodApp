import React, { useContext, useState } from 'react'
import filterContext from '../utils/context/filterContext';
import filteredData from '../utils/Helper/helper'
// import { useEffect } from 'react';
const SearchBox = () => {
  const [searchText,setSearchText]=useState("");
  const {filterData,setFilterData}=useContext(filterContext);
  // const button = useRef(null);
  // const {emptyFilterData,setEmptyFilterData}=useContext(filterContext);
//   const handleKeypress = e => {
//     //it triggers by pressing the enter key
//   if (e.keyCode === 13) {
//     handleSubmit();
//   }
// };
// useEffect(() => {
//   // This effect will only run once, when the component is first mounted.
//   console.log("The button is:", button.current);
// }, [button.current]);
function refreshPage() {
  window.location.reload(false);
}
  return (
<div className="flex flex-col ml-[40px]md:flex-row items-center space-y-4 md:space-y-0 md:items-center md:space-x-4">
  <div className="relative">
    <input
      type="text"
      className="bg-white rounded-lg border-orange-300 border-4 px-4 py-2 md:px-8 md:w-96 active:border-orange-300"
      placeholder="Dosa"
      onChange={(e) => setSearchText(e.target.value)}
      onKeyUp={() => {
        const data = filteredData(searchText, filterData);
        setFilterData(data);
        console.log(typeof(filterData));
      }}
    />
    <button
      className="absolute inset-y-0 right-0 py-2 px-4 bg-orange-400 rounded-lg hover:bg-orange-300 text-white transition-colors duration-300 ease-in-out"
      onClick={refreshPage}
    >
      Reload
    </button>
  </div>
</div>




  )
}

export default SearchBox;