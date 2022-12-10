import React, { useEffect, useState } from 'react'
import { Login_background, Title, Wrapper, Button, Form_Login, Input_Login, Label_Login, Separator, Icon_Password, Icon_Info_User, Icon_Info_Password } from "./login-styled"
import { loginUser, recommendUserPass } from '../../services/login_services'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash, faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [userPassword, setUserPassword] = useState({ "username": "", "password": "" })
    const [login, setLogin] = useState({ "username": "", "password": "" })
    const [eye, setEye] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        const getInfo = async () => {
            const userPass = await recommendUserPass()
            console.log(userPass);
            setUserPassword({ "username": userPass.username, "password": userPass.password })
        }
        getInfo()
    }, [])

    const iniciarSesion = async (e) => {
        e.preventDefault()
        const response = await loginUser(login.username, login.password)
        if(response === "Ok"){
            navigate("/inicio")
        }else{

        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLogin({ ...login, [name]: value.trim() })
    }
    return (
        <Login_background>
            <Wrapper>
                <Title>
                    Login
                </Title>
                <Separator />
                <Form_Login>
                    <Label_Login>Usuario</Label_Login>
                    <Input_Login placeholder={userPassword.username !== "" ? userPassword.username : "Ingrese usuario"} value={login.username} name="username" onChange={(e) => { handleChange(e) }} autoComplete={"off"} />
                    <Icon_Info_User><FontAwesomeIcon icon={faCircleInfo} color={"palevioletred"} /></Icon_Info_User>
                    <Label_Login>Contraseña</Label_Login>
                    <Input_Login type={eye ? "text" : "password"} placeholder={userPassword.username !== "" ? userPassword.password : "Ingrese contraseña"} value={login.password} name="password" onChange={(e) => { handleChange(e) }} autoComplete={"off"}  />
                    <Icon_Password><FontAwesomeIcon onClick={() => { setEye(!eye) }} icon={eye ? faEyeSlash : faEye} color={"palevioletred"} /></Icon_Password>
                    <Icon_Info_Password><FontAwesomeIcon icon={faCircleInfo} color={"palevioletred"} /></Icon_Info_Password>
                    <Button onClick={(e) => { iniciarSesion(e) }}>Iniciar Sesion</Button>
                </Form_Login>
            </Wrapper>
        </Login_background>
    )
}

export default Login