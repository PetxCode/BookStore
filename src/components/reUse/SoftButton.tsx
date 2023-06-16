import React from 'react'
import styled from 'styled-components'

interface iSoft {
    bg?: string;
    title?: string;
}


const SoftButton: React.FC<iSoft> = ({ bg, title }) => {
    return (
        <div>
            <Container bg={bg}>
                <Main>{title}</Main>
            </Container>
        </div>
    )
}

export default SoftButton

const Main = styled.div`
padding: 15px 30px;


`

const Container = styled.div<{
    bg?: string
}>`
background-color: ${({ bg }) => bg ? "rgba(0,0,0,0.7)" : "black"};
color: white;
border-radius: 30px;
transition: all 0.2s ease-in-out;
margin: 10px;
:hover{
    cursor: pointer;
    background-color: ${({ bg }) => bg ? "white" : "black"};
    color: ${({ bg }) => bg ? "black" : "white"};
    /* color: black; */
    transform: ${({ bg }) => bg ? "scale(0.92)" : "scale(1)"};
}
`