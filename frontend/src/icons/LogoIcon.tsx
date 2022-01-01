import styled from "styled-components";

const Logo = styled.div`
  width: 193px;
  height: 60px;
  background-color: transparent;
  display: flex;
  align-items: center;
  font-weight: bold;
  line-height: 32px;
  letter-spacing: 1.3px;
  ${({ theme }) => theme.media.md.down} {
    justify-content: center;
  }
`;

const LogoIcon = () => <Logo>CSDB</Logo>;
export default LogoIcon;
