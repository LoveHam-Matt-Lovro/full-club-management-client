import React, { useContext, useState } from "react";
import PlayerCard from "../cards/PlayerCard";
import { useDrop } from "react-dnd";
import { ItemTypes, categories } from "./dnd";

import { StyledCard } from "../styled/StyledCard";
import DropWrapper from "./DropWrapper";
import PlayerStatsCard from "../cards/PlayerStatsCard";
import styled from "styled-components";

const StyledPlayerCard = styled(PlayerCard)`
  background-color: red;
  border: 3px solid red;
`;

const SelectionDnD = ({ selection, setSelection, SelectionContext, game }) => {
  const [items, setItems] = useState(selection);
  const [prevItems, setPrevItems] = useState(selection);
  const { markAsSelected } = useContext(SelectionContext);
  const [focusPlayer, setFocusPlayer] = useState({});

  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.PLAYER,

    drop: (item, monitor) => {
      markAsSelected(item._id);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  //*

  const onDrop = (item, monitor, position) => {
    const mapping = categories.find((cat) => cat.position === position);
    console.log(item);

    setItems((prevState) => {
      // max players in a category is 1/3 of the total number of players, rounded down
      const maxPlayers = Math.floor(game.numberOfPlayers / 3);
      console.log(maxPlayers);
      // if the category is not full, return the previous state
      // if (prevState.filter((player) => player.category === mapping.position).length < maxPlayers) {

      const newItems = prevState
        .filter((i) => i.id !== item.id)
        .concat({ ...item, position: position, icon: mapping.icon });
      return [...newItems];
    });

    console.log(selection);
    //console log all names of players in category "attack"
    console.log(
      selection
        .filter((player) => player.category === "attack")
        .map((player) => {
          return player.firstName;
        })
    );
  };

  const handleFocusPlayer = (player) => {
    setFocusPlayer(player);
  };

  const randomNumber = Math.trunc(Math.random() * 9999) + 1;

  return (
    <div style={{ display: "flex" }}>
      <PlayerStatsCard player={focusPlayer} />
      <div style={{ display: "flex" }}>
        <DropWrapper
          category="none"
          color="black"
          icon="🗙"
          key="test"
          onDrop={onDrop}
          SelectionContext={SelectionContext}
          markAsSelected={markAsSelected}
        >
          <StyledCard selection none>
            {selection
              .filter((player) => player.category === "none")
              .map((player) => {
                return (
                  <PlayerCard
                    onClick={handleFocusPlayer}
                    player={player}
                    key={`${player._id}_${"test"}`}
                    handleFocusPlayer={handleFocusPlayer}
                  />
                );
                // key={`${player._id}_${player.selected}
              })}
          </StyledCard>
        </DropWrapper>

        <div>
          {categories.map((category) => {
            return (
              <DropWrapper
                category={category.position}
                color={category.color}
                icon={category.icon}
                key={category.position}
                onDrop={onDrop}
                SelectionContext={SelectionContext}
                markAsSelected={markAsSelected}
              >
                <div style={{ display: "flex" }}>
                  <StyledCard
                    selection
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      flexWrap: "wrap",
                    }}
                  >
                    {selection
                      .filter((player) => player.category === category.position)
                      .map((player) => {
                        return (
                          <PlayerCard
                            onClick={handleFocusPlayer}
                            player={player}
                            key={`${player._id}_${category.position}`}
                            handleFocusPlayer={handleFocusPlayer}
                            isPlaying
                          />
                        );
                      })}
                  </StyledCard>
                </div>
              </DropWrapper>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SelectionDnD;
