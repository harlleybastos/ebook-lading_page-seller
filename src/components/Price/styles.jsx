import styled from "styled-components";

export const ContainerPrice = styled.div`
  display: flex;
  padding: 3rem 0 3rem 0;
  height: auto;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  background-color: #f9f9f9;
`;

export const TitlePrice = styled.h1`
  font-family: "Ubuntu";
  color: #222;
  font-size: 3.6rem;
  font-weight: 400;
  line-height: 1;
  margin-bottom: 3rem;
  text-transform: capitalize;
`;

export const DescPrice = styled.p`
  font-family: "Ubuntu";
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 2.4rem;
  margin-bottom: 5rem;
  padding: 0 30px;
  width: 500px;
  text-align: center;
`;

export const PricingPannel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #eee;
  background-color: #fff;
  padding: 50px 65px;
  transition: all 0.35s;
  :hover {
    transform: translateY(-4px);
  }
`;

export const IMGEbook = styled.img`
  width: 70px;
  max-width: 100%;
`;

export const MinValuePice = styled.p`
  color: #333;
  font-size: 2rem;
  font-weight: 700;
  line-height: 1;
  margin-top: 1.5rem;
  font-family: "Ubuntu";
`;
export const ValuePice = styled.p`
  color: #333;
  font-size: 7rem;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 1.5rem;
  text-transform: capitalize;
  font-family: "Ubuntu";
`;

export const ValueName = styled.p`
  font-family: "Ubuntu";
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 2.4rem;
  margin-bottom: 2.6rem;
  text-transform: uppercase;
`;

export const ValueBenefits = styled.p`
  font-family: "Ubuntu";
  font-size: 1.6rem;
  color: #aaa;
  padding: 10px;
`;

export const ButtonPriceWarranty = styled.button`
  font-family: "Ubuntu";
  font-size: 2rem;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  border: none;
  border-radius: 5rem;
  padding: 0;
  line-height: 4.5rem;
  width: 300px;
  height: 45px;
  color: #fff;
  background-color: #49b970;
  cursor: pointer;
  transition: all 0.35s ease-in-out;
  :hover {
    background-color: #37b05d;
    border-color: #37b05d;
    color: #fff;
    font-size: 2.5rem;
  }
`;
