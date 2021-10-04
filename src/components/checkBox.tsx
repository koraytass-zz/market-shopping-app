import React from "react";
import styled from "styled-components";

interface CheckBoxInput {
  name: string;
  checked: boolean;
  onChange: (args: any) => void;
}

const Div = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-left: 14px;
`;
const StyledCheckBox = styled.input`
  width: 22px;
  height: 22px;
  margin-left: 14px;
  background: ${(props) => (props.checked ? "#1ea4ce" : "FFFFFF")};
`;

const TextStyle = styled.div`
color: #A8A8A8;
font-family: "Open Sans";
font-size: 18px;
`;

const Checkbox: (input: CheckBoxInput) => JSX.Element = ({
  name,
  checked,
  onChange,
}) => {
  return (
    <Div>
      <label>
        <StyledCheckBox
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
        />
        {name}
      </label>
    </Div>
  );
};

export default Checkbox;
