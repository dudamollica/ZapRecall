import styled from "styled-components"

export default function Contador(){
    return (
        <StyleContador>
         0/8 Concluídos
        </StyleContador>
    )
}

const StyleContador= styled.div `
background: white;
box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
height: 70px;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 18px;
color:#333333;
position: fixed;
bottom: 0;
`