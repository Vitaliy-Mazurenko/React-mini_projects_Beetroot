import styled from 'styled-components'

export const Button = styled.button`
   padding: 6px 1rem;
   border: 0;
   color: white;
   transition: all 1s; 
   background: #2a82bd;
   margin-right: ${props => props.mr || 0};


   &:hover {
    cursor: pointer;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
    background-color: #5db0e0;
   }
`
export const NewButton = styled(Button)`
   background: green;
`