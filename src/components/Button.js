import React from 'react'
import styled from 'styled-components'

const Button = styled.button`

font-size: 1rem;
padding: 1rem 1.5rem;
color: white;
border-radius: .5rem;
text-transform: uppercase;
cursor: pointer;
display: inline-block;
background-color: #4747d3;
box-shadow: ${({theme}) => theme.colors.boxShadow};
border: white;
margin-top: 1rem;
transition: all 0.2s;

&:hover{
    transform: scale(0.9);
    background-color: blue;
}


`

export default Button