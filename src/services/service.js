import axios from "axios"

const API_URL = "http://localhost:8080/api/DNS"

const getAllRecords = async ()=>{
    return await axios.get(`${API_URL}`)
}

const getRecordByid = async (id)=>{
    return await axios.get(`${API_URL}/${id}`)
}

const postRecord = async (data)=>{
    return await axios.post(`${API_URL}`, data)
}

const updateRecord = async (id, data)=>{
    return await axios.put(`${API_URL}/${id}`, data)
}

const deleteRecord = async (id)=>{
    return await axios.delete(`${API_URL}/${id}`)
}


export {getAllRecords,postRecord,updateRecord,deleteRecord,getRecordByid}