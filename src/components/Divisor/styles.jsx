import styled from "styled-components";

export const ContainerDivisor = styled.section`
  padding-top: 10rem;
  padding-bottom: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Divisor = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  width: 1024px;
  max-width: 100%;

  @media screen and (max-width: 1280px) {
    max-width: 80%;
  }
`;
