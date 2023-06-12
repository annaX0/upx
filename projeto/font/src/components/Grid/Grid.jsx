export default function Grid({users}){
    return(
        <>
        {users.map(({nome, email, senha})=> 
        <>
        <li key={'a' + nome}>{nome}</li>
        <li>{email}</li>
        <li>{senha}</li>
        </>)}
        </>
    )
}