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

const PlayerStatsCard = ({ player, backupArr }) => {
  const randomNumber = Math.floor(Math.random() * 100);

  // find which index the player is in the array
  const index = backupArr.findIndex((p) => p._id === player._id);

  const backupData = backupArr[index]

  const image = player.img || `https://randomuser.me/api/portraits/men/${index + 1}.jpg`
  return (
    <StyledPlayerStatsCard>
      <div className="flexColumn">
        <div className="flexRow">
          <div className="flexColumn">
            <h2>{player.firstName}</h2>
            <h2>{player.lastName}</h2>
          </div>
          <img src={image} width={75} alt="profile" />
        </div>
        <RadarPlayerGraph user={player} backupData={backupData} />
      </div>
    </StyledPlayerStatsCard>
  );
};

export default PlayerStatsCard;
