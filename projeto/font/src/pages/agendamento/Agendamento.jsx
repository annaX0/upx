import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Button, Input } from "../../components/Global/style.jsx";
import { Body, Box, Form } from "./Style";


export default function Agendamento({getAgenda, edit, setEdit, isModalVisible, setIsmodalVisible, name}){
    const ref = useRef();

   


useEffect(()=> {
        if(edit){
            const user = ref.current;

            user.nome.value = edit.nome;
            user.telefone.value = edit.telefone;
            user.data.value = edit.data;
            user.hora.value = edit.hora;
        }
    }, [edit])

    const handleSubitmit = async (e) => {
        e.preventDefault();

        const user = ref.current;

        if (
            !user.nome.value ||
            !user.telefone.value ||
            !user.data.value ||
            !user.hora.value
          ) {
            return alert("Preencha todos os campos!");
          }

          if (edit) {
            await axios
              .put("http://localhost:8800/agendamento/" + edit.id, {
                nome: user.nome.value,
                telefone: user.telefone.value,
                data: user.data.value,
                hora: user.hora.value,
              })
              .then(({ data }) => console.log(data))
              .catch(({ data }) => console.log(data));
    } else{
        await axios
        .post("http://localhost:8800/agendamento/", {
          nome: user.nome.value,
          telefone: user.telefone.value,
          data: user.data.value,
          hora: user.hora.value,
        })
        .then(({ data }) => console.log(data))
        .catch(({ data }) => console.log(data));
    }
    user.nome.value = "";
    user.telefone.value = "";
    user.data.value = "";
    user.hora.value = "";

    setEdit(null);
    getAgenda();
    }


    return(
        isModalVisible === false ? <></> : 
        <>
        <Box>
    <h2>Agendamento</h2>
    <Form ref={ref} onSubmit={handleSubitmit}>
    <Input type={'text'} name='nome' placeholder="Nome" defaultValue={name}></Input>
    <Input type={'tel'} name='telefone' placeholder="Telefone"></Input>
    <Input type={'date'} name='data'></Input>
    <Input type={'time'} name='hora'></Input>
    <Button type="submit">Agendar</Button>
    </Form>
    </Box>
    <Body onClick={() => setIsmodalVisible(!isModalVisible)}/>
    </>
        
    )
}