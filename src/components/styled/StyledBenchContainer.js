import styled, { css } from "styled-components";
import Container from "../DragAndDrop/BenchContainer";
// styled <Container/> component


export const StyledBenchContainer = styled.div`
  font-family: "Forum", Arial;
  letter-spacing: 0.15rem;
  
  border-radius: 5px;
  
  width: 430px;
max-width: 80vw;
height: 480px;
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
  background-color: rgb(22, 22, 22, 0.7);
  transition: transform 0.3s ease-in-out;


  flex-wrap: wrap;


      border: none;
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
  

 

   
`;
