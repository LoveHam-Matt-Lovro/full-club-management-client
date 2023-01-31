import styled from 'styled-components';

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 55vw;
    max-width: 1200px;   
    /* height: 100%; */
    background-color: rgb(245, 245, 245, 0.3);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 20px;
    label {
        width:50vw;
    }
    input, select, textarea {
box-sizing: border-box;
        width: 50vw;
        height: 40px;
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 5px;
        margin-bottom: 10px;
        font-size: 16px;
    }
   
    button {
        width: 25vw;
        height: 40px;
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 10px;
        margin-bottom: 10px;
        font-size: 16px;
        background-color: #f5f5f5;
        cursor: pointer;
        &:hover {
            background-color: #ccc;
        }
    }
    
`;
