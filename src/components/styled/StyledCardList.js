import styled from "styled-components";

export const StyledCardList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin:10;
    max-width: 98vw;
    &.games {
        
        flex-wrap: wrap;
        justify-content: space-around;
    }
    &.div {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
    }
 
`
