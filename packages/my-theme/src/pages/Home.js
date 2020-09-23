import React from "react";
import Link from "../components/Link";
import { connect } from "frontity";

const Home = ({ state, actions }) => {
  const home = state.source.page[35];
  const portfolios = state.source.portfolio;
  return (
    <>
      {typeof home == "undefined" ? null : (
        <>
          <h1>{home.acf.slogan}</h1>
          <p dangerouslySetInnerHTML={{ __html: home.acf.description }}></p>
        </>
      )}
      <h3>Porfolios</h3>
      {portfolios == null ? (
        <p>Wczytujemy portfolios</p>
      ) : (
        Object.values(portfolios)
          .reverse()
          .slice(0, 2)
          .map((p) => {
            return (
              <article key={p.id}>
                <Link href={p.link}>
                  <h4>{p.title.rendered}</h4>
                </Link>
              </article>
            );
          })
      )}
    </>
  );
};

export default connect(Home);
