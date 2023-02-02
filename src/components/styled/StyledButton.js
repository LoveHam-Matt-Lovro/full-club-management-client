import styled, { css } from "styled-components";
import { COLOR, textContrast } from "../../Context/constants";

export const StyledButton = styled.button`
  font-family: "Forum", Arial;
  letter-spacing: 0.1rem;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  border: none;
  font-size: 1rem;
  font-weight: 10;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }

  ${(props) => {
    switch (props.mode) {
      case "view":
        return css`
          background-color: ${COLOR.primary};
          color: ${textContrast(COLOR.primary)};
        `;
      case "edit":
        return css`
          background-color: ${COLOR.dark};
          color: ${textContrast(COLOR.dark)};
        `;
      default:
        return css`
          background-color: ${COLOR.background};
          color: ${textContrast(COLOR.background)};
        `;
    }
  }}

  ${(props) =>
    props.primary &&
    css`
      background-color: ${COLOR.primary};
      color: white;
    `}
    ${(props) =>
    props.secondary &&
    css`
      background-color: ${COLOR.secondary};
      color: white;
    `}
    ${(props) =>
    props.danger &&
    css`
      background-color: ${COLOR.danger};
      color: white;
    `}

    ${(props) =>
    props.submit &&
    css`
      background-color: ${COLOR.success};
      color: white;
    `}
`;
