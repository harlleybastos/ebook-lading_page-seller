import styled from "styled-components";
import { Link } from "react-scroll";

export const Header = styled.div`
  background-color: #333;

  @media screen and (max-width: 1280px) {
    padding: 50px;
  }
  @media screen and (max-width: 768px) {
    height: auto;
    padding: 50px;
  }
`;

export const ContainerLogo = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const ContainerLogoSOA = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

export const Logo = styled.img`
  width: 150px;
  max-width: 80%;
`;

export const ContainerEbook = styled.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const ContainerItems = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  top: 100px;
  left: 0;
  right: 0;
  @media screen and (max-width: 1280px) {
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  @media screen and (max-width: 768px) {
    max-width: 300px;
    width: 60%;
    align-items: center;
    justify-content: space-between;
    margin: auto;
  }
`;

export const ImgEbook = styled.img`
  max-width: 600px;
  width: 80%;
  object-fit: cover;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    max-width: 900px;
    width: 100%;
  }
`;

export const ContainerText = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (min-width: 1281px) {
    width: 500px;
    max-width: 90%;
  }
`;

export const TitleHeader = styled.h1`
  font-family: "Ubuntu";
  font-weight: 400;
  font-size: 9rem;
  color: #fff;
  text-align: center;
  @media screen and (max-width: 768px) {
    white-space: nowrap;
  }
`;
export const Text = styled.p`
  font-family: "Ubuntu";
  opacity: 0.6;
  font-weight: 400;
  line-height: 3.2rem;
  font-size: 2rem;
  color: #fff;
  margin: 10px 0px 0px 0px;
`;
export const ButtonBuy = styled(Link)`
  font-family: "Ubuntu";
  font-size: 1.8rem;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  border: none;
  border-radius: 5rem;
  padding: 0;
  line-height: 4.5rem;
  width: 100%;
  height: 45px;
  color: #000;
  background-color: #fff;
  margin-top: 2rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  :hover {
    color: #fff;
    font-size: 2.4rem;
    background-color: #49b970;
    border-color: #fff;
  }
`;
