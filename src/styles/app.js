/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import styled, { keyframes } from "styled-components";
import { FaSpinner } from "react-icons/fa";
import { TiDeleteOutline } from "react-icons/ti";

const spin = keyframes`
 0% { transform: rotate(0deg)}
 100% { transform: rotate(360deg)}
`;
export const Spinner = styled(FaSpinner)`
  animation: ${spin} 1s linear infinite;
`;

export const ListItem = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-between",
});
export const Input = styled.input({
  marginRight: "1rem",
});

export const Delete = styled(TiDeleteOutline)({
  width: "25px",
  height: "25px",
  color: "red",
  cursor: "pointer",
  margin: "0 1rem",
});

export function FullSpinner() {
  return (
    <div
      style={{
        fontSize: "4em",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Spinner aria-label="loading" />
    </div>
    //todo
  );
}
