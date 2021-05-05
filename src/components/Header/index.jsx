import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import ebook from "../../assets/img/ebook.png";
import logoSOH from "../../assets/img/logo-soh.png";
import {
  ButtonBuy,
  ContainerEbook,
  ContainerItems,
  ContainerLogo,
  ContainerText,
  Header,
  ImgEbook,
  Logo,
  Text,
  TitleHeader,
} from "./styles";

function HeaderComponent() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Header id="header">
      <ContainerLogo data-aos="fade-up">
        <Logo src={logoSOH} />
      </ContainerLogo>
      <ContainerEbook>
        <ContainerItems>
          <ImgEbook data-aos="fade-up" src={ebook} />
          <ContainerText data-aos="fade-up">
            <TitleHeader>First 9</TitleHeader>
            <Text>
              O melhor E-book atualmente que conta toda a história do moto-clube
              responsavél pelas origens de Sons of Anarchy, os First 9.
              <br />
              <br />
              Entenda toda a história que não foi contada por Sons of Anarchy,
              suas origens, personagens e conceitos nunca se quer explorados na
              série.
            </Text>
            <ButtonBuy type="button">Tenho Interesse</ButtonBuy>
            <ButtonBuy type="button">Por que devo adquirir?</ButtonBuy>
          </ContainerText>
        </ContainerItems>
      </ContainerEbook>
    </Header>
  );
}

export default HeaderComponent;
