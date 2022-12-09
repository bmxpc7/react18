import styled from "styled-components";

export const Login_background = styled.main`
position: absolute;
width: 100vw;
height: 100vh;
background-color: #666666;
background: url("https://source.unsplash.com/random/1920x1080") center no-repeat;
display: flex;
justify-content: center;
align-items: center;
`;

export const Wrapper = styled.section`
width: 200px;
height: auto;
position: relative;
padding: 4em;
background: papayawhip;
box-shadow: 2px 2px 8px 4px rgba(0, 0, 0, 0.1);
border-radius: 12px;
`;

export const Title = styled.h1`
font-size: 1.5em;
text-align: center;
color: black;
`;

export const Separator = styled.hr`
height: 1px;
background-color: palevioletred;
`

export const Form_Login = styled.form`
display: flex;
flex-direction: column;
gap: 10px;
position: relative;
top: 10px;
text-align: center;
`;

export const Icon_Password = styled.div`
position: relative;
left: 85%;
bottom: 2.3em;
width: fit-content;
height: fit-content;
`

export const Icon_Info_User = styled.div`
position: relative;
left: 103%;
bottom: 2.3em;
width: fit-content;
height: fit-content;
`

export const Icon_Info_Password = styled.div`
position: relative;
left: 103%;
bottom: 4em;
width: fit-content;
height: fit-content;
`

export const Input_Login = styled.input`
padding: 10px;
border-radius: 10px;
background-color: aliceblue;
position: relative;
border: 1.5px solid palevioletred;
`;

export const Label_Login = styled.label`
color: palevioletred;
font-size: 16px;
font-weight: bold;
`;

export const Button = styled.button`
  /* Adapt the colors based on primary prop */
background: palevioletred;
color: white;
font-size: 1em;
padding: 0.5em 2em;
width: 100%;
border: 2px solid palevioletred;
border-radius: 3px;
transition: all .5s;
&:hover{
    background: white;
    color: palevioletred;
    transition: all .5s;
}
`;