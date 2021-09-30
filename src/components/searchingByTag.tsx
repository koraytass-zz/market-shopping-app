import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Checkbox from "./checkBox";
import SearchInput from "./searchInput";
import { getTags } from "../utils/dbManagement";

const SearchingByTag = () => {
  const [tags, setTags] = useState<string[]>();
  const [checkedBoxes, setCheckedBoxes] = useState<{ [key: string]: boolean }>(
    {}
  );
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
      setTags(dbTags);
    };
    getTagsWrapper();
  }, []);

  const Container = styled.div`
    height: 214px;
    width: 296px;
  `;
  const TagContainer = styled.div`
    overflow: auto;
    height:142px;
    width:214px;
  `;

  return (
    <>
      <Container>
        <SearchInput searchType={"tag"}></SearchInput>
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
      </Container>
    </>
  );
};
export default SearchingByTag;
