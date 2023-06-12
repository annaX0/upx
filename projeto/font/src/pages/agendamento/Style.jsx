import styled from "styled-components";


export const Box = styled.div`
   width: 40%;
   height: 40%;
   margin: auto;
   display: flex;
   flex-direction: column;
   gap: 20px;
   align-items: center;
   padding: 50px 0;
   border-radius: 10px;
   z-index: 999;
   justify-content: center;
   position: absolute;
   left: 25%;
   top: 25%;
   background-color: white;
    box-shadow: 7px 5px 16px rgba(0, 0, 0, 0.25);
    h1{
        color: #4A7856;
        margin-bottom: 15%;
        font-weight: 900;
    }

    a{
        color: #a7a7a7;
        text-decoration: none;
        font-size: 15px;
    }
`
export const BoxInputs = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;
    gap: 20px;
`

export const Body = styled.div`
    background-color: #42424229;
    height: 100vh;
    width: 100vw;
    position: fixed;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`