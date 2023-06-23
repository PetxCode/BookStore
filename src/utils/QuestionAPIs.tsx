import axios from "axios"

const url = axios.create({
    baseURL: "http://localhost:2006"
})

export const getQuestion = async () => {
    try {
        return await axios.get("http://localhost:2006/data").then((res: any) => {
            // console.log("reading: ", res)
            return res.data
        })
    } catch (error) {
        console.log(error)
    }
}

export const createQuestion = async (data: any) => {
    try {
        return await axios.post("http://localhost:2006/data", { id: data.length + 1, question: data })
    } catch (error) {
        console.log(error)
    }
}

export const getOneQuestion = async (id: any) => {
    try {
        return await axios.get(`http://localhost:2006/data/${id}`)
    } catch (error) {
        console.log(error)
    }
}

export const deleteOneQuestion = async (id: any) => {
    try {
        return await axios.delete(`http://localhost:2006/data/${id}`)
    } catch (error) {
        console.log(error)
    }
}