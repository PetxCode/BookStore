import React from 'react'
import styled from 'styled-components'
import ButtonProps from '../reUse/ButtonProps'

const Header = () => {
    return (
        <div>
            <Container>
                <Main>
                    <Nav>
                        <Logo>Logo</Logo>
                        <NavTitle>
                            <Title>Find Talents</Title>
                            <Title>For designers</Title>
                            <Title>Inspiration</Title>
                            <Title col='l' >Go Pro</Title>
                        </NavTitle>
                    </Nav>

                    <But>
                        <ButtonProps title="Log In" bg="l" />
                        <ButtonProps title="Sign Up" />
                    </But>
                </Main>
            </Container>
        </div>
    )
}

export default Header

const But = styled.div`
display: flex;
`

const NavTitle = styled.div`
display:flex;
align-items: center;
`

const Title = styled.div<{ col?: string }>`
margin: 0 10px;
transition: all 380ms;
color: ${({ col }) => col ? "pink" : "black"};
font-weight: 600;
:hover{
    cursor: pointer;
    transform: translate(0, -3px);
}
`

const Nav = styled.div`
display: flex;
align-items: center;
`

const Logo = styled.div`
margin-right: 30px;
font-size: 30px;
transition: all 380ms;

font-weight: 600;
:hover{
    cursor: pointer;
    transform: scale(1.05);
}

`

const Main = styled.div`
width: 95%;
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;
`

const Container = styled.div`
width: 100%;
height: 80px;
display: flex;
justify-content: center;
`