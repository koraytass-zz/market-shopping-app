import { useState } from "react";

const FilterItems = (props: any) => {
    const [searchInput, setSearchInput] = useState<string>('');
    const handleSearchChange = (event: any) => {
      let filteredBrands: string[] = [];
      if(props.allBrands){
        props.allBrands.forEach((brand: any) => {
        if(brand.includes(event.target.value)){
          filteredBrands.push(brand);
        }
      });
    }
      setSearchInput(event.target.value);
      props.setBrands(filteredBrands);
    }
  
    return (
      <input key="search-input" type="text" placeholder={`Search brand`} onChange={(event) => handleSearchChange(event)} value={searchInput}/>
    );
  };

  export default FilterItems