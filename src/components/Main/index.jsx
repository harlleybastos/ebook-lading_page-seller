import "aos/dist/aos.css";
import Aos from "aos";
import React, { useEffect } from "react";
import { Items } from "../../assets/items";
import {
  Card,
  ContainerImage,
  Content,
  FirstTitle,
  Image,
  Info,
  MainArticle,
  TextMedium,
} from "./styles";

function MainComponent() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <MainArticle>
      {Items.map((item, index) => (
        <Card data-aos="fade-up" key={index}>
          <ContainerImage>
            <Image src={item.src} />
          </ContainerImage>
          <Content>
            <FirstTitle>{item.title}</FirstTitle>
            <Info>
              <TextMedium>{item.text}</TextMedium>
            </Info>
          </Content>
        </Card>
      ))}
    </MainArticle>
  );
}

export default MainComponent;
