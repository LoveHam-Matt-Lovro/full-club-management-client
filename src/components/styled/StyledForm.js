import styled from 'styled-components';

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: left;
    justify-content: center;
    width:70vw;
    max-height:50vh;  
    /* height: 100%; */
    background-color: rgb(22,22, 22, 0.5);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 20px;
    label {
        width:30vw;
    }
    input, select, textarea {
box-sizing: border-box;
        width:30vw;
        height: 40px;
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 5px;
        margin-bottom: 5px;
        font-size: 16px;
    }
   
    button {
        width: 25vw;
        height: 40px;
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 10px;
        margin-top:10px;
        margin-bottom: 10px;
        margin-left:2.5vw;
        font-size: 16px;
        background-color: #f5f5f5;
        cursor: pointer;
        &:hover {
            background-color: #ccc;
        }
    }

    h4 {
        margin:0;
    }
    
`;
