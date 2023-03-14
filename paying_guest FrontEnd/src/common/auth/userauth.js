export const isLogin = (next) => {
    let Authorization = localStorage.getItem("Authorization");
    console.log(Authorization);
    if (Authorization != null)
        return true
    else { return false }
}


export const doLogin = (data, next) => {
    localStorage.setItem("Authorization", JSON.stringify(data.data.token));
    localStorage.setItem("ownerId", JSON.stringify(data.data.ownerId));
    localStorage.setItem("username", JSON.stringify(data.data.username));
    localStorage.setItem("firstname", JSON.stringify(data.data.firstName));
    localStorage.setItem("lastname", JSON.stringify(data.data.lastName));
    localStorage.setItem("role", JSON.stringify(data.data.role));
    console.log(localStorage.getItem("Authorization"));
    console.log(localStorage.getItem("ownerId"));
    console.log(localStorage.getItem("username"));
    console.log(localStorage.getItem("firstname"));
    console.log(localStorage.getItem("lastname"));
    console.log(localStorage.getItem("role"));
}

export const doLogout = (next) => {
    localStorage.removeItem("Authorization")
    localStorage.removeItem("username")
    localStorage.removeItem("firstname")
    localStorage.removeItem("lastname")
    localStorage.removeItem("role")

}

export const getCurrentUserDetail = () => {
    if (isLogin) {
        return localStorage.getItem("username");
    } else {
        return false
    }
}