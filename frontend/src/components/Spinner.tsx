import styled from "styled-components";

const Spinner = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  position: relative;
  border: 2px solid ${({ theme }) => theme.colors.brand.black};
  border-top-color: transparent;
  animation: spinAround 1.2s infinite linear;
  @keyframes spinAround {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Spinner;
