import React from "react";
import { connect } from "frontity";

const Page = ({ state }) => {
  const data = state.source.get(state.router.link);
  const page = state.source[data.type][data.id];
  // console.log(data);
  // Get the html2react component.
  // const Html2React = libraries.html2react.Component;

  return (
    <>
      {data.isPage && (
        <>
          <h1>{page.title.rendred}</h1>
          <div>
            <p dangerouslySetInnerHTML={{ __html: page.content.rendered }}></p>
          </div>
        </>
      )}
    </>
  );
};

export default connect(Page);
