import React from 'react'
import styled from 'styled-components'
import { FiSearch } from "react-icons/fi"
const dataMap: string[] = [
    "Animation",
    "Movie",
    "Comic",
    "Documentary",
    "Thriller",
    "Action",
    "Dramer",
    "Music",
    "Games",
    "Love",
    "Romance",
]
const dataMapi: string[] = [
    "landing page",
    "ios",
    "food",
    "landingpage",
    "uxdesign",
    "app design",

]

const Hero = () => {
    return (
        <div>
            <Container>
                <Video src='https://cdn.dribbble.com/uploads/39417/original/49dbf46eae15d227fc95a69cee31251e.mp4?1657824906'
                    muted
                    autoPlay
                    loop
                />
                <BlackLay />
                <Main>
                    <NavC>
                        {
                            dataMap?.map((props: string, i: number) => (
                                <Nav key={i} >{props}</Nav>
                            ))
                        }


                    </NavC>

                    <Title>Explore the world’s leading design portfolios</Title>

                    <SubTitle>Millions of designers and agencies around the world showcase their portfolio work on Dribbble - the home to the world’s best design and creative professionals.</SubTitle>

                    <InputHolder>
                        <SearchIcon />
                        <Input placeholder="Search a Book" />
                    </InputHolder>

                    <Trend>
                        <Sub>Trending searches</Sub>
                        <NavC>
                            {
                                dataMapi?.map((props, i) => (
                                    <Searches key={i} >{props}</Searches>
                                ))
                            }

                        </NavC>
                    </Trend>
                </Main>
            </Container>
        </div>
    )
}

export default Hero

const Searches = styled.div`
border: 1px solid;
border-color:  #dadada;
padding: 10px 18px;
font-size: 12px;
border-radius: 30px;
transition: all 350ms;
 margin: 5px;
 :hover{
    cursor: pointer;
    border-color:  white;
 }
`

const Sub = styled.div`
width: 250px;
`

const Trend = styled.div`
display: flex;
margin-top: 30px;
align-items: center;
`

const SearchIcon = styled(FiSearch)`
font-size: 25px;
margin:0 5px;
`

const Input = styled.input`
outline: none;
border: 0;
height: 80%;
flex: 0.96;
::placeholder{
    font-family: Poppins;
    color: silver
};

caret-color: red;

`

const InputHolder = styled.div`
width: 400px;
height: 50px;
border-radius: 40px;
background-color: white;
color: black;
display: flex;
align-items: center;
margin-top: 30px
`

const SubTitle = styled.div`
margin-top: 20px;
text-align: center;
font-size: 15px;
width: 50%;
font-weight: 100;

`

const Title = styled.div`
font-weight: 700;
font-size: 40px;
text-align:center ;
margin-top: 40px;
width: 50%
`


const Nav = styled.div`
padding: 13px 20px;
background-color: rgba(0,0,0,0.5);
color: white;
border-radius: 30px;
margin: 5px;
transition: all 350ms;
:hover{
    cursor: pointer;
    background-color: white;
color: black;
}
`

const NavC = styled.div`
display: flex;
align-items: center;
justify-content: center;
overflow: hidden;
width: 100%;
`

const Main = styled.div`
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: white
`

const BlackLay = styled.div`
width: 100%;
height: 100%;
background-color: rgba(0,0,0,0.6);
position: absolute;
top: 0;
left: 0
`

const Video = styled.video`
width: 100%;
height: 100%;
object-fit: cover;
`

const Container = styled.div`
width: 100%;
height: calc(80vh - 80px);
position: relative;
` 