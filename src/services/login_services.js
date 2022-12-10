import axios from "axios";
let login = undefined
let userInfo = undefined
export const recommendUserPass = async () => {
    try {
        const data = await axios.get("/api/")
        const infoLogin = data.data.results[0].login;
        userInfo = {
            "name": data.data.results[0].name,
            "location": data.data.results[0].location,
            "email": data.data.results[0].email,
            "cell": data.data.results[0].cell,
            "picture": data.data.results[0].picture
        }
        login = { "username": infoLogin.username, "password": infoLogin.password }
        return { "username": infoLogin.username, "password": infoLogin.password }
    } catch (error) {
        return error
    }
}

export const loginUser = async (username, password) => {
    try {
        if (username === login.username && password === login.password) {
            console.log(userInfo);
            sessionStorage.setItem("userInfo", JSON.stringify(userInfo))
            return "Ok"
        }else{
            return "fail"
        }
    } catch (error) {
        return error
    }
}