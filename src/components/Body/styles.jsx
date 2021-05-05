import styled from "styled-components";

export const ArticleMainFirst = styled.div`
  overflow: hidden;
`;

export const Title = styled.p`
  margin-bottom: 20px;
`;

export const PriceTextMedium = styled.p`
  margin-left: auto;
  padding: 5px 20px;
  border-radius: 20px;
  background-color: #7159c1;
  filter: brightness(90%);
`;

export const ButtonPrice = styled.button`
  font-family: "Ubuntu";
  font-size: 1.2rem;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  border: none;
  border-radius: 5rem;
  padding: 0;
  line-height: 4.5rem;
  width: 170px;
  height: 45px;
  color: #fff;
  background-color: #49b970;
  cursor: pointer;
  transition: all 0.35s ease-in-out;
  margin-top: 3rem;
  :hover {
    background-color: #37b05d;
    border-color: #37b05d;
    color: #fff;
    font-size: 1.6rem;
  }
`;
