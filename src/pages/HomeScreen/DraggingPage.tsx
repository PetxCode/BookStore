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

import React from "react"
import { DragDropContext, Draggable } from "react-beautiful-dnd"
import { StrictModeDroppable as Droppable } from "../../components/common/StrickMode"
import { useEffect, useState } from "react"
import { deleteOneQuestion, getOneQuestion, getQuestion } from "../../utils/QuestionAPIs"



const data = [
    { id: 15, name: "cup-cake1", image: pix1 },
    { id: 1, name: "cup-cake2", image: pix2 },
    { id: 2, name: "cup-cake3", image: pix3 },
    { id: 3, name: "cup-cake4", image: pix4 },
    { id: 4, name: "cup-cake5", image: pix5 },
    { id: 5, name: "cup-cake6", image: pix6 },
    { id: 6, name: "cup-cake7", image: pix7 },
    { id: 7, name: "cup-cake9", image: pix8 },
    { id: 8, name: "cup-cake9", image: pix9 },
    { id: 9, name: "cup-cake4", image: pix4 },
    { id: 10, name: "cup-cake5", image: pix7 },
    { id: 11, name: "cup-cake6", image: pix6 },
    { id: 12, name: "cup-cake7", image: pix1 },
    { id: 13, name: "cup-cake9", image: pix3 },
    { id: 14, name: "cup-cake6", image: pix8 },
]

const DraggingPage = () => {
    const [newData, setNewData] = useState<{}[]>(data)
    const [state, setState] = useState([])
    const [state1, setState2] = useState(data)

    useEffect(() => {
        const arrayIdsOrder = JSON.parse(localStorage.getItem("getData")!);

        if (!arrayIdsOrder && data?.length) {
            const idsOrderArray = data.map((props) => props.id);
            localStorage.setItem("getData", JSON.stringify(idsOrderArray));
        }

        let myArray;
        if (arrayIdsOrder?.length && data?.length) {
            myArray = arrayIdsOrder.map((props: any) => {
                return data.find((el) => el.id === props);
            });

            const newItems = data.filter((el) => {
                return !arrayIdsOrder.includes(el.id);
            });

            if (newItems?.length) myArray = [...newItems, ...myArray];
        }

        setState(myArray);
    }, [data]);




    const dragged = (result: any) => {
        if (!result.destination) return

        // const items = [...state1]
        // const [preV] = items.splice(result.source.index, 1)
        // items.splice(result.destination.index, 0, preV)
        // setState2(items)

    }



    // const [currentPage, setCurrentPage] = useState<number>(1)
    // const [pagePerView, setPagePerView] = useState<number>(3)

    // const lastView = currentPage * pagePerView
    // const firstView = lastView - pagePerView
    // // const view = newData.slice(firstView, lastView)

    // const pages: number[] = []

    // for (let i = 1; i < Math.ceil(newData.length / pagePerView); i++) {
    //     pages.push(i)
    // }


    const [pick, setPick] = React.useState<string>("")
    const [newState, setNewState] = useState([])
    const [newState1, setNewState1] = useState<any>({})



    console.log(pick)

    const deleteData = () => {
        deleteOneQuestion(parseInt(pick))
    }


    useEffect(() => {
        const newPick = parseInt(pick)       

        getQuestion().then((res: any) => {
            console.log(res)
            return setNewState(res)
        })

        getOneQuestion(newPick).then((res: any) => {
            if (res) {
                return setNewState1(res.data)
            }
        })
    }, [pick])

    console.log(newState1)

    return (
        <div>
            <Container>
                <br />
                <div>Start</div>

                {/* <DragDropContext onDragEnd={dragged}>
                    <Droppable droppableId="droppableID">
                        {(provided) => (
                            <Main {...provided.droppableProps} ref={provided.innerRef}>
                                {state1.map((props: any, i) => (
                                    <Draggable key={i} index={i} draggableId={`${i}`}>
                                        {(provided) => (
                                            <Card
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                ref={provided.innerRef}>
                                                <Image src={props.image} loading="lazy" />
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

                <Div>
                    {
                        pages.map((props: number, i: number) => (
                            <Button
                                onClick={() => {
                                    setCurrentPage(props)
                                }}
                                bg={props === currentPage ? "l" : ""}
                            >{props}</Button>
                        ))
                    }
                </Div> */}

                <div>
                    {newState.map((props: any) => (
                        <div>{props.id}, - {props.question}</div>
                    ))}

                    <br />
                    <br />
                    <input
                        placeholder="Staer"
                        value={pick}
                        onChange={(e: any) => {
                            setPick(e.target.value)
                        }}
                    />

                    <br />
                    <br />
                    {pick}
                    <br />
                    <br />

                    {
                        newState1?.id ? <div>
                            {newState1?.id!} - {newState1?.question!}
                        </div> : <div>No value Choosen </div>
                    }

                    <br />

                    <Button
                        onClick={() => {
                            deleteData()
                            setPick("")
                        }}
                    >Done</Button>
                    <br />
                    <br /><br />
                    <br />
                </div>

            </Container>
        </div>
    )
}

export default DraggingPage

const Button = styled.div<{ bg?: string }>`
margin: 5px;
border-radius: 3px;
padding: 5px 12px;
background-color: ${({ bg }) => bg ? "darkorange" : "black"};
color: white;
transition: all 350ms;

:hover{
    cursor: pointer;
    transform: translate(0, -5px);
}
`

const Div = styled.div`
display: flex;
`



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
align-items: center;
flex-direction: column;
`   
