import React, { useState, useContext } from "react";
import { useDrag, useDrop } from "react-dnd";
import { StyledCard } from "../styled/StyledCard";
import { ItemTypes } from "../dnd/dnd";
import shirt_blue from "../../images/shirt_blue.png";
import shirt_red from "../../images/shirt_red.png";
import shirt_yellow from "../../images/yellow-jersey.png";
import shirt_white from "../../images/white-jersey.png";
import { registerables } from "chart.js";

const PlayerCardDNDKIT = ({ player }) => {

  const isPlaying = player.category !== "1none" ? true : false;

  const playColor = isPlaying ? "transparent" : "white";
  const shirtColor =
    player.nationality === "Australian" ? shirt_yellow : shirt_white;
  const borderUnselected =
    !isPlaying &&
    (player.nationality === "Australian"
      ? "7px solid yellow"
      : "7px solid black");


  return (
    <StyledCard
      selectFrom
      style={{

        backgroundColor: `${playColor}`,
        //background: `${ backgroundUnselected } `,
        width: ` ${isPlaying && "auto"} `,
        height: `${isPlaying && "auto"} `,
        flexDirection: "column",
        flexWrap: "wrap",
        borderLeft: `${borderUnselected} `,
      }}
      player

    >
      {isPlaying ? (
        <div>
          <img src={shirtColor} width={30} margin={0} alt="shirt"></img>{" "}
          <p style={{ color: "rgb(245, 245, 245" }}>{player.lastName}</p>
        </div>
      ) : (
        <h3 style={{ color: "black" }}>
          {player.firstName} {player.lastName}{" "}
        </h3>
      )}
    </StyledCard>
  );
};

export default PlayerCardDNDKIT;
