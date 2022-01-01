import styled from "styled-components";
import StyledButton from "components/Button";
import Image from "next/image";

const StyledImage = styled(Image)`
  border-radius: 3px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  justify-content: center;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 1 300px;
  :last-child {
    align-self: flex-end;
  }
`;

const Button = styled(StyledButton)`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  gap: 100px;
`;

const Description = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
`;

const Title = styled.span`
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
  max-width: 225px;
  line-height: 18px;
`;

const Overlay = styled.div`
  width: 300px;
  height: 300px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  /* pointer-events: none; */
  & > div {
    display: none;
  }
  :hover {
    & > div {
      display: block;
    }
    background-color: rgb(255, 255, 255, 0.4);
    cursor: pointer;
  }
`;

const ResultSection = styled.div`
  top: 140px;
  position: sticky;
  width: 100%;
  margin-top: 40px;
  height: 40px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: ${({ theme }) => theme.colors.brand.black};
`;

export {
  Wrapper,
  Card,
  Section,
  Button,
  Description,
  Title,
  Overlay,
  ResultSection,
  StyledImage,
};
