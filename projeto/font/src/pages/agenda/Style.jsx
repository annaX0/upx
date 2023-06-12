import styled from "styled-components";


export const BoxAgenda = styled.div`
   background-color: white;
   border-left: 13px solid #4A7856;
    box-shadow: 7px 5px 16px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    list-style: none;
    padding: 20px;

    li{
        font-weight: 700;
        font-size: 14px;
        color: #1A1F16;

        :nth-child(3){
            font-size: 18px;
            text-transform: uppercase;
        } 
    }

    h4{
        background-color: #36B29C;
        color: white;
        max-width: 80px;
        font-size: 13px;
        border-radius: 50px;
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2px 20px;
    }
    button{
        border: none;
        background-color: #33623d;
        margin: 10px 10px 0 0px;
        border-radius: 5px;
        padding: 2px 5px;
        color: white;
        font-weight: 500;
        transition: 700ms;

        :hover{
            background-color: #203f26;
        }
    }

`
export const BoxService = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
`
export const TextService = styled.div`
    display: flex;
    flex-direction: column;
`
export const ButtonDay = styled.button`
    background-color: #8E9890;
    color: white;
    border: none;
    padding: 10px;
    text-transform: uppercase;
    font-weight: bold;
    border-radius: 10px;
    width: 4rem;

    :hover{
        background-color: #4A7856;
        transition: 1s;
    }

    :active{
        background-color: #4A7856;

    }
`

export const BoxButtons = styled.div`
    display: flex;
    gap: 18px;
`

export const Container = styled.div`
   width: 100%;
   margin: 40px;
   display: flex;
   flex-direction: column;
   gap: 20px;
`
export const ListBox = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
   gap: 30px;
   margin: 20px 0;
`
