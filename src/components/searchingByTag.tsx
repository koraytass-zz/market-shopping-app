import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Checkbox from "./checkBox";
import { getTags } from "../utils/dbManagement";
import { useDispatch } from "react-redux";
import { filterByTag } from "../redux/actions";
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
let allTags: string[] = [];
const SearchingByTag = () => {
  const [tags, setTags] = useState<string[]>();
  const [checkedBoxes, setCheckedBoxes] = useState<{ [key: string]: boolean }>(
    {}
  );
  const [searchInput, setSearchInput] = useState<string>("");
  const dispatch = useDispatch();
  const handleCheckboxChange: (event: any) => void = (event) => {
    console.log(event.target.name);
    setCheckedBoxes({
      ...checkedBoxes,
      [event.target.name]: event.target.checked,
    });
  };

  useEffect(() => {
    const getTagsWrapper = async () => {
      let dbTags: string[] = await getTags();
      allTags = dbTags;
      setTags(dbTags);
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
    let filteredTags: string[] = [];
    if (allTags) {
      allTags.forEach((tag) => {
        if (tag.toLowerCase().includes(event.target.value.toLowerCase())) {
          filteredTags.push(tag);
        }
      });
    }
    setSearchInput(event.target.value);
    setTags(filteredTags);
  };

  useEffect(() => {
    let checkedTags = Object.keys(checkedBoxes).filter((tagName) => {
      if(checkedBoxes[tagName]){
        return tagName;
      }
    });

    dispatch(filterByTag({tags : checkedTags}));
  }, [checkedBoxes]);

  return (
    <>
      <Container>
        <span>Tags</span>
        <FilterArea>
          <Input
            autoFocus
            key="search-input"
            type="text"
            placeholder={`Search tag`}
            onChange={(event) => handleSearchChange(event)}
            value={searchInput}
          />
          <TagContainer>
            {tags &&
              tags.map((tagName: string) => {
                return (
                  <Checkbox
                    name={tagName}
                    checked={checkedBoxes[tagName]}
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
export default SearchingByTag;
