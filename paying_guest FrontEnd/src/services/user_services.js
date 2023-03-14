import { myAxios } from "../common/constant/constants.js";

export const loginuser = async (logindata) => {
    console.log(logindata)
    const response = await myAxios.post("/owner/login", logindata);
    console.log(response);
    return response;
}


export const signupuser = async (data) => {
    console.log(data)
    const response = await myAxios.post("/owner/signup", data);
    console.log(response);
    return response;
}

export const signUp = async (user) => {
    const response = await myAxios.post("/owner/signup", user);
    return response.data;
}

export const buildingList = async () => {
    const response = await myAxios.get("/building/list");
    return response.data;
}

