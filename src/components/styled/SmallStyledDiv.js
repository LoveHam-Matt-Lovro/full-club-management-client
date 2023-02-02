import styled, { css } from "styled-components";
import { COLOR } from "../../Context/constants";

export const SmallStyledDiv = styled.div`
    font-family:'Freshman', Arial;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color:${COLOR.light};
    margin: 0;
    background-color: rgb(22,22, 22, 0.7);
    border-radius: 10px;
    padding: 20px;
    h1, h2, h3, h4, h5, h6 {
        margin:5px;
        color:${COLOR.light};
        font-family:'Freshman', Arial;
    }

    ${props => props.gameList && css`
    background-color: rgb(0, 150, 0, 0.3);
    width:350px;
    margin:10px;
    h1 {
        font-size:2.2rem;
        margin:0;
    }
  `}

  ${props => props.pastGameList && css`
  background-color: rgb(150, 150, 0, 0.3);
    width:350px;
    margin:10px;
    h1 {
        font-size:2.2rem;
        margin:0;
    }
  `}
 
 
`