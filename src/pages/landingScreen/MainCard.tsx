import { MdVisibility } from 'react-icons/md'
import styled from 'styled-components'
import pix from "../../assets/choice.jpg"
import pix1 from "../../assets/1.jpg"
import pix2 from "../../assets/2.jpg"
import pix3 from "../../assets/3.jpg"
import pix4 from "../../assets/4.webp"
import pix5 from "../../assets/5.jpg"
import pix6 from "../../assets/6.jpg"
import pix7 from "../../assets/7.jpg"
import pix8 from "../../assets/8.jpg"
import pix9 from "../../assets/9.jpg"
import pix10 from "../../assets/10.jpg"
import pix11 from "../../assets/11.jpg"
import pix12 from "../../assets/12.jpg"
import pix13 from "../../assets/13.jpg"
import pix14 from "../../assets/14.jpg"
import { useState } from 'react'

const data = [
    {
        topName: "motivation",
        image: `${pix}`,
        icon: "I",
        name: "Peter Pan",
        view: 12,

    },
    {
        topName: "motivation",
        image: `${pix1}`,
        icon: "I",
        name: "Peter Pan",
        view: 12,

    },
    {
        topName: "motivation",
        image: `${pix2}`,
        icon: "I",
        name: "Peter Pan",
        view: 12,

    },
    {
        topName: "motivation",
        image: `${pix3}`,
        icon: "I",
        name: "Peter Pan",
        view: 12,

    },
    {
        topName: "motivation",
        image: `${pix4}`,
        icon: "I",
        name: "Peter Pan",
        view: 12,

    },
    {
        topName: "motivation",
        image: `${pix5}`,
        icon: "I",
        name: "Peter Pan",
        view: 12,

    },
    {
        topName: "motivation",
        image: `${pix6}`,
        icon: "I",
        name: "Peter Pan",
        view: 12,

    },
    {
        topName: "motivation",
        image: `${pix7}`,
        icon: "I",
        name: "Peter Pan",
        view: 12,

    },
    {
        topName: "motivation",
        image: `${pix8}`,
        icon: "I",
        name: "Peter Pan",
        view: 12,

    },
    {
        topName: "motivation",
        image: `${pix9}`,
        icon: "I",
        name: "Peter Pan",
        view: 12,

    },
    {
        topName: "motivation",
        image: `${pix10}`,
        icon: "I",
        name: "Peter Pan",
        view: 12,

    },
    {
        topName: "motivation",
        image: `${pix11}`,
        icon: "I",
        name: "Peter Pan",
        view: 12,

    },
    {
        topName: "motivation",
        image: `${pix12}`,
        icon: "I",
        name: "Peter Pan",
        view: 12,

    },
    {
        topName: "motivation",
        image: `${pix13}`,
        icon: "I",
        name: "Peter Pan",
        view: 12,

    },
    {
        topName: "motivation",
        image: `${pix14}`,
        icon: "I",
        name: "Peter Pan",
        view: 12,

    },
    {
        topName: "motivation",
        image: `${pix3}`,
        icon: "I",
        name: "Peter Pan",
        view: 12,

    },
    {
        topName: "motivation",
        image: `${pix5}`,
        icon: "I",
        name: "Peter Pan",
        view: 12,

    },
    {
        topName: "motivation",
        image: `${pix8}`,
        icon: "I",
        name: "Peter Pan",
        view: 12,

    },
    {
        topName: "motivation",
        image: `${pix10}`,
        icon: "I",
        name: "Peter Pan",
        view: 12,

    },
    {
        topName: "motivation",
        image: `${pix14}`,
        icon: "I",
        name: "Peter Pan",
        view: 12,

    },
]



const MainCard = () => {
    const [toggle, setToggle] = useState<boolean>(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage, setPostPerPage] = useState(4)

    const onToggle = (id: any) => {
        setToggle(!toggle)
    }

    const lastPost = currentPage * postPerPage
    const firstPost = lastPost - postPerPage

    const viewPost = data.slice(firstPost, lastPost)

    let pages: number[] = [];
    let totalPage = data.length

    for (let i = 1; i < Math.ceil(totalPage / postPerPage); i++) {
        pages.push(i)
    }

    return (
        <div>
            <Container>
                <Main>
                    {
                        viewPost?.map((props: any, i: number) => (
                            <CardView key={i} >
                                <Card>
                                    <TopSide>
                                        <Image src={props.image} />
                                        <Display>
                                            <Text>Text</Text>
                                        </Display>
                                    </TopSide>
                                    <Content>
                                        <LeftSide>
                                            <CharAT>{i + 1}
                                                <ShowBox>
                                                    <Box />
                                                    <View>
                                                        showing View
                                                    </View>
                                                </ShowBox>
                                            </CharAT>
                                            <Title>Leonard</Title>
                                        </LeftSide>
                                        <RightSide>
                                            <Icon />
                                            <Count>3</Count>
                                        </RightSide>


                                    </Content>
                                </Card>

                            </CardView>
                        ))
                    }

                </Main>
                <Button>Load More</Button>
                <br />
                <br />
                <HolderButton>
                    {
                        pages.map((props: number, i: number) => (
                            <Button key={i} bg={props === currentPage ? "f" : ""}
                                onClick={() => {
                                    setCurrentPage(props)
                                }}
                            >{props}</Button>
                        ))
                    }
                </HolderButton>


                <br />
                <br />
            </Container>
        </div>
    )
}

export default MainCard

const Box = styled.div`
width:20px;
height:20px;
background-color: silver;
position: absolute;
bottom:75px;
left: 6px;
transform: rotate(45deg)
`
const ShowBox = styled.div`
width: 100%;
opacity: 0;
display:none;
position: absolute;
bottom:0px;
left: 0px;
z-index: 1;
transition: all 350ms;
`
const HolderButton = styled.div`
display: flex;
`

const Button = styled.div<{ bg?: string }>`
padding: 10px 18px;
background-color: ${({ bg }) => bg ? "darkorange" : "black"} ;
color: white;
border-radius: 3px;
margin: 0 5px;
transition: all 350ms;

:hover{
    cursor: pointer;
    transform: translate(0, -5px);
}
`

const View = styled.div`
width: 290px;
height: 200px;
border-radius: 10px;
background-color: silver;
position: absolute;
bottom:80px;
left:0;
padding: 10px;
`


const Display = styled.div`
width: 300px;
height: 100px;
background: rgb(249,249,249);
background: linear-gradient(0deg, #050505 0%,  rgba(0,0,0,0) 100%);
position: absolute;
bottom:0;
left:0;
transition: all 350ms;
opacity: 0;
display:flex;
align-items: flex-end;

`


const TopSide = styled.div`
position: relative;
width: 100%;
height: 330px;
transition: all 350ms;


:hover ${Display}{
position:absolute;
bottom: 0;
left: 0;

transition: all 350ms;
opacity: 1
}
`

const CardView = styled.div`
position: relative;
margin: 10px;
transition: all 360ms;

:hover{
    cursor: pointer;
    transform: translate(0, -5px);
}
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
transition: all 350ms;

:hover ${ShowBox} {
    transition: all 350ms;
opacity: 1;
display:block
}
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
display: flex;
flex-direction: column;
align-items: center;
`


                                    // onMouseEnter={() => {
                                    //     onToggle(i)
                                    // }}
                                    // onMouseLeave={() => {
                                    //     onToggle(i)
                                    // }}