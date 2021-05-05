import styled from "styled-components";

export const Header = styled.div`
  background-color: #333;
  height: 80vh;
  @media screen and (max-width: 1280px) {
    height: auto;
  }
`;

export const ContainerLogo = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 55%;
`;

export const Logo = styled.img`
  width: 120px;
  max-width: 80%;
  margin-top: 30px;
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
`;

export const ImgEbook = styled.img`
  width: 500px;
  max-height: 100%;
  object-fit: cover;
  overflow: hidden;
`;

export const ContainerText = styled.div`
  display: flex;
  align-items: center;
  height: 600px;
  max-height: 50%;
  width: 500px;
  max-width: 90%;
  flex-direction: column;
`;

export const TitleHeader = styled.h1`
  font-family: "Ubuntu";
  font-weight: 400;
  font-size: 9rem;
  color: #fff;
  text-align: center;
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
export const ButtonBuy = styled.button`
  font-family: "Ubuntu";
  font-size: 1.2rem;
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
  margin-top: 2rem;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  :hover {
    color: #fff;
    font-size: 1.6rem;
    background-color: #49b970;
    border-color: #fff;
  }
`;
