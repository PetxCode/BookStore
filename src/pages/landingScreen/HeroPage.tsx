import React from 'react'
import styled from 'styled-components'
import SoftButton from '../../components/reUse/SoftButton'
import { FiSearch } from "react-icons/fi"

const category: string[] = [
    "Performance",
    "Comedy",
    "Action",
    "Love",
    "Romance",
    "Thriller",
    "Performance",
    "Comedy",
    "Action",
    "Love",
    "Romance",
    "Thriller",
    "Performance",
    "Comedy",
    "Action",
    "Love",
    "Romance",
    "Thriller",
]


const HeroPage = () => {
    return (
        <div>
            <Container>
                <Video src='https://cdn.dribbble.com/uploads/39417/original/49dbf46eae15d227fc95a69cee31251e.mp4?1657824906'
                    loop
                    autoPlay
                    muted
                />
                <BlackLayer />
                <Holder>
                    <SmallBox>
                        <Div>
                            {
                                category?.map((props: string, i: number) => (
                                    <SoftButton title={props} bg='o' key={i} />
                                ))
                            }
                        </Div>
                    </SmallBox>
                    <Title>Explore the world’s leading Books
                        and Autors</Title>
                    <SubTitle>Millions of designers and agencies around the world showcase their portfolio work on Dribbble - the home to the world’s best design and creative professionals.</SubTitle>
                    <InputHolder>
                        <Icon />
                        <Input placeholder='Enter your Favourite Book' />
                    </InputHolder>
                </Holder>

            </Container>
        </div>
    )
}

export default HeroPage

const Input = styled.input`
border:0;
outline: none;
flex:0.96;
font-size: 16px;

::placeholder{
    color: silver;
    font-family: Montserrat;
}

caret-color: red
`

const Icon = styled(FiSearch)`
font-size: 25px;
color: silver;
margin: 0 5px
`

const InputHolder = styled.div`
width: 400px;
height: 50px;
border-radius: 30px;
background-color: white;
display: flex;
align-items: center;
margin-top: 20px
`

const SubTitle = styled.div`
text-align: center;
font-size: 14px;
font-weight: 100;
margin: 20px 0;
width: 60%
`

const Title = styled.div`
font-size: 35px;
font-weight: 500;
width: 60%;
text-align: center
`

const Div = styled.div`
display: flex;
margin-bottom: 50px
`

const SmallBox = styled.div`
display: flex;
overflow: hidden;
width: 95%;
overflow-x: hidden;

`

const Holder = styled.div`
width: 100%;
height: 100%;
position: absolute;
top:0;
left:0;

display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
color: white

`

const BlackLayer = styled.div`
width: 100%;
height: 100%;
background-color: rgba(0,0,0,0.7);
position: absolute;
top:0;
left:0;

`

const Video = styled.video`
position: absolute;
top: 0;
left:0;
width: 100%;
height: 100%;
object-fit: cover;
`


const Container = styled.div`
width: 100%;
height: calc(100vh - 80px);
position: relative;
`