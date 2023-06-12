import { Body, BtnPage, ButtonOut, ImageProfile, LinkPages, MenuClose, Name, Profile } from "./Style";
import {FiCalendar, FiBell, FiSettings, FiLogOut} from 'react-icons/fi'
import Perfil from '../../../assets/perfil.jpg'
import { useEffect, useState } from "react";
import axios from "axios";
export default function Menu(props)
{    const [users, setUsers] = useState([]);

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

    
    return(
        <>
        <Body>
        <MenuClose>
            <Profile>
            <ImageProfile>
                <img  alt="" />
            </ImageProfile>
            {users.map(({nome})=> {
                return <Name>{nome}</Name>
            })}
               
                </Profile>
            <LinkPages>
           <BtnPage> <FiCalendar></FiCalendar> <a href="/agenda">Agenda</a></BtnPage>
           {/* <BtnPage><FiBell></FiBell> <a href="/notificacao">Notificação</a></BtnPage> */}
           {/* <BtnPage> <FiSettings></FiSettings> <a href="/configuracao">Configuração</a></BtnPage> */}
            </LinkPages> 
            <ButtonOut>
            <a href="/"><FiLogOut></FiLogOut></a>
            </ButtonOut>
        </MenuClose>
        {props.children}
    
        </Body>
        </>
    )
}