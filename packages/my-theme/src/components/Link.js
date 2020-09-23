import React from "react";
import { connect } from "frontity";

const Link = ({ href, actions, children }) => {
  const { closeModalMenu } = actions.theme;
  return (
    <a
      href={href}
      onClick={(event) => {
        closeModalMenu();
        event.preventDefault();
        actions.router.set(href);
      }}
    >
      {children}
    </a>
  );
};

export default connect(Link);
