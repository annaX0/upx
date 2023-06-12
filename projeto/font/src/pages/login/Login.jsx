/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Agendamento from "../agendamento/Agendamento";
import Grid from '../../components/Grid/Grid'
import { BoxInputs } from "../agendamento/Style";
import { Button, Input } from "../../components/Global/style";
import { Body } from "../NewAccount/Style";
import { Container } from "./Style";

export default function (){
    const [users, setUsers] = useState([]);
    const [login, setLogin] = useState([])
    const [temp, setTemp] = useState('');
  const [senha, setsenha] = useState(temp);
    const ref = useRef();





    const getUsers = async () => {
        try{
            const res = await axios.get("http://localhost:8800")
            setUsers(res.data.sort((a, b)=> (a.nome > b.nome ? 1 : -1)));

        } catch(error){
            console.log(error);
        }

    }


     const handleLogin = async (e) => {

     }

     const handleChange = (event) => {
        setTemp(event.target.value);
      };
    
      const handleClick = () => {
        setsenha(temp);

      };
    useEffect(()=>{
        getUsers();
    },[setUsers]);
    return(
        <Body>
        {senha === '123' ? <Agendamento></Agendamento> : 
        <Container>
          <BoxInputs>
        <h1>Login</h1>
        <Input type={'email'} name='email'placeholder='email'></Input>
        <Input type={'password'} onChange={handleChange} name='senha' placeholder='senha'></Input>
        <a href="#">Esqueci minha senha</a>
        <Button type="button" onClick={handleClick}><a href="agenda">Entrar</a></Button>
        <a href="/newaccount">Criar conta</a>

        </BoxInputs>
        </Container>
    }
       </Body>
    )
}
