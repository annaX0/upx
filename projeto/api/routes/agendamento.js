import express from 'express'
import { getAgenda, newAgendamento, deletaAgendamento, editAgendamento} from '../controller/agendame.js'

const agendamento = express.Router()

agendamento.get("/agendamento", getAgenda);
agendamento.post("/agendamento", newAgendamento);
agendamento.put("/agendamento/:id", editAgendamento);
agendamento.delete("/agendamento/:id", deletaAgendamento);

// http://localhost:8800/agendamento

export default agendamento;