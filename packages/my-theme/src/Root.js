import React, { useEffect } from "react";
import { connect } from "frontity";
import Header from "./components/Header";
import Portfolios from "./pages/Porfolios";
import Archives from "./pages/Archives";
import Post from "./components/Post";
import Page from "./pages/Page";
import Home from "./pages/Home";
import Switch from "@frontity/components/switch";

const Root = ({ state, actions }) => {
  const data = state.source.get(state.router.link);

  useEffect(() => {
    actions.source.fetch("/portfolios");
    actions.source.fetch("/home");
  });

  return (
    <>
      <Header />
      <hr />
      <Switch>
        {data.isFetching && <p>Fetching....</p>}
        {data.isHome && <Home />}
        {data.isPortfolioArchive && <Portfolios />}
        {data.isPortfolio && <Post element="portfolio" />}
        {/* {data.isArchive && <Archives />} */}
        {data.isPage && <Page />}
      </Switch>
    </>
  );
};

export default connect(Root);
