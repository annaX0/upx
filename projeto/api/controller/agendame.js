import {db} from '../db.js'

export const getAgenda = (_, res) => {
    const q = "SELECT * FROM agendamento";

    db.query(q, (err, data)=> {
        if(err) return res.json(err);

        return res.status(200).json(data);
    })
}


export const newAgendamento = (req, res)=> {
    const q = 
    "INSERT INTO agendamento(`nome`, `telefone`, `data`, `hora`) VALUES(?)";

    const values = [
        req.body.nome,
        req.body.telefone,
        req.body.data,
        req.body.hora,
    ];

    db.query(q, [values], (err)=> {
        if(err) return res.json(err);

        return res.status(200).json("Agendamento realizado com sucesso")
    })
}

export const editAgendamento = (req, res) => {
    const q = 
    "UPDATE agendamento SET `nome` = ?, `telefone` = ?, `data` = ?, `hora` = ? WHERE `id` = ?";

    const values = [
        req.body.nome,
        req.body.telefone,
        req.body.data,
        req.body.hora,
    ];

    db.query(q, [...values, req.params.id], (err)=> {
        if(err) return res.json(err);

        return res.status(200).json("Agendamento atualizado com sucesso")
    });
}

export const deletaAgendamento = (req, res) => {
    const q = "DELETE FROM agendamento WHERE `id` = ?"

    db.query(q, [req.params.id], (err)=> {
        if(err) return res.json(err);

        return res.status(200).json("Agendamento deletado com sucesso")
    });
}
