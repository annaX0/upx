import styled from "styled-components"

export const Input = styled.input`
    border: 1px solid #3A5E44;
    padding: 5px;
    width: 20rem;
    border-radius: 5px;

    ::placeholder{
        text-transform: capitalize;
        color: #CECECE;
    }
`
export const Button = styled.button`
    border-radius: 40px;
    width: 15rem;
    background-color: #4A7856;
    color: white;
    font-weight: bold;
    border: none;
    padding: 8px;
    cursor: pointer;

    :hover{
        opacity: 0.9;
        transition: 1s;
    }
`