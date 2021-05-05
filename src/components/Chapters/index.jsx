import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import {
  ContainerChapters,
  ContainerItemsChapters,
  ContainerTextSection,
  ContainerWrapperImg,
  DescChapter,
  ImgChapter,
  ImgSectionChapter,
  SectionChapter,
  TextSectionChapter,
  TitleChapter,
  TitleSectionChapter,
} from "./styles";
import imgTable from "../../assets/img/tablet-ebook.jpg";
import imgEbookGoogle from "../../assets/img/lnr-book.svg";
import imgStar from "../../assets/img/lnr-star.svg";

function ChaptersComponent() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <ContainerChapters id="chapters" data-aos="fade-up">
      <ContainerItemsChapters>
        <TitleChapter>Capítulos Incluídos</TitleChapter>
        <DescChapter>
          Veja aqui todos os capítulos inclusos no E-Book.
        </DescChapter>
        <SectionChapter>
          <ImgSectionChapter src={imgEbookGoogle} />
          <ContainerTextSection>
            <TitleSectionChapter>26 Capítulos</TitleSectionChapter>
            <TextSectionChapter>
              O E-Book conta com 26 capítulos de pura imersão ao universo
              misterioso de toda a história dos First 9.
            </TextSectionChapter>
          </ContainerTextSection>
        </SectionChapter>
        <SectionChapter data-aos="fade-up">
          <ImgSectionChapter src={imgStar} />
          <ContainerTextSection>
            <TitleSectionChapter>Boa Leitura</TitleSectionChapter>
            <TextSectionChapter>
              Boa leitura fluida e de fácil compreensão.
            </TextSectionChapter>
          </ContainerTextSection>
        </SectionChapter>
      </ContainerItemsChapters>
      <ContainerWrapperImg data-aos="fade-up">
        <ImgChapter src={imgTable} />
      </ContainerWrapperImg>
    </ContainerChapters>
  );
}

export default ChaptersComponent;
