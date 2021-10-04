import React, { useEffect, useState } from "react";
import Checkbox from "./checkBox";
import styled from "styled-components";
import { getBrands } from "../utils/dbManagement";
const Input = styled.input`
line-height: 24px;
color: #a8a8a8;
text-indent: 14px;
width: 98%;
height: 48px;
background: #ffffff !important;
border: 2px solid #e0e0e0;

`;
const Container = styled.div`
height: 214px;
width: 296px;
`;
let allBrands: string[] = [];
const SearchingByBrands = () => {
  const [brands, setBrands] = useState<string[]>();
  const [checkedBoxes, setCheckedBoxes] = useState<{ [key: string]: boolean }>(
    {}
  );
  const [searchInput, setSearchInput] = useState<string>("");
  const handleCheckboxChange: (event: any) => void = (event) => {
    setCheckedBoxes({
      ...checkedBoxes,
      [event.target.name]: event.target.checked,
    });
  };

  useEffect(() => {
    const getTagsWrapper = async () => {
      let dbBrands: string[] = await getBrands();
      allBrands = dbBrands;
      setBrands(allBrands);
    };
    getTagsWrapper();
  }, []);
  const TagContainer = styled.div`
    overflow: auto;
    height: 142px;
    width: 100%;
  `;
  const FilterArea = styled.div`
    background-color: white;
  `;

  const handleSearchChange = (event: any) => {
    let filteredBrands: string[] = [];
    if (allBrands) {
      allBrands.forEach((brand) => {
        if (brand.toLowerCase().includes(event.target.value.toLowerCase())) {
          filteredBrands.push(brand);
        }
      });
    }
    setSearchInput(event.target.value);
    setBrands(filteredBrands);
  };

  return (
    <>
      <Container>
      <span>Brands</span>
        <FilterArea>
          <Input
            autoFocus
            key="search-input"
            type="text"
            placeholder={`Search brand`}
            onChange={(event) => handleSearchChange(event)}
            value={searchInput}
          />
          <TagContainer>
            {brands &&
              brands.map((brandName: string) => {
                return (
                  <Checkbox
                    name={brandName}
                    checked={checkedBoxes[brandName]}
                    onChange={handleCheckboxChange}
                  />
                );
              })}
          </TagContainer>
        </FilterArea>
      </Container>
    </>
  );
};
export default SearchingByBrands;
