import React from "react";
import { connect } from "frontity";
import Featured from "./Featured";
import Link from "./Link";

const Post = ({ state, element }) => {
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  if (element === "portfolio") {
    const rodzajID = post.rodzaj[0];
    const rodzaj = state.source.rodzaj[rodzajID];
    return (
      <>
        <Featured imgId={post.featured_media} element="portfolio" />
        <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }}></h2>
        <p>Czas trwania: {post.acf.duration}</p>
        <p>
          Rodzaj: <Link href={rodzaj.link}>{rodzaj.name}</Link>
        </p>
        <p dangerouslySetInnerHTML={{ __html: post.content.rendered }}></p>
      </>
    );
  } else {
    return <p>Nie znaleziono porfolio</p>;
  }
};

export default connect(Post);
