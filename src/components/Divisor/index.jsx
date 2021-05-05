import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import { ContainerDivisor, Divisor } from "./styles";

function DivisorComponent() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <ContainerDivisor data-aos="fade-up">
      <Divisor />
    </ContainerDivisor>
  );
}

export default DivisorComponent;
