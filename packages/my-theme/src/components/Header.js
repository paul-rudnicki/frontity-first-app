import React from "react";
import { connect, css, styled } from "frontity";
import Link from "./Link";
import logo from "../assets/seo.svg";
import nightAndDay from "../assets/day-and-night.svg";
import Base from "./Base";
import Menu from "./Menu";

const Header = ({ actions }) => {
  const { showMobileMenu } = actions.theme;
  return (
    <>
      <Base />
      <Head>
        <Logo>
          <Link href="/">
            <img src={logo} alt="Logo" />
          </Link>
        </Logo>
        <NavigationBar>
          <MobileButton onClick={showMobileMenu}>Mobile</MobileButton>
          <Menu />
          <img
            onClick={actions.theme.changeDarkMode}
            src={nightAndDay}
            alt="Day and night"
          />
        </NavigationBar>
      </Head>
    </>
  );
};

const redcolor = "red";

const Head = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div``;

const NavigationBar = styled.nav`
  display: flex;
  a {
    font-weight: bolder;
    padding: 10px;
    display: inline-block;
    text-decoration: none;
    &:hover {
      color: ${redcolor};
      transition: all 0.5s;
    }
  }
  img {
    display: inline-block;
    padding: 10px;
    cursor: pointer;
  }
`;

const MobileButton = styled.button`
  background-color: #fff;
  color: #000;
  border: 1px solid;
  display: none;
  @media (max-width: 600px) {
    display: block;
  }
`;

export default connect(Header);
