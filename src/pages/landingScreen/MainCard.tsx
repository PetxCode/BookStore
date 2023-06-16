import { MdVisibility } from 'react-icons/md'
import styled from 'styled-components'
import pix from "../../assets/Bro2.jpg"
import { useState } from 'react'

const data = [
    {
        topName: "motivation",
        image: "",
        icon: "I",
        name: "Peter Pan",
        view: 12,

    }
]

const MainCard = () => {
    const [toggle, setToggle] = useState<boolean>(false)
    return (
        <div>
            <Container>
                <Main>
                    <CardView>
                        <Card>
                            <TopSide>
                                <Image src={pix} />
                                <Display>
                                    <Text>Text</Text>
                                </Display>
                            </TopSide>
                            <Content
                                onMouseEnter={() => {
                                    setToggle(true)
                                }}
                                onMouseLeave={() => {
                                    setToggle(false)
                                }}
                            >
                                <LeftSide>
                                    <CharAT>L</CharAT>
                                    <Title>Leonard</Title>
                                </LeftSide>
                                <RightSide

                                >
                                    <Icon />
                                    <Count>3</Count>
                                </RightSide>
                            </Content>
                        </Card>
                        {
                            toggle ? <View>
                                show
                            </View> : null
                        }
                    </CardView>
                </Main>
            </Container>
        </div>
    )
}

export default MainCard

const View = styled.div`
width: 300px;
height: 200px;
background-color: silver;
position: absolute;
top:0;
left:0
`


const Display = styled.div`
width: 300px;
height: 200px;
background: rgb(249,249,249);
background: linear-gradient(0deg, #050505 0%,  rgba(0,0,0,0) 100%);
position: absolute;
bottom:0;
left:0;
display:none;
transition: all 350ms;

`


const TopSide = styled.div`
position: relative;
width: 100%;
height: 330px;
transition: all 350ms;


:hover ${Display}{
display:flex;
align-items: flex-end;
transition: all 350ms;
}
`

const CardView = styled.div`
position: relative;
`

const Text = styled.div`
color: white;
margin-left: 20px;
margin-bottom: 20px;
`

const Count = styled.div``

const Icon = styled(MdVisibility)`
color: black;
margin-right: 5px
`

const RightSide = styled.div`
display: flex;
align-items: center;
z-index:2;
`

const Title = styled.div``

const CharAT = styled.div`
width:30px ;
height:30px ;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
background-color: darkorange;
color: white;
margin-right: 10px;
`

const LeftSide = styled.div`
display: flex;
align-items: center;
`

const Content = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`

const Image = styled.img`
width: 100%;
height: 330px;
object-fit: cover;
`

const Card = styled.div`
width: 300px;
height: 400px;
border-radius: 5px 5px 0px 0px;
overflow: hidden;
`


const Main = styled.div`
width: 100%;
display: flex;
flex-wrap:wrap;
justify-content: center;
`
const Container = styled.div`
min-height: 500px;
padding-top: 20px;
`