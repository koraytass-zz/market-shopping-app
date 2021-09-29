import React from "react";
import styled from "styled-components";

const Input = styled.input`
  line-height: 24px;
  color: #A8A8A8;
  text-indent: 14px;
  margin: 10px;
  width: 248px;
  height: 48px;
  background: #ffffff !important;
  border: 2px solid #e0e0e0;
`;

function SearchInput(searchType: any) {
  return (
      <Input type="text" placeholder={`Search ${searchType} `} />
  );
}

export default SearchInput;
