import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 70px;
`;

const Card = styled.div`
  display: flex;
  flex: 0 1 150px;
`;

const Description = styled.div`
  display: flex;
  width: 100%;
  height: 44px;
  align-items: center;
  justify-content: space-between;
`;
const Inner = styled.div`
  margin-left: 10px;
  display: flex;
  width: 100%;
  flex-direction: column;
`;
const ButtonWrapper = styled.div`
  margin-left: auto;
  margin-bottom: 5px;
`;

const People = styled.div`
  margin-bottom: 10px;
`;

const Title = styled.span`
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
  line-height: 18px;
  font-size: 18px;
`;

const PeopleWrapper = styled.span`
  margin-left: 10px;
`;
const Person = styled.span`
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
`;

export {
  Wrapper,
  Card,
  Description,
  Title,
  Inner,
  People,
  PeopleWrapper,
  Person,
  ButtonWrapper,
};
