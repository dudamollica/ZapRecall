import styled from "styled-components"
import Perguntas from "./Perguntas"

export default function FlashCards() {

    const Cards = [
        {
            title: "Pergunta 1",
            question:"O que é JSX?",
            answer:"Uma extensão de linguagem do JavaScript",
        },
        {
            title:"Pergunta 2",
            question:"",
            answer:"",
        },
        {
            title:"Pergunta 3",
            question:"",
            answer:"",
        },
        {
            title:"Pergunta 4",
            question:"",
            answer:"",
        },
        {
            title:"Pergunta 5",
            question:"",
            answer:"",
        },
        {
            title:"Pergunta 6",
            question:"",
            answer:"",
        },
        {
            title:"Pergunta 7",
            question:"",
            answer:"",
        },
        {
            title:"Pergunta 8",
            question:"",
            answer:"",
        },
        {
            title:"Pergunta 9",
            question:"",
            answer:"",
        },
        {
            title:"Pergunta 10",
            question:"",
            answer:"",
        },
    ]

    return (
        <StyleFlashCards>
            {Cards.map((q) => <Perguntas title={q.title} question={q.question}/>)}
        </StyleFlashCards>
    )
}

const StyleFlashCards = styled.div`
background-color: #FB6B6B;
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 70px;
`