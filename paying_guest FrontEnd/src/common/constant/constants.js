import axios from "axios";


export const BASE_API_URL = 'http://localhost:8083';

export const myAxios = axios.create({
    baseURL: BASE_API_URL
});

export const token = JSON.parse(localStorage.getItem("Authorization"));
export const berer = "Bearer ";
export const tokens = berer + token;
export const Localid = localStorage.getItem("ownerId");
export const building = localStorage.getItem("building_Id");



export var privateaxios = axios.create({
    baseURL: BASE_API_URL,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': tokens,
        'ownerId': Localid,
        'building_Id': building
    },
});


