import React from "react";
import { connect, styled } from "frontity";
import Link from "./Link";

const Menu = ({ state, actions }) => {
  const { isModalMenuOn } = state.theme;
  const { closeModalMenu } = actions.theme;
  return (
    <>
      <WrapperMenu style={{ display: isModalMenuOn ? "flex" : "none" }}>
        <button onClick={closeModalMenu}>Zamnkij</button>
        <Link href="/">Główna</Link>
        <Link href="/portfolios">Portfolio</Link>
        <Link href="/contact-form-7">Kontakt</Link>
      </WrapperMenu>
    </>
  );
};

export default connect(Menu);

const WrapperMenu = styled.nav`
  @media (min-width: 601px) {
    position: relative;
    display: block !important;
    button {
      display: none;
    }
  }
  @media (max-width: 600px) {
    position: fixed;
    left: 0;
    top: 0;
    height: 0;
    width: 100vw;
    height: 100vh;
    display: none;
    background-color: gray;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    button {
      display: block;
      position: absolute;
      right: 20px;
      top: 20px;
    }
  }
`;
