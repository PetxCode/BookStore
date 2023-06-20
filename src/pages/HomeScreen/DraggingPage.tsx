import styled from "styled-components"
import pix1 from "../../assets/1.jpg"
import pix2 from "../../assets/2.jpg"
import pix3 from "../../assets/3.jpg"
import pix4 from "../../assets/4.jpg"
import pix5 from "../../assets/5.jpeg"
import pix6 from "../../assets/6.jpeg"
import pix7 from "../../assets/7.jpeg"
import pix8 from "../../assets/8.jpeg"
import pix9 from "../../assets/9.jpeg"


import { DragDropContext, Draggable } from "react-beautiful-dnd"
import { StrictModeDroppable as Droppable } from "../../components/common/StrickMode"
import { useState } from "react"



const data = [
    { name: "cup-cake1", image: pix1 },
    { name: "cup-cake2", image: pix2 },
    { name: "cup-cake3", image: pix3 },
    { name: "cup-cake4", image: pix4 },
    { name: "cup-cake5", image: pix5 },
    { name: "cup-cake6", image: pix6 },
    { name: "cup-cake7", image: pix7 },
    { name: "cup-cake9", image: pix8 },
    { name: "cup-cake9", image: pix9 },
]




const DraggingPage = () => {
    const [newData, setNewData] = useState<{}[]>(data)

    const dragged = (result: any) => {
        if (!result.destination) return

        const items = Array.from(data)
        const [preV] = items.splice(result.source.index, 1)
        items.splice(result.destination.index, 0, preV)

        setNewData(items)
    }

    return (
        <div>
            <Container>

                <DragDropContext onDragEnd={dragged}>
                    <Droppable droppableId="droppableID">
                        {(provided) => (
                            <Main {...provided.droppableProps} ref={provided.innerRef}>
                                {newData.map((props: any, i) => (
                                    <Draggable key={i} index={i} draggableId={`${i}`}>
                                        {(provided) => (
                                            <Card
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                ref={provided.innerRef}>
                                                <Image src={props.image} />
                                                <Name>{props.name}</Name>
                                            </Card>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </Main>
                        )}
                    </Droppable>
                </DragDropContext>



            </Container>
        </div>
    )
}

export default DraggingPage

const Name = styled.div`
margin-right: 20px

`

const Image = styled.img`
width: 100px;
height: 80px;
border-radius: 5px;
object-fit: cover;
margin-left: 20px
`

const Card = styled.div`
width: 300px;
height: 100px;
border: 1px solid silver;
display: flex;
align-items: center;
justify-content: space-between;
border-radius: 5px;
margin: 5px 0;
`

const Main = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 30px 0;
`

const Container = styled.div`
width: 100;
display:flex;
justify-content: center;
`   
