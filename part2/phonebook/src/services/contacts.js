import axios from "axios"
const baseUrl = "http://localhost:3001/persons"


const getAllContacts = () =>{
    const request = axios.get(baseUrl);
    console.log(request.then(response => response.data));
    
    return request.then(response => response.data)
}

const addContact = (newPerson) =>{
    const request = axios.post(baseUrl,newPerson);
    return request.then(response => response.data)
}

export default {getAllContacts, addContact}