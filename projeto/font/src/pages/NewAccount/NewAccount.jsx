import axios from "axios";
import { useEffect, useRef, useState } from "react"
import { Body, BoxInputs, Container } from "./Style"
import {Button, Input} from "../../components/Global/style"

export default function NewAccount({user}){
    const [users, setUsers] = useState([]);
    const [onEdit, setOnEdit] = useState(null);
    const ref = useRef();

    const getUsers = async () => {
        try{
            const res = await axios.get("http://localhost:8800")
            setUsers(res.data.sort((a, b)=> (a.nome > b.nome ? 1 : -1)));
        } catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        getUsers();
    },[setUsers]);

    useEffect(()=> {
        if(onEdit){
            const user = ref.current;

            user.nome.value = onEdit.nome;
            user.email.value = onEdit.email;
            user.senha.value = onEdit.senha;
        }
    }, [onEdit])


    const handleSubitmit = async (e) => {
        e.preventDefault();

        const user = ref.current;

        if (
            !user.nome.value ||
            !user.email.value ||
            !user.senha.value 
          ) {
            return alert("Preencha todos os campos!");
          }

          if (onEdit) {
            await axios
              .put("http://localhost:8800/" + onEdit.id, {
                nome: user.nome.value,
                email: user.email.value,
                senha: user.senha.value,
              })
              .then(({ data }) => console.log(data))
              .catch(({ data }) => console.log(data));
    } else{
        await axios
        .post("http://localhost:8800", {
          nome: user.nome.value,
          email: user.email.value,
          senha: user.senha.value,
        })
        .then(({ data }) => console.log(data))
        .catch(({ data }) => console.log(data));
    }
    user.nome.value = "";
    user.email.value = "";
    user.senha.value = "";

    setOnEdit(null);
    getUsers();
    }

    return(
        <>
            <Body>
        <Container>
            <BoxInputs>
            <h1>Criar Conta</h1>
        <form ref={ref} onSubmit={handleSubitmit}>
            <Input type={'text'} name="nome" placeholder='Nome'></Input>
            <Input type={'email'} name="email" placeholder='E-mail'></Input>
            <Input type={'password'} name="senha" placeholder='Senha'></Input>
            <Button type="submit">Cadastrar</Button>
            <a href="/">Já tenho uma conta</a>
        </form>
        </BoxInputs>
        </Container>
        </Body>
        </>
    )
}
