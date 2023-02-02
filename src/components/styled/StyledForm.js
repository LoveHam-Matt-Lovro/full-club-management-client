import styled, { css } from "styled-components";
import { COLOR, textContrast } from "../../Context/constants";

export const StyledForm = styled.form`
  font-family:'Forum', Arial;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background-color: rgb(22, 22, 22, 0.7);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
  label {
    width: 30vw;
  }
  input,
  select,
  textarea {
    font-family:Arial;
    box-sizing: border-box;
    width: 30vw;
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
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 2.5vw;
    font-size: 16px;
    background-color: #f5f5f5;
    cursor: pointer;
    &:hover {
      background-color: #ccc;
    }
  }

  h4 {
    margin: 0;
  }

  ${(props) =>
    props.newGame &&
    css`
      flex-wrap: nowrap;
      button {
        width: 10vw;
      }
      .submit {
        background-color: ${COLOR.success};
        border: 1px solid ${COLOR.success};
        color: ${textContrast(COLOR.success)};
      }
    `}

  ${(props) =>
    props.signUp &&
    css`
      max-height:320px;
      width:80vw;
      .submit {
        width: 10vw;
        background-color: ${COLOR.success};
        border: 1px solid ${COLOR.success};
        color: ${textContrast(COLOR.success)};
      }
    `}
`;
