/** @jsxImportSource @emotion/react */
import { jsx, keyframes } from "@emotion/react";
import styled from '@emotion/styled/macro'
import * as colors from './colors'
import * as mq from './mq'
import {FaSpinner} from 'react-icons/fa'


const spin = keyframes({
    '0%': {transform: "rotate(0deg)"},
    '100%': {transform: "rotate(360deg)"},
})
export const Spinner = styled(FaSpinner)({
    animation: `${spin} 1s linear infinite`
})

Spinner.defaultProps = {
    'aria-label': "loading"
}
export function FullSpinner(){
    
}





export const ButtonGroup  = styled.div({
    padding: "0.5rem 0"
})
export const Button = styled.button({
    padding: "0.4rem 0.8rem",
    textTransform: "uppercase",
    borderColor: "transparent",
    borderRadius: '6px',
    cursor: "pointer",
    color: colors.white,
    backgroundColor: colors.danger, 

    [mq.small]: {
        padding: ".8rem 1rem",
        backgroundColor: colors.primary
    },
    [mq.medium]: {
        padding: "1rem",
        backgroundColor: colors.orange
    },


    "&:hover": {
        backgroundColor: colors.dangerHover
    }
},
 ({type, mr = 0}) => ({
     marginRight: mr,
     background: type === "reset" ? colors.danger : colors.primary,
     "&:hover": {
        background: type === "reset" ? colors.dangerHover : colors.primaryHover,
     }
 })

)





export const WrapApp = styled.div`
   max-width: 1200px;
   margin: 1rem auto;
`
export const WrapForm = styled.form({
  maxWidth: "400px",
  margin: "1rem auto"  
})

export const FormGroup = styled.div({
    marginBottom: "1rem"
}) 

export const Label = styled.label({
    display: "block",
    marginBottom: "1rem",
})

export const Input = styled.input({
    display: "block",
    width: "100%",
    padding: "0.6rem",
    marginBottom: "1rem",
})