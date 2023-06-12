import express from 'express'
import useRoutes from './routes/users.js'
import cors from "cors"
import agendamento from './routes/agendamento.js'


const app = express()

app.use(express.json())

app.use(cors())

app.use("/", useRoutes)
app.use("/", agendamento)

app.listen(8800)

// import { Server } from "socket.io";

// const io = new Server({
//     cors:{
//         origin: "http://localhost:3000"
//     }
// });

// let onlineUsers = [];
// const addNewUsers = (userName, socketId) => {
//     !onlineUsers.some(user => user.userName === userName) && 
//     onlineUsers.push({userName, socketId});
// }

// const removeUsers = (socketId) => {
//     onlineUsers = onlineUsers.filter(user => user.socketId !== socketId)
// }


// const getUser = (userName) => {
//     return onlineUsers.find((user)=> user.userName === userName)
// }

// io.on("connection", (socket) => {
//     socket.on("newUser", (userName)=> {
//         addNewUsers(userName, socket.id);
//     })

//     socket.on("disconnect", () => {
//        removeUsers(socket.id);
//     });
// });

// io.listen(8800)