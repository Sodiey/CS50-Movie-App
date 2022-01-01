import styled from "styled-components";

const Select = styled.select`
  background-color: inherit;
  margin-top: 5px;
  width: 100%;
  border: 0;
  font-size: 14px;
  height: 20px;
  outline-color: ${({ theme }) => theme.colors.gray["10"]};
  :focus-visible {
    outline-color: ${({ theme }) => theme.colors.gray["10"]};
  }
  &:hover {
    cursor: pointer;
  }
`;
export default Select;
