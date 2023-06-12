import BoxNotification from "../../components/BoxNotification/BoxNotification.jsx";
import Menu from "../../components/Global/Menu/Menu.jsx";
import { ListNotify } from "./Style.jsx";
import {io} from 'socket.io-client'
import { useEffect, useState } from "react";



export default function Notification({user}) {
    const [socket, setSocket] = useState(null);
    // const [user, setUser] = useState("")
   
    // useEffect(()=> {
    //     setSocket(io("http://localhost:8800"));
    // },[])


    // useEffect(()=> {
    //     socket.emit("newUser", user)
    // }, [socket, user])


  const notify = [
    { id: 1, title: "Agendamento", content: "Anna agendou um serviço" },
    { id: 2, title: "Cancelamento", content: "Maria cancelou um serviço" },
    { id: 3, title: "Agendamento", content: "Mariana agendou um serviço" },
  ];


  return (
    <Menu>
      <h1>{user}</h1>
      <ListNotify>
        {notify.map(({ title, content }) => {
          return (
            <BoxNotification title={title} content={content}></BoxNotification>
          );
        })}
      </ListNotify>
    </Menu>
  );
}
