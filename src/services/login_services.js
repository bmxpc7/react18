import axios from "axios";

export const recommendUserPass = async () => {
    try {
        const data = await axios.get("/api/")
        const infoLogin = data.data.results[0].login;
        return { "username": infoLogin.username, "password": infoLogin.password }
    } catch (error) {
        return error
    }
}

export const loginUser = async (username, password) => {
    try {
        const data = await axios.get("/api/")
        const infoLogin = data.data.results[0].login;
        if (username === infoLogin.username && password === infoLogin.password) {
            sessionStorage.setItem()
        }
        console.log(infoLogin);
    } catch (error) {
        console.log(error);
    }
}