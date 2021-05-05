import "aos/dist/aos.css";
import Aos from "aos";
import React, { useEffect } from "react";
import { ContainerTitleArticle, DescArticle, TitleArticle } from "./styles";

function TextArticleTop() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <ContainerTitleArticle id="what" data-aos="fade-up">
      <TitleArticle>Por que ler esse E-Book?</TitleArticle>
      <DescArticle>
        Veja alguns motivos do PORQUE você DEVE ler esse E-Book.
      </DescArticle>
    </ContainerTitleArticle>
  );
}

export default TextArticleTop;
