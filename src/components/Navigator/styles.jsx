import styled from "styled-components";
import { Link } from "react-scroll";

export const Transition = styled.div`
  .active {
    visibility: hidden;
    @media screen and (min-width: 1280px) {
      visibility: visible;
      transition: all 200ms ease-in;
    }
    @media screen and (max-width: 1280px) {
      visibility: visible;
    }
  }
  .hidden {
    visibility: hidden;

    @media screen and (min-width: 1280px) {
      transition: all 200ms ease-in-out;
      transform: translate(0, -100%);
    }
  }
`;

export const NavigatorNav = styled.nav`
  height: 0;
  top: -100px;
  position: fixed;
  width: 100%;
  background-color: #333;
  transition-timing-function: ease-in-out;
  transition: 0.5s;

  &.items {
    top: 0px;
    background-color: #333;
    height: 10vh;
    z-index: 10;
  }
  @media screen and (max-width: 1280px) {
    position: relative;
    height: 0;
    transition: none;
    animation: none;
    top: 0;
  }
`;

export const Hamburguer = styled.div`
  @media screen and (max-width: 1280px) {
    position: fixed;
    cursor: pointer;
    right: 5%;
    top: 5%;
    transform: translate(-5%, -50%);
    z-index: 2;
  }
`;

export const Line = styled.div`
  @media screen and (max-width: 1280px) {
    width: 3rem;
    height: 3px;
    background: #fff;
    margin: 5px;
    border: 1px solid rgba(0, 0, 0.6);
  }
`;

export const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  width: 80%;
  height: 100%;
  justify-content: space-around;
  align-items: center;
  margin-left: auto;
  @media screen and (max-width: 1280px) {
    position: fixed;
    background: #333;
    height: 100vh;
    width: 100%;
    flex-direction: column;
    clip-path: circle(100px at 90% -10%);
    -webkit-clip-path: circle(100px at 90% -10%);
    transition: all 1s ease-out;
    pointer-events: none;
    z-index: 1;
    &.open {
      clip-path: circle(1500px at 90% -10%);
      -webkit-clip-path: circle(1500px at 90% -10%);
      pointer-events: all;
    }
    &.close {
      clip-path: circle(100px at 90% -10%);
      -webkit-clip-path: circle(100px at 90% -10%);
      pointer-events: all;
    }
  }
`;

export const ItemNavLink = styled(Link)`
  list-style: none;
  transition: 0.3s ease-in-out;
  position: relative;
  padding: 0 30px;
  cursor: pointer;
  @media (min-width: 992px) {
    :after {
      content: "";
      position: absolute;
      z-index: -1;
      right: 0;
      width: 0;
      top: 40px;
      background: #fff;
      height: 4px;
      transition-property: width;
      transition-duration: 0.3s;
      transition-timing-function: ease-in-out;
    }
    :hover:after {
      left: 0;
      right: auto;
      width: 100%;
    }
    @media (max-width: 1280px) {
      :after {
        content: "";
        position: absolute;
        z-index: -1;
        right: 0;
        width: 0;
        top: 40px;
        background: #fff;
        height: 4px;
        transition-property: width;
        transition-duration: 0.3s;
        transition-timing-function: ease-in-out;
      }
      :hover:after {
        left: 0;
        right: auto;
        width: 100%;
      }
    }
  }
`;

export const NavItem = styled(Link)`
  color: #fff;
  text-decoration: none;
  white-space: nowrap;
  text-align: center;
  font-size: 1.6rem;
  font-family: "Ubuntu";
  @media screen and (max-width: 1280px) {
    font-size: 2.5rem;
  }
`;
export const LogoNavBar = styled.img`
  width: 80px;
  max-width: 100%;
  margin-right: auto;
`;
