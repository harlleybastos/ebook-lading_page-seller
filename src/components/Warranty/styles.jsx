import styled from "styled-components";

export const MainContainerWarranty = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 40px;
  background-color: #333;
  width: 100%;
  padding: 6rem;
`;

export const ContainerWarranty = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1280px) {
    flex-direction: column;
    width: 50%;
  }
`;

export const ContainerWarrantText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  @media screen and (max-width: 768px) {
    width: 70%;
  }
`;

export const TitleWarranty = styled.h3`
  color: #fffefe;
  font-family: "Ubuntu";
  font-size: 4rem;
  font-weight: 400;
  line-height: 5.8rem;
`;

export const DescWarranty = styled.p`
  color: #fff;
  font-family: "Ubuntu";
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 2.8rem;
  opacity: 0.6;
  margin-bottom: 4.8rem;
  text-align: center;

  @media (min-width: 1281px) {
    width: 500px;
    max-width: 80%;
  }
`;
export const TitleWarrantyTwo = styled.h3`
  color: #fffefe;
  text-align: center;
  font-family: "Ubuntu";
  margin-top: 6rem;
  font-size: 4rem;
  font-weight: 400;
  line-height: 5.8rem;
  height: auto;
`;

export const DescWarrantyTwo = styled.p`
  color: #fff;
  font-family: "Ubuntu";
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 2.8rem;
  opacity: 0.6;
  margin-bottom: 4.8rem;
  width: 500px;
  max-width: 80%;
  text-align: center;
  @media screen and (max-width: 768px) {
    max-width: auto;
    width: auto;
  }
`;

export const IMGWarranty = styled.img`
  width: 300px;
  max-width: 70%;
`;
