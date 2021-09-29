import React, { useState } from "react";
import Checkbox from "./checkBox";
import SearchInput from "./searchInput";

const SearchingByBrands = () => {
  const [checkedBoxes, setCheckedBoxes] = useState({});
  const handleCheckboxChange: (event: any) => void = (event) => {
    setCheckedBoxes({
      ...checkedBoxes,
      [event.target.name]: event.target.checked,
    });
  };
  return (
    <>
      <SearchInput searchType={"brand"}></SearchInput>
{/*       <Checkbox
        checked={checkedBoxes[]}
        onChange={handleCheckboxChange}
        name={}
      /> */}
    </>
  );
};
export default SearchingByBrands;
