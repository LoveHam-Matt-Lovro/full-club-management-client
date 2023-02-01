import styled, { css } from "styled-components";

export const StyledCard = styled.div`
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin: 20px;
    width: 400px;
    max-width: 80vw;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
    align-items: center;
    text-align: center;
    position: relative;
    overflow: hidden;
    transition: transform 0.3s ease-in-out;
 
    color: black;
        text-decoration: none;

background-color: rgba(238, 255, 255, 0.8);

        

    &:hover {
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        transform: scale(1.05);
    };
    &.review {
       height: 100px;
       width: 1200px;
       max-width: 80vw;
    }

    ${props => props.player && css`
    flex-direction: row;
    padding: 10px;
    margin: 10px;
    width: 200px;
    max-width: 80vw;

    min-height: 30px;
    `}

    ${props => props.selection && css`
    
  
   
    width: 350px;
    max-width: 80vw;
    height: 200px;
justify-content: flex-start;
margin: 0 30px;
background-color: 	rgb(124,252,0,0.5);
border-bottom: 5px solid white;

    &:hover {
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        transform: scale(1);
    };
    `}
    ${props => props.none && css`
    
height:600px;background-color: 	rgb(245,245,245,0.5);

    `}
   
 
`


