import React, { useEffect, useState } from "react";
import Checkbox from "./checkBox";
import styled from "styled-components";
import { getBrands } from "../utils/dbManagement";
import { useDispatch } from "react-redux";
import { filterByBrand } from "../redux/actions";
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
const TagContainer = styled.div`
  overflow: auto;
  height: 142px;
  width: 100%;
`;
const FilterArea = styled.div`
  background-color: white;
`;

let allBrands: { name: string; slug: string }[] = [];
const SearchingByBrands = () => {
  const [brands, setBrands] = useState<{ name: string; slug: string }[]>();
  const [checkedBoxes, setCheckedBoxes] = useState<{ [key: string]: boolean }>(
    {}
  );
  const [searchInput, setSearchInput] = useState<string>("");
  const dispatch = useDispatch();
  const handleCheckboxChange: (event: any) => void = (event) => {
    setCheckedBoxes({
      ...checkedBoxes,
      [event.target.name]: event.target.checked,
    });
  };

  useEffect(() => {
    const getTagsWrapper = async () => {
      let dbBrands: { name: string; slug: string }[] = await getBrands();
      allBrands = dbBrands;
      setBrands(dbBrands);
    };
    getTagsWrapper();
  }, []);

  const handleSearchChange = (event: any) => {
    let filteredBrands: { name: string; slug: string }[] = [];
    if (allBrands) {
      allBrands.forEach((brand) => {
        if (
          brand.name.toLowerCase().includes(event.target.value.toLowerCase())
        ) {
          filteredBrands.push(brand);
        }
      });
    }
    setSearchInput(event.target.value);
    setBrands(filteredBrands);
  };
  useEffect(() => {
    let checkedBrandSlugs: string[] = [];
    let checkedBrands = Object.keys(checkedBoxes).filter((brandTag) => {
      if (checkedBoxes[brandTag]) {
        return brandTag;
      }
    });
    allBrands.forEach((brand: any) => {
      if (checkedBrands.includes(brand.name)) {
        checkedBrandSlugs.push(brand.slug);
      }
    });
    dispatch(filterByBrand({ manufacturer: checkedBrandSlugs }));
  }, [checkedBoxes, dispatch]);
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
              brands.map((brand: any) => {
                return (
                  <Checkbox
                    name={brand.name}
                    checked={checkedBoxes[brand.name]}
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
