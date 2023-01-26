import styled from "styled-components";

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


    &.delete {
        background-color: red;
        color: white;
    }

    &.edit {
        background-color: green;
        color: white;
    }

    &.add {
        background-color: blue;
        color: white;
    }
    
 
`