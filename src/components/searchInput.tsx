import React from "react";
import styled from "styled-components";

const Input = styled.input`
  line-height: 24px;
  color: #A8A8A8;
  text-indent: 14px;
  width: 100%;
  height: 48px;
  background: #ffffff !important;
  border: 2px solid #e0e0e0;
`;

function SearchInput(props: any) {
  return (
      <Input type="text" placeholder={`Search ${props.searchType} `} />
  );
}

export default SearchInput;
