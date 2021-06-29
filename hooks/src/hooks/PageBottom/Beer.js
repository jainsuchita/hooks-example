import React from "react";

const Beer = ({ name, tagline, image_url }) => (
  <div className="beerDiv">
    <img
      src={image_url}
      alt=""
      style={{
        width: "30px",
        float: "left",
        paddingRight: "10px",
        paddingBottom: "10px",
      }}
    />
    <h2>{name}</h2>
    <p>{tagline}</p>
  </div>
);

export default Beer;
