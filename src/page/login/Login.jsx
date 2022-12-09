import React, { useEffect, useRef, useState } from 'react'
import { Login_background, Title, Wrapper, Button, Form_Login, Input_Login, Label_Login, Separator, Icon_Password, Icon_Info_User, Icon_Info_Password } from "./login-styled"
import { loginUser, recommendUserPass } from '../../services/login_services'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash, faCircleInfo } from '@fortawesome/free-solid-svg-icons'

const Login = () => {
    const [userPassword, setUserPassword] = useState({ "username": "", "password": "" })
    const [eye, setEye] = useState(false)

    useEffect(() => {
        const getInfo = async () => {
            const userPass = await recommendUserPass()
            setUserPassword({ "username": userPass.username, "password": userPass.password })
        }
        getInfo()
    }, [])

    useEffect(() => {
        if (userPassword.username !== "") {
            console.log(userPassword);
        }
    }, [userPassword])

    return (
        <Login_background>
            <Wrapper>
                <Title>
                    Login
                </Title>
                <Separator />
                <Form_Login>
                    <Label_Login>Usuario</Label_Login>
                    <Input_Login placeholder='Ingrese Usuario' />
                    <Icon_Info_User><FontAwesomeIcon icon={faCircleInfo} color={"palevioletred"}/></Icon_Info_User>
                    <Label_Login>Contraseña</Label_Login>
                    <Input_Login type={eye ? "text" : "password"} placeholder='Ingrese Contraseña' />
                    <Icon_Password><FontAwesomeIcon onClick={() => { setEye(!eye) }} icon={eye ? faEyeSlash : faEye} color={"palevioletred"} /></Icon_Password>
                    <Icon_Info_Password><FontAwesomeIcon icon={faCircleInfo} color={"palevioletred"}/></Icon_Info_Password>
                    <Button>Iniciar Sesion</Button>
                </Form_Login>
            </Wrapper>
        </Login_background>
    )
}

export default Login