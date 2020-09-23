import React from "react";
import { connect, Global, css } from "frontity";

const Base = ({ state }) => {
  // const isDarkModeOn = state.theme.isDarkModeOn
  const { isDarkModeOn } = state.theme;
  const mainBlack = "#4a4a4a";
  const mainRed = "red";
  return (
    <Global
      styles={css`
        @import url("https://fonts.googleapis.com/css2?family=Ranchers&display=swap");
        html {
          font-family: "Ranchers", sans-serif;
        }
        body {
          margin: 0;
          background-color: ${isDarkModeOn ? mainBlack : null};
          color: ${isDarkModeOn ? "white" : mainBlack};
        }
        a {
          color: ${isDarkModeOn ? "white" : mainBlack};
        }
      `}
    ></Global>
  );
};

export default connect(Base);
