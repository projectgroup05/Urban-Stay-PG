import { privateaxios } from "../common/constant/constants";

export const ownerbuilding = async () => {

    const owner = "/owner/" + localStorage.getItem("ownerId");
    const response = await privateaxios.get(owner)
    return response;
}

export const addbuilding = async (building) => {
    const response = await privateaxios.post('/building/add', building)
    console.log(response)
    return response;
}

export const saveaddress = async (addres) => {
    console.log(addres)
    const response = await privateaxios.post('/address/add', addres)
    console.log(response.data)
    return response;
}

export const roomadd = async (data) => {
    const response = await privateaxios.post('/room/add', data)
    console.log(response)
    return response;
}

export const servicesadd = async (data) => {
    const response = await privateaxios.post('/services/add', data)
    console.log(response)
    return response;
}

export const addmanager = async (data) => {
    const response = await privateaxios.post('/manager/add', data)
    console.log(response)
    return response;
}
