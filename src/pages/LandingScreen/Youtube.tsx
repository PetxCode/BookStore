import { BsThreeDotsVertical } from 'react-icons/bs'
import styled from 'styled-components'

const Youtube = () => {
    return (
        <div>
            <Container>
                <Main>
                    <Card>
                        <Top>
                            <Video src="https://cdn.dribbble.com/userupload/7970523/file/original-93af84cd7ed17a4ff9dff4deb4952500.mp4"
                                loop
                                muted
                                autoPlay
                            />
                            <Image src="https://cdn.dribbble.com/userupload/7970521/file/still-5b844f29f5a0ca4c04666c72d4f5b5c5.png?compress=1&resize=640x480&vertical=center" />
                        </Top>

                        <Bottom>
                            <Avatar src="https://cdn.dribbble.com/users/4949363/avatars/small/606bb85ee728fd3d78bbddf7e70b3901.jpg?1676454777" />
                            <Div>
                                <Title>WEDDING DATE - TAAOOMA & TWYSE</Title>
                                <Name>TAAOOMA TV</Name>
                                <Views>
                                    <View>274K views</View>
                                    <Dot />
                                    <View>1 month ago</View>
                                </Views>
                            </Div>
                            <Icon />
                        </Bottom>
                    </Card>
                </Main>
            </Container>
        </div>
    )
}

export default Youtube

const Icon = styled(BsThreeDotsVertical)`
font-size: 20px;
`

const Dot = styled.div`
width: 5px;
height: 5px;
border-radius:50%;
background-color: currentColor;
margin: 0 5px;
font-size: 10px
`
const View = styled.div``

const Views = styled.div`
text-transform: capitalize;
color: lightgray;
display: flex;
align-items: center;
`

const Name = styled.div`
text-transform: capitalize;
color: gray
`

const Title = styled.div`
font-weight: 600;
font-size: 18px;
text-transform: capitalize;
`

const Div = styled.div`
flex:1;
margin: 0 5px
`

const Avatar = styled.img`
width: 30px;
height: 30px;
border-radius: 50%;
object-fit: cover;
`

const Bottom = styled.div`
display: flex;
justify-content: space-between;
margin-top: 10px;
`

const Video = styled.video`
width: 100%;
height: 350px;
position: absolute;
top: 0;
left:0;
object-fit: cover;
z-index: 10;
opacity: 0;
transition: all 350ms;

`

const Image = styled.img`
width: 100%;
height: 350px;
position: absolute;
top: 0;
left:0;
object-fit: cover;
transition: all 350ms;
:hover{
    opacity:0;
}
`

const Top = styled.div`
width: 100%;
height: 350px;
overflow: hidden;
border-radius: 5px;
position: relative;
`;

const Card = styled.div`
width: 350px;
height: 400px;
transition: all 350ms;
margin: 10px;
:hover ${Video} {
    opacity:1;
    width: 100%;
height: 350px;
position: absolute;
top: 0;
left:0;
object-fit: cover;
z-index: 10;
}

:hover{
    cursor: pointer;
}

`

const Main = styled.div`
display: flex;
width: 100%;
justify-content: center;
flex-wrap: wrap;
`

const Container = styled.div`
display: flex;
width: 100%;
justify-content: center;
padding-bottom: 30px;
`