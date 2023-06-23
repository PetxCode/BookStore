import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"
import { getAllEntries } from '../../utils/APIs'
import data from "../../data/db.json"
const Dragged = () => {

    const [state, setState] = useState(data.data)


    useEffect(() => {
        getAllEntries().then(res => {
            return setState(res)
        })
    }, [])


    const drapFunction = (res: any) => {
        try {
            if (!res.destination) return

            const items: any = [...state]
            const [remove] = items.splice(res.source.index, 1)
            items.splice(res.destination.index, 0, remove)

            setState(items)


        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div>
            <Container>
                <DragDropContext onDragEnd={drapFunction} >
                    <Droppable droppableId='dropD' >
                        {((provided) => (
                            <Main>
                                {
                                    state.map((props: any, i: number) => (
                                        <Draggable
                                            draggableId={`${i}`}
                                            index={i}
                                            key={i}
                                        >
                                            {(provided => (
                                                <Card
                                                    {...provided.dragHandleProps}
                                                    {...provided.draggableProps}
                                                    ref={provided.innerRef}
                                                >
                                                    <Image
                                                        src={props?.image3}
                                                        alt="Reality"
                                                    />
                                                    <Desc>{props?.projectDescription}</Desc>
                                                </Card>
                                            ))}
                                        </Draggable>
                                    ))
                                }
                                {provided.placeholder}
                            </Main>
                        ))}
                    </Droppable>
                </DragDropContext>


                <Main>

                </Main>
            </Container>
        </div>
    )
}

export default Dragged

const Desc = styled.div`
margin-right: 10px;
`

const Image = styled.img`
width: 170px;
height: 130px;
border-radius: 5px;
object-fit: cover;
margin:0 10px;
`

const Card = styled.div`
width: 350px;
height: 140px;
border-radius: 5px;
border: 1px solid silver;
display: flex;
justify-content: space-between;
align-items:center;
margin: 5px 0;
`

const Main = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 40px
`

const Container = styled.div`
display: flex;
justify-content: center;
width: 100%
`