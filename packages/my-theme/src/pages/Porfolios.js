import React from "react";
import { connect } from "frontity";
import Featured from "../components/Featured";
import Link from "../components/Link";
import Search from "../components/Search";

const Portfolios = ({ state, actions }) => {
  const data = state.source.get(state.router.link);

  const allPorfolio = Object.values(state.source.portfolio);
  const fillterPortfolio = allPorfolio.filter((por) =>
    por.title.rendered
      .toLowerCase()
      .includes(state.theme.searchValue.toLowerCase())
  );
  return (
    <>
      <p>Portfolios</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
        fuga?
      </p>

      {/* <pre>Counter: {state.theme.counter}</pre>
      <button onClick={actions.theme.addToCounter}>Dodaj 1</button> */}

      <Search />

      <h3>Lista portfolios({data.items.length})</h3>

      {!fillterPortfolio.length > 0 && <p>Nie ma portfolio</p>}
      {fillterPortfolio.map((portf) => {
        const rodzajID = portf.rodzaj[0];
        const rodzaj = state.source.rodzaj[rodzajID];
        // const portfolio = state.source.portfolio[id];
        return (
          <article key={portf.id}>
            <Link href={portf.link}>
              <Featured imgId={portf.featured_media} element="portfolio" />
              <h3
                dangerouslySetInnerHTML={{ __html: portf.title.rendered }}
              ></h3>
              <span>Czas trwania: {portf.acf.duration}</span>
            </Link>
            <p>
              Rodzaj: <Link href={rodzaj.link}>{rodzaj.name}</Link>
            </p>
          </article>
        );
      })}

      {/* {allPorfolio.map(({ id }) => {
        const portfolio = state.source.portfolio[id];
        return (
          <article key={id}>
            <Link href={portfolio.link}>
              <Featured imgId={portfolio.featured_media} element="portfolio" />
              <h3
                dangerouslySetInnerHTML={{ __html: portfolio.title.rendered }}
              ></h3>
              <span>Czas trwania: {portfolio.acf.duration}</span>
            </Link>
          </article>
        );
      })} */}
    </>
  );
};

export default connect(Portfolios);
