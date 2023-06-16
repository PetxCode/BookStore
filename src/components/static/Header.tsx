import { GiBookshelf } from "react-icons/gi"
import { FiSearch } from "react-icons/fi"
import styled from "styled-components"

const Header = () => {
    return (
        <div>
            <Container>
                <Main>
                    <LogoSide>
                        <LogoImage />

                        <LogoTitle>BookStore</LogoTitle>
                    </LogoSide>

                    <SearchButton>
                        <SearchIcon />
                        <Button>Upload Books</Button>
                    </SearchButton>
                </Main>
            </Container>
        </div>
    )
}

export default Header

const Button = styled.div`
color: white;
background-color: #024ba0;
padding: 12px 20px;
border-radius: 5px;
margin-left: 4px;
transition: all 360ms;

:hover{
cursor: pointer;
transform: scale(1.02);
}

`

const SearchIcon = styled(FiSearch)`
font-size: 25px;
color: silver
`

const SearchButton = styled.div`
display:flex;
align-items: center;
`

const LogoTitle = styled.div``
const LogoImage = styled(GiBookshelf)`
font-size: 20px;
color: black;
width: 30px;
height: 30px;
border-radius: 50%;
border: 2px solid black;
display: flex;
justify-content: center;
align-items: center;
margin-right: 5px
`

const LogoSide = styled.div`
display:flex;
align-items: center;
transition: all 360ms;

:hover{
    cursor: pointer;
    opacity: 0.9;
    transform: translate(0, -5px);
}
`


const Main = styled.div`
width: 95%;
height: 80px;
justify-content: space-between;
align-items: center;
display: flex;
background-color: white;
`

const Container = styled.div`
width: 100%;
height: 80px;
justify-content: center;
display: flex;
background-color: white;

`