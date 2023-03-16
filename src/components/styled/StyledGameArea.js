import styled, { css } from "styled-components";
import Container from "../DragAndDrop/BenchContainer";
// styled <Container/> component


export const StyledGameArea = styled.div`
  font-family: "Forum", Arial;
  letter-spacing: 0.15rem;
  border-bottom: 5px solid rgb(245, 245, 245, 0.3);
  border-radius: 5px;
  
  width: 430px;
max-width: 80vw;
height: 160px;
  padding: 10px;
margin: 0 30px;
  
display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  overflow: hidden;
  justify-content: flex-start;

  box-shadow: 0 0 10px rgba(245, 245, 245, 0.5);
  background-color: rgb(0, 80, 0, 0.3);
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  a {
    color: rgb(245, 245, 245);
    text-decoration: none;
  }

  p {
    margin: 5px 0;
  }


  &:hover {
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        transform: scale(1);
      }
  
  /* ${(props) =>
        props.selection &&
        css`
            width: 430px;

     
    `} */

 

   
`;
