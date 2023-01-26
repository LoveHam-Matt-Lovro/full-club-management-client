import styled from "styled-components";

export const StyledCardList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 5% auto;
    &.games {
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-around;
    }
 
`
