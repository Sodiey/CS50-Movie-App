import styled from "styled-components";

const Footer = styled.div`
  height: 200px;
  width: 100%;
  margin-top: 50px;
  background-color: ${({ theme }) => theme.colors.gray["70"]};
`;

export default Footer;
