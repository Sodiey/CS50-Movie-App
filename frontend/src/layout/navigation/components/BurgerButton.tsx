import styled from "styled-components";

const TogglerButton = styled.button<{ isOpen: boolean }>`
  width: 30px;
  padding-top: 28px;
  padding-bottom: 28px;
  position: relative;
  background-color: transparent;
  border: none;
  cursor: pointer;
  ${({ theme }) => theme.media.md.up} {
    display: none;
  }
  & span {
    display: block;
    width: 22px;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.brand.white};
    position: absolute;
    transform-origin: center;
    transition: opacity 0.2s ease-out, transform 0.2s ease-out;
    &:nth-of-type(1) {
      top: calc(50% - 6px);
      transform: ${({ isOpen }) =>
        isOpen ? "translateY(6px) rotate(45deg)" : "none"};
    }
    &:nth-of-type(2) {
      top: calc(50%);
      opacity: ${({ isOpen }) => (isOpen ? "0" : "1")};
    }
    &:nth-of-type(3) {
      top: calc(50% + 6px);
      transform: ${({ isOpen }) =>
        isOpen ? "translateY(-6px) rotate(-45deg)" : "none"};
    }
  }
`;

const BurgerButton = ({ isOpen, onClick }: BurgerButtonProps) => {
  return (
    <TogglerButton isOpen={isOpen} onClick={onClick}>
      <span />
      <span />
      <span />
    </TogglerButton>
  );
};

type BurgerButtonProps = {
  isOpen: boolean;
  onClick: () => void;
};

export default BurgerButton;
