import styled from 'styled-components';

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 500px;   
    /* height: 100%; */
    background-color: #f5f5f5;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 20px;
    input {
        width: 100%;
        height: 40px;
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 10px;
        margin-bottom: 10px;
        font-size: 16px;
    }
    button {
        width: 100%;
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
