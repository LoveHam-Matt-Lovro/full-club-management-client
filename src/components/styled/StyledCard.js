import styled, { css } from "styled-components";


export const StyledCard = styled.div`
  font-family: "Forum", Arial;
  letter-spacing: 0.15rem;
  background-color: rgba(22, 22, 22, 0.6);
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(245, 245, 245, 0.5);
  padding: 10px;
  margin: 20px;
  width: 400px;
  max-width: 80vw;
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  a {
    color: rgb(245, 245, 245);
    text-decoration: none;
  }

  p {
    margin: 5px 0;
  }

  &.review {
    height: 100px;
    width: 1200px;
    max-width: 80vw;
  }

  ${(props) =>
    props.player &&
    css`
      flex-direction: row;
      justify-content: center;
      width: 200px;
      max-width: 80vw;
      min-height: 35px;
      box-shadow: none;
    `}

  ${(props) =>
    props.selection &&
    css`
      width: 450px;
      max-width: 80vw;
      height: 300px;
      justify-content: flex-start;
      margin: 0 30px;
      background-color: rgb(124, 252, 0, 0.5);
      border-bottom: 5px solid white;

      &:hover {
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        transform: scale(1);
      }
    `}
    ${(props) =>
    props.none &&
    css`
      height: 600px;
      background-color: rgb(245, 245, 245, 0.5);
    `}
   
    ${(props) =>
    props.gameCard &&
    css`
      width: 300px;
      height: 130px;
      h1 {
        font-family:'Freshman', Arial;
        font-weight:10;
        font-size: 1.4rem;
        margin: 0;
      }

      &:hover {
        background-color: rgba(22, 22, 22, 0.8);
        box-shadow: 0 0 15px rgba(245, 245, 245, 0.9);
        transform: scale(1.05);
      }
    `}

    ${(props) =>
    props.pastGameCard &&
    css`
      background-color: rgba(35, 35, 35, 0.8);
      width: 300px;
      height: 130px;
      h1 {
        font-family:'Freshman', Arial;
        font-weight:10;
        font-size: 1.4rem;
        margin: 0;
      }

      &:hover {
        background-color: rgba(22, 22, 22, 0.8);
        box-shadow: 0 0 15px rgba(245, 245, 245, 0.9);
        transform: scale(1.05);
      }
    `}
`;


