import {db} from '../db.js'

export const getUsers = (_, res) => {
    const q = "SELECT * FROM user";

    db.query(q, (err, data)=> {
        if(err) return res.json(err);

        return res.status(200).json(data);
    })

}

export const addUser = (req, res) => {
    const q = 
    "INSERT INTO user(`nome`, `email`, `senha`) VALUES(?)";

    const values = [
        req.body.nome,
        req.body.email,
        req.body.senha,
    ];

    db.query(q, [values], (err)=> {
        if(err) return res.json(err);

        return res.status(200).json("Usuario criado com sucesso")
    })
}

export const editUser = (req, res) => {
    const q = 
    "UPDATE user SET `nome` = ?, `email` = ?, `senha` = ? WHERE `id` = ?";

    const values = [
        req.body.nome,
        req.body.email,
        req.body.senha,
    ];

    db.query(q, [...values, req.params.id], (err)=> {
        if(err) return res.json(err);

        return res.status(200).json("Usuario atualizado com sucesso")
    });
}


export const deleteUser = (req, res) => {
    const q = "DELETE FROM user WHERE `id` = ?"

    db.query(q, [req.params.id], (err)=> {
        if(err) return res.json(err);

        return res.status(200).json("Usuario deletado com sucesso")
    });
}
