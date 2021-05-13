import React, { useEffect, useState } from "react";
import {
  Hamburguer,
  ItemNavLink,
  Line,
  NavigatorNav,
  NavItem,
  NavLinks,
  LogoNavBar,
} from "./styles";

import logoSOH from "../../assets/img/logo-soh.png";

const NavigatorComponent = () => {
  const [isActive, setActive] = useState(false);
  const [show, setShow] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
  };

  const navbarControl = () => {
    if (window.scrollY <= 700) {
      setShow(false);
    } else {
      setShow(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", navbarControl);
    return () => window.removeEventListener("scroll", navbarControl);
  }, []);

  return (
    <>
      <NavigatorNav className={`nav ${show ? "items" : null}`}>
        <Hamburguer onClick={handleToggle}>
          <Line></Line>
          <Line></Line>
          <Line></Line>
        </Hamburguer>
        <NavLinks className={isActive ? "open" : "close"}>
          <LogoNavBar src={logoSOH} />
          <ItemNavLink className={isActive ? "close" : null}>
            <NavItem
              activeClass="active"
              to="header"
              spy={true}
              smooth={true}
              offset={-200}
              duration={500}
              onClick={handleToggle}
            >
              Inicio
            </NavItem>
          </ItemNavLink>
          <ItemNavLink className={isActive ? "fade" : null}>
            <NavItem
              activeClass="active"
              to="what"
              spy={true}
              smooth={true}
              offset={-200}
              duration={500}
              onClick={handleToggle}
            >
              Por que ler?
            </NavItem>
          </ItemNavLink>
          <ItemNavLink className={isActive ? "fade" : null}>
            <NavItem
              activeClass="active"
              to="chapters"
              spy={true}
              smooth={true}
              offset={-200}
              duration={500}
              onClick={handleToggle}
            >
              Capítulos
            </NavItem>
          </ItemNavLink>
          <ItemNavLink className={isActive ? "fade" : null}>
            <NavItem
              activeClass="active"
              to="price"
              spy={true}
              smooth={true}
              offset={-200}
              duration={500}
              onClick={handleToggle}
            >
              Valor
            </NavItem>
          </ItemNavLink>
          <ItemNavLink className={isActive ? "fade" : null}>
            <NavItem
              activeClass="active"
              to="warranty"
              spy={true}
              smooth={true}
              offset={-200}
              duration={500}
              onClick={handleToggle}
            >
              Garantias e Bonus
            </NavItem>
          </ItemNavLink>
          <ItemNavLink className={isActive ? "fade" : null}>
            <NavItem
              activeClass="active"
              to="dev"
              spy={true}
              smooth={true}
              offset={-40}
              duration={500}
              onClick={handleToggle}
            >
              Desenvolvedor
            </NavItem>
          </ItemNavLink>
        </NavLinks>
      </NavigatorNav>
    </>
  );
};

export default NavigatorComponent;
