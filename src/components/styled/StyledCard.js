import styled from "styled-components";

export const StyledCard = styled.div`
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin: 20px;
    width: 600px;
    max-width: 80vw;
    height: 300px;
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

    &:hover {
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        transform: scale(1.05);
    };
    &.review {
       height: 100px;
       width: 1200px;
       max-width: 80vw;
    }
 
`