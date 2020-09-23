import React from "react";
import { connect } from "frontity";

const Featured = ({ state, imgId, element }) => {
  const media = state.source.attachment[imgId];
  // console.log(imgId);
  return (
    element === "portfolio" && (
      <>
        <img src={media.media_details.sizes.medium.source_url} alt="" />
      </>
    )
  );
};

export default connect(Featured);
