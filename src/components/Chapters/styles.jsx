import styled from "styled-components";

export const ContainerChapters = styled.section`
  display: flex;
  height: auto;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-left: -15px;
  margin-right: -15px;
  width: 100%;
  @media screen and (max-width: 1280px) {
    flex-direction: column;
  }
`;

export const ContainerItemsChapters = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TitleChapter = styled.h1`
  font-family: "Ubuntu";
  color: #222;
  font-size: 3.6rem;
  font-weight: 400;
  line-height: 1;
  margin-bottom: 3rem;
  text-transform: capitalize;
`;
export const DescChapter = styled.h1`
  font-family: "Ubuntu";
  color: #aaa;
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 2.4rem;
  margin-bottom: 2rem;
  padding: 0 30px;
`;

export const SectionChapter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 3rem 0 3rem 0;
  height: auto;
`;

export const TitleSectionChapter = styled.h3`
  font-family: "Ubuntu";
  color: #333;
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 1;
  margin-bottom: 2.4rem;
  text-transform: capitalize;
`;

export const ContainerTextSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextSectionChapter = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2.4rem;
  margin-bottom: 0;
  padding-right: 1rem;
  padding-left: 1rem;
  color: #aaa;
  font-family: "Ubuntu";
  width: 300px;
`;

export const ImgSectionChapter = styled.img`
  color: #49b970;
  font-size: 4.7rem;
  line-height: 1;
  margin-bottom: 3.5rem;
  width: 4.7rem;
  margin-right: 1.5rem;
`;

export const ContainerWrapperImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImgChapter = styled.img`
  vertical-align: middle;
  height: auto;
  max-width: 100%;
  border-style: none;
`;
