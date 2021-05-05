import { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import {
  ContainerWarrantText,
  ContainerWarranty,
  DescWarranty,
  DescWarrantyTwo,
  IMGWarranty,
  MainContainerWarranty,
  TitleWarranty,
  TitleWarrantyTwo,
} from "./styles";
import { ButtonPriceWarranty } from "../Price/styles";
import warranty from "../../assets/img/warranty.png";
import imgDrive from "../../assets/img/logo-drive.png";
function WarrantyComponent() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <MainContainerWarranty id="warranty" data-aos="fade-up">
      <ContainerWarranty>
        <ContainerWarrantText>
          <TitleWarranty>Garantia</TitleWarranty>
          <DescWarranty>
            Você tem direito a 7 dias de garantia, portanto se dentro desse
            período você não gostar do E-Book você vai ter o valor restituído,
            SEM PERGUNTAS. Basta enviar um E-mail para
            sonsofharllao@hotmail.com.
          </DescWarranty>
          <IMGWarranty src={warranty} />
        </ContainerWarrantText>
        <ContainerWarrantText>
          <TitleWarrantyTwo>
            Assista Sons of Anarchy com Qualidade
          </TitleWarrantyTwo>
          <DescWarrantyTwo>
            Você vai ter direito de acesso a um diretório com as 7 Temporadas de
            Sons of Anarchy, tanto DUBLADAS, quanto LEGENDADAS. Para resgatar
            seu bonus basta enviar um print da compra no direct do instagram
            @sonsofharllao.
          </DescWarrantyTwo>
          <IMGWarranty src={imgDrive} />
        </ContainerWarrantText>
      </ContainerWarranty>
      <ButtonPriceWarranty>Quero adquirir</ButtonPriceWarranty>
    </MainContainerWarranty>
  );
}

export default WarrantyComponent;
