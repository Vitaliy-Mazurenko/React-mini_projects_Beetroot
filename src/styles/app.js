import styled, {keyframes} from "styled-components"
import {FaSpinner} from "react-icons/fa"

const spin = keyframes`
 0% { transform: rotate(0deg)}
 100% { transform: rotate(360deg)}
`
export const Spinner = styled(FaSpinner)`
  animation: ${spin} 1s linear infinite;
`

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
  )
}

export const Button = styled.button({
  background: "lightslategray",
  color: "#ffffff",
  cursor: "pointer",
  textTransform: "uppercase",
  padding: " 0 12px",
  display: "flex",
  alignItems: "center",
})
