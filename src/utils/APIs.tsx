import axios from "axios"

const url = axios.create({
    baseURL: "http://localhost:2900"
})

export const getAllEntries = async () => {
    try {
        return await url.get('/data').then((res) => {

            return res.data
        })
    } catch (error) {
        console.log(error)
    }
}

export const addNewEntries = async (data: any) => {
    try {
        await url.post('/data', data).then((res) => {
            return res.data
        })
    } catch (error) {
        console.log(error)
    }
}