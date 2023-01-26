import styled, { css } from "styled-components";
import { COLOR } from "../../Context/constants";


export const StyledButton = styled.button`

    padding: 0.5rem 1rem;
    border-radius: 5px;
    border: none;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
  

    &:hover {
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        
    };

    ${props => props.primary && css`
        background-color: ${COLOR.primary}; 
        color: white;
    `}
    ${props => props.secondary && css`
        background-color: ${COLOR.secondary};
        color: white;
    `}
    ${props => props.danger && css`
        background-color: ${COLOR.danger};
        color: white;`}

 
    
 
`