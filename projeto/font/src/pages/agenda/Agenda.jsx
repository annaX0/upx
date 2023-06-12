import axios from "axios";
import { useEffect, useState } from "react";
import Menu from "../../components/Global/Menu/Menu";
import { Button, Input } from "../../components/Global/style";
import Agendamento from "../agendamento/Agendamento";
import { BoxAgenda, BoxButtons, BoxService, ButtonDay, Container, ListBox, TextService } from "./Style";

export default function Agenda(){
    const [edit, setEdit] = useState(null);
    const [search, setSearch] = useState('');
    

    const [agendamento, setAgendamento] = useState([]);
    const [isModalVisible, setIsmodalVisible] = useState(false)


   
    
    const handleEdit = (item) => {
        setEdit(item)
        setIsmodalVisible(true)

    }
    const openNew = () => {
        setIsmodalVisible(true)

    }
    
    const getAgenda = async () => {
        try{
            const res = await axios.get("http://localhost:8800/agendamento")
            setAgendamento(res.data.sort((a, b)=> (a.data > b.data ? 1 : -1)));
        } catch(error){
            console.log(error);
        }
    }
    useEffect(()=> {
        getAgenda();
    },[setAgendamento, edit, search]);

    const days = [
        {id: '1', label: 'seg'},
        {id: '2', label: 'ter'},
        {id: '3', label: 'qua'},
        {id: '4', label: 'qui'},
        {id: '5', label: 'sex'},
        {id: '6', label: 'sab'},
        {id: '7', label: 'dom'},
    ]

    const handleDelete = async(id)=>{
        await axios
        .delete("http://localhost:8800/agendamento/" + id)
        .then(({data})=> {
            const newArray = agendamento.filter((agenda)=> agenda.id !== id);

            setAgendamento(newArray);
            alert(data);
        })

        .catch(({data})=> alert(data));
        setEdit(null);  
    }

    const filteredAgendamento = agendamento.filter(item => {
        const lowerCaseNome = item.nome.toLowerCase();
        const lowerCaseSearchName = search.toLowerCase();
        return lowerCaseNome.includes(lowerCaseSearchName);
    });
    

    return(
        
        <Menu>
            {isModalVisible === true ? <Agendamento isModalVisible={isModalVisible} setIsmodalVisible={setIsmodalVisible} setEdit={setEdit} edit={edit}/> : '' }
            <Container>
        <h2>Agenda ({agendamento.length})</h2>
            {() => handleEdit()}
        <BoxButtons>
        {days.map(({label, id})=> <ButtonDay key={id}>{label}</ButtonDay>)}
        </BoxButtons>
        <Button onClick={()=> openNew()}>Novo Agendamento</Button>

        <Input type={'search'} placeholder={'insira sua busca'} onChange={(e)=> setSearch(e.target.value)}></Input>
        <ListBox>
        {filteredAgendamento.map((item)=> 
        <BoxAgenda key={item.id}>
            <BoxService>
                <TextService>
        <li>{item.data}</li>
        <li>{item.hora}</li>
        <li>{item.nome}</li>
        <li>{item.telefone}</li>
        </TextService>
        <h4>serviço</h4>
        </BoxService>
        <button onClick={() => handleEdit(item)}>Editar</button>
        <button onClick={() => handleDelete(item.id)}>Apagar</button>
        </BoxAgenda>)}
        </ListBox>
        </Container>
        </Menu>
        
    )
}