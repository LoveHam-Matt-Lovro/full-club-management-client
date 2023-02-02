import React from "react";
import styled from "styled-components";
import RadarPlayerGraph from "../graphs/RadarPlayerGraph";
const StyledPlayerStatsCard = styled.div`
  width: 100%;
  height: 480px;
  background-color: rgb(22, 22, 22, 0.7);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(22, 22, 22, 0.2);
  margin: 0 auto;
`;

const PlayerStatsCard = ({ player }) => {
  const randomNumber = Math.floor(Math.random() * 100);

  return (
    <StyledPlayerStatsCard>
      <div className="flexColumn">
        <div className="flexRow">
          <div className="flexColumn">
            <h2>{player.firstName}</h2>
            <h2>{player.lastName}</h2>
          </div>
          <img src={player.img} width={75} alt="profile" />
        </div>
        <RadarPlayerGraph user={player} />
      </div>
    </StyledPlayerStatsCard>
  );
};

export default PlayerStatsCard;
