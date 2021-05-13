import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import book from "../../assets/img/book-solid.svg";
import {
  ButtonPriceWarranty,
  ContainerPrice,
  DescPrice,
  IMGEbook,
  MinValuePice,
  PricingPannel,
  TitlePrice,
  ValueBenefits,
  ValueName,
  ValuePice,
} from "./styles";

function PriceComponent() {
  const goToBuy = () => {
    window.location.href = "http://bit.ly/soaEbookEduzzWEB";
    return null;
  };
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <ContainerPrice id="price" data-aos="fade-up">
      <TitlePrice>Valor</TitlePrice>
      <DescPrice>
        Confira o valor desse grande investimento em conhecimento para com a
        série Sons of Anarchy !
      </DescPrice>
      <PricingPannel>
        <IMGEbook src={book} />
        <MinValuePice>R$20,00 á vista ou</MinValuePice>
        <ValuePice>4x R$5,37</ValuePice>
        <ValueName>E-Book PDF</ValueName>
        <ValueBenefits>26 Capítulos</ValueBenefits>
        <ValueBenefits>
          Bonus Exclusivo para Re-assistir Sons of Anarchy
        </ValueBenefits>
        <ValueBenefits>Imersão na História</ValueBenefits>
        <ValueBenefits>Riqueza de Detalhes</ValueBenefits>
        <ValueBenefits>Compreensão Facilitada</ValueBenefits>
        <ButtonPriceWarranty
          onClick={goToBuy}
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-200}
          duration={500}
        >
          Quero adquirir
        </ButtonPriceWarranty>
      </PricingPannel>
    </ContainerPrice>
  );
}

export default PriceComponent;
