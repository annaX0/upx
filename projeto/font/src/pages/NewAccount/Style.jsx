import styled from "styled-components";


export const Container = styled.div`
    background-color: #FAF9F9;
    height: 100vh;
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    right: 0;
    
    h1{
        color: #4A7856;
        font-weight: 900;
    }
    a{
        color: #a7a7a7;
        text-decoration: none;
        font-size: 15px;
        text-align: center;
    }
    `


export const BoxInputs = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 20px;
   

   form{
    display: flex;
    flex-direction: column;
    gap: 20px;
   }

   button{
    margin: auto;
   }
`


export const Body = styled.body`
    background-color: #233828;
    height: 100vh;
    width: 100vw;
`