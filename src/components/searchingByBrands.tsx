import React, { useEffect, useState } from "react";
import Checkbox from "./checkBox";
import SearchInput from "./searchInput";
import styled from "styled-components";
import { getBrands } from "../utils/dbManagement";

const SearchingByBrands = () => {
  const [brands, setBrands] = useState<string[]>();
  const [checkedBoxes, setCheckedBoxes] = useState<{ [key: string]: boolean }>(
    {}
  );
  const handleCheckboxChange: (event: any) => void = (event) => {
    setCheckedBoxes({
      ...checkedBoxes,
      [event.target.name]: event.target.checked,
    });
  };

  useEffect(() => {
    const getTagsWrapper = async () => {
      let dbBrands: string[] = await getBrands();
      setBrands(dbBrands);
    };
    getTagsWrapper();
  }, []);

  const Container = styled.div`
    height: 214px;
    width: 100%;
  `;
  const TagContainer = styled.div`
    overflow: auto;
    height: 142px;
    width: 214px;
  `;
  const FilterArea = styled.div`
    background-color: white;
  `;
  return (
    <>
      <Container>
        <span>Brands</span>
        <FilterArea>
          <SearchInput searchType={"brand"}></SearchInput>
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
