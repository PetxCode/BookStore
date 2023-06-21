
import styled from 'styled-components'
import { AiFillHeart } from "react-icons/ai"
import { AiFillEye } from "react-icons/ai"
import { FaRegSave } from "react-icons/fa"


const BodyCard = () => {
    return (
        <div>
            <Container>
                <Main>
                    <CardHolder>
                        <Card> 
                            <VideoBlack>
                                <Video
                                    src="https://cdn.dribbble.com/userupload/7900294/file/original-63268fa12828fada9fecb30a7c12611f.mp4"

                                    muted
                                    loop
                                    autoPlay
                                />
                                <BlackBox>
                                <Name>Name</Name>
                                <Div>
                                        <Icon />
                                    <Icons />
                                </Div>
                                </BlackBox>


                            </VideoBlack>


                            <Image src='https://cdn.dribbble.com/userupload/7900293/file/still-d8e17c139521b05fa516abd1460c56c4.png?compress=1&resize=640x480&vertical=center' />

                        </Card>
                        <Bottom>
                            <LeftSide>
                                <HolderAvatar>
                                    <CardDisplay>
                                        <Box />
                                        <Top>
                                            <Div1>
                                                <Avatar1 />
                                                <Space>Team</Space>
                                            </Div1>
                                            <Div2>
                                                <Title1>emote_agency</Title1>
                                                <Title11>Czech Republic</Title11>
                                            </Div2>

                                            <Follow>Follow +</Follow>
                                        </Top>

                                        <Down>
                                            <ImageHolder />
                                            <ImageHolder />
                                            <ImageHolder />
                                        </Down>

                                    </CardDisplay>
                                    <Avatar />
                                </HolderAvatar>
                                <Title>Lepisov Branding</Title>
                                <Space>Team</Space>
                            </LeftSide>

                            <RightSide>
                                <Holder>
                                    <LoveIcon />
                                    <Count>108</Count>
                                </Holder>
                                <Holder>
                                    <EyeIcon />
                                    <Count>201</Count>
                                </Holder>
                            </RightSide>
                        </Bottom>
                    </CardHolder>
                </Main>
            </Container>
        </div>
    )
}

export default BodyCard

const VideoBlack = styled.div`
width: 350px;
height: 340px;
position: relative;

`

const Box = styled.div`
width: 15px;
height: 15px;
background-color: silver;
position:absolute;
bottom: -7px;
left: 20px;
transform: rotate(45deg);
z-index:-1;

`


const ImageHolder = styled.div`
width: 120px;
height: 100px;
border-radius: 5px;
margin: 0 5px;
background-color: red;

`

const Down = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 10px;
z-index: 10
`

const Follow = styled.div`
padding: 8px 14px;
font-size: 14px;
background-color: white;
color: black;
border-radius: 3px;
margin-right: 5px;
`

const Title1 = styled.div``
const Div2 = styled.div``
const Title11 = styled.div`
font-weight: 100;
font-size: 12px;
`


const Avatar1 = styled.div`
margin-left: 5px;
margin-right: 5px;
border-radius :50% ;
width: 55px;
height: 55px;
background-color: purple;
margin-bottom: -10px;
margin-left: 10px;
`


const Div1 = styled.div`
display: flex;
align-items: center;
flex-direction: column;
padding-top:10px
`

const Top = styled.div`
display:flex;
align-items: center;
justify-content: space-between;
`

const CardDisplay = styled.div`
display:none;

:hover{
    display: block;
}
`


const HolderAvatar = styled.div`
position: relative;


:hover ${CardDisplay}{
    display: block;
    width: 370px;
height: 200px;
background-color: silver;
position: absolute;
bottom: 40px;
left: -10px;
border-radius: 5px;
}
`


const Count = styled.div`
font-size: 10px;
margin-left:2px;
font-weight: 700;

`

const EyeIcon = styled(AiFillEye)`
color: gray;
transition: all 350ms;
font-size: 15px;

:hover{
    color: red
}
`

const LoveIcon = styled(AiFillHeart)`
color: gray;
transition: all 350ms;
font-size: 15px;

:hover{
    color: red
}
`

const Holder = styled.div`
display:flex;
align-items: center;
margin: 0 3px;
`

const RightSide = styled.div`
display: flex;
align-items: center;
margin-right: 5px;

`

const Space = styled.div`
font-size: 13px;
padding: 5px 8px;
background-color: #865c86;
color: white;
border-radius: 2px;
transition: all 350ms;
margin-left: 5px;

:hover{
 background-color: purple;   
}
`

const Title = styled.div`
font-size: 13px;
`

const Avatar = styled.div`
margin-left: 5px;
margin-right: 5px;
border-radius :50% ;
width: 25px;
height: 25px;
background-color: purple;


/* :hover ${CardDisplay} {
    display:block
} */

:hover{
    cursor: pointer;
}


:hover ${CardDisplay}{
    display: block;
    width: 350px;
height: 200px;
background-color: silver;
position: absolute;
bottom: 40px;
}
`

const LeftSide = styled.div`
display:flex;
align-items: center;
position: relative;
`

const Bottom = styled.div`
display:flex;
align-items: center;
justify-content: space-between;
height: 60px;
`

const Icon = styled(FaRegSave)`
padding: 10px;
background: white;
font-size: 20px;
color: gray;
margin: 0 5px;
border-radius: 3px;
`

const Icons = styled(AiFillHeart)`
padding: 10px;
background: white;
font-size: 20px;
color: gray;
margin: 0 5px;
border-radius: 3px;
`

const Div = styled.div`
margin-right: 10px;
`

const Name = styled.div`
margin-left: 10px
`


const Video = styled.video`
width: 350px;
height: 340px;
object-fit: cover;
/* opacity: 0; */
transition: all 350ms;

border-radius: 10px;
:hover{
cursor: pointer;
display: flex;
 position: absolute;
/* top:0;
left:0; */
width: 350px;
height: 340px;
object-fit: cover;
z-index: 1;
opacity: 1;
transition: all 350ms;
display: flex;
}
`


const BlackBox = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

border-radius: 10px;
position: absolute;
z-index: 10;
bottom: 0;
height: 100px;
width: 100%;
background: rgb(249,249,249);
background: linear-gradient(0deg,  #0f0f0f 0%, rgba(0,0,0,0) 100%);
color: white;
padding-bottom: 0px;
opacity: 0;
transition: all 350ms;

:hover ${Video}{
    opacity: 1;
    cursor: pointer;
}
`

const Image = styled.img`
position: absolute;
top:0;
left:0;
width: 350px;
height: 340px;
object-fit: cover;
transition: all 350ms;
border-radius: 10px;
:hover{
transition: all 350ms;

    cursor: pointer;
    opacity:0
}

`

const Card = styled.div`
width: 350px;
height: 340px;
position: relative;
/* overflow: hidden; */

:hover ${BlackBox}{
    opacity: 1;
}

`

const CardHolder = styled.div`
width: 350px;
height: 400px;
/* border: 1px solid silver; */
margin: 10px;
border-radius: 5px 5px 0 0;
/* overflow: hidden; */
`

const Main = styled.div`
display: flex;
flex-wrap:wrap;
justify-content: center;
margin: 20px 0;
`

const Container = styled.div`
width: 100%;
min-height: 30vh;
`