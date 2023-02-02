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

${'' /* this is the playing field */}
  ${(props) =>
    props.selection &&
    css`
      width: 430px;
      max-width: 80vw;
      height: 160px;
      justify-content: flex-start;
      margin: 0 30px;
      background-color: rgb(0, 80, 0, 0.3);
      border-bottom: 5px solid rgb(245,245,245,0.3);

      &:hover {
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        transform: scale(1);
      }
    `}

    ${'' /* this is the div that the selct cards come from */}
    ${(props) =>
    props.none &&
    css`
      flex-wrap:wrap;
      height:480px;
      background-color: rgb(22, 22, 22, 0.7);
      border:none;
    `}
    
    ${'' /* This is the select from list cards */}
    ${(props) =>
    props.selectFrom &&
    css`
      color:black;
      flex-wrap:wrap;
      width:200px;
      height:auto;
      background-color: red;
      border:none;
      margin:1px;
      padding:1px;
    `}
   
    ${(props) =>
    props.gameCard &&
    css`
      width: 330px;
      height: 100px;
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
      width: 330px;
      height: 100px;
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


