import styled, { css } from "styled-components";
import { COLOR } from "../../Context/constants";

export const SmallStyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color:${COLOR.light};
    margin: 0;
    background-color: rgb(0, 0, 0, 0.5);
    border-radius: 10px;
    padding: 20px;
    h1, h2, h3, h4, h5, h6 {
        margin:5px;
        color:${COLOR.light};
        font-family:'Freshman', Arial;
    }
 
`