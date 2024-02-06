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
    <div className="items-center m-auto ml-[450px] mb-5">
    <input
      type="text"
      className="bg-white rounded-lg border-orange-300 border-4 px-40 py-2 active:border-orange-300"
      placeholder="Dosa"
      onChange={(e)=>setSearchText(e.target.value)}
      // onkeypre={() => {
      //   const data = filteredData(searchText, filterData);
      //   setFilterData(data);
      //   // setSearchText("");
        
  
      // }}
      onKeyUp={() => {
        const data = filteredData(searchText, filterData);
        setFilterData(data);
        // setSearchText("");
        console.log(typeof(filterData));
        
  
      }}
    />
    <button  className="p-3 bg-orange-400 rounded-lg hover:bg-orange-300"
    onClick={refreshPage}

    >Reload</button>
  </div>

  )
}

export default SearchBox;