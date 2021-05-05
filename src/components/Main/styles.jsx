import styled from "styled-components";

export const MainContainer = styled.div`
  text-rendering: optimizeLegibility;
`;

export const MainArticle = styled.div`
  width: 980px;
  margin: auto;
  max-width: 90%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
  margin-top: 10%;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #333;
`;

export const ContainerImage = styled.div`
  width: 100%;
  padding-top: 56.25%;
  overflow: hidden;
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Content = styled.div`
  margin: 20px;
`;
export const FirstTitle = styled.p`
  font-family: "Ubuntu", sans-serif;
  color: #fff;
  font-size: 2.3rem;
  font-weight: 400;
  line-height: 1;
  margin-bottom: 2.4rem;
  text-transform: capitalize;
  text-align: center;
`;

export const Info = styled.div`
  display: flex;
  align-self: end;
  align-items: center;
`;
export const TextMedium = styled.p`
  font-family: "Ubuntu";
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2.4rem;
  margin: 0 auto;
  text-align: center;
  color: #aaa;
`;
