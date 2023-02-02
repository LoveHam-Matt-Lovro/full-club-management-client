import styled, { css } from "styled-components";
import { COLOR } from "../../Context/constants";

export const SmallStyledDiv = styled.div`
  font-family: "Forum", Arial;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${COLOR.light};
  margin: 0;
  background-color: rgb(22, 22, 22, 0.7);
  border-radius: 10px;
  padding: 20px;
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 5px;
    color: ${COLOR.light};
    font-family: "Forum", Arial;
  }

  ${(props) =>
    props.gameList &&
    css`
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      background-color: rgb(0, 50, 0, 0.3);
      width: auto;
      margin: 10px;
      h1 {
        font-size: 2.2rem;
        margin: 0;
      }
    `}

  ${(props) =>
    props.pastGameList &&
    css`
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      background-color: rgb(32, 42, 68, 0.3);
      width: auto;
      margin: 10px;
      h1 {
        font-size: 2.2rem;
        margin: 0;
      }
    `}
  ${(props) =>
    props.gameDetailsHeading &&
    css`
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      width: auto;
      margin: 10px;
      padding: 5px;
      h1 {
        font-family: "Freshman", Aral;
        font-size: 2rem;
        margin: 0;
        font-weight: 10;
      }
    `}

    ${(props) =>
    props.profile &&
    css`
      width: 85vw;
    `}
`;
