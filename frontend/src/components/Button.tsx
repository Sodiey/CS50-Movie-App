import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";
import Spinner from "./Spinner";

const StyledButton = styled.button<{ isLoading: boolean; fullWidth: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
  min-height: 40px;
  padding: 0 32px;
  background: ${({ theme }) => theme.colors.brand.yellow};
  color: ${({ theme }) => theme.colors.brand.black};
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  pointer-events: ${({ isLoading }) => (isLoading ? "none" : "auto")};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  font-size: 1rem;
  line-height: 1.5rem;
  border: 2px solid transparent;

  :hover {
    background-color: ${({ theme }) => theme.colors.brand.yellowDark};
  }

  :disabled {
    background: ${({ theme }) => theme.colors.interactive.disabled};
    color: ${({ theme }) => theme.colors.gray["60"]};
    cursor: not-allowed;
  }
`;

const Button = ({
  children,
  isLoading = false,
  disabled = false,
  fullWidth = false,
  ...props
}: ButtonProps) => (
  <StyledButton
    fullWidth={fullWidth}
    isLoading={isLoading}
    disabled={disabled}
    aria-busy={isLoading}
    {...props}
  >
    {isLoading ? <Spinner /> : children}
  </StyledButton>
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isLoading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
};

export default Button;
