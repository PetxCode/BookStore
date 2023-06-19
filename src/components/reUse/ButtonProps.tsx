import React from 'react'
import styled from 'styled-components'

interface iButton {
    title?: string
    bg?: string
}

const ButtonProps: React.FC<iButton> = ({ title, bg }) => {
    return (
        <div>
            <Main bg={bg}>
                {title}
            </Main>
        </div>
    )
}

export default ButtonProps

const Main = styled.div<{ bg?: string }>`
padding: 10px 18px;
background-color: ${({ bg }) => bg ? "transparent" : "black"};
color: ${({ bg }) => bg ? "black" : "white"};
border-radius:3px;

transition: all 350ms;
:hover{
    cursor: pointer;
    transform: translate(0, -5px);
}
`