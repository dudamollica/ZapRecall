import styled from "styled-components"
import Perguntas from "./Perguntas"
import React from "react"
import Respostas from "./Respostas"

export default function FlashCards(props) {
    const [questions, setQuestions] = React.useState([])
    const [appearAnswer, setAppearAnswer] = React.useState([])

    function lineThrough(question){

    }
    
    const Cards = [
        {
            question: "O que é JSX?",
            answer: "Uma extensão de linguagem do JavaScript",
        },
        {
            question: "O React é __",
            answer: "uma biblioteca JavaScript para construção de interfaces",
        },
        {
            question: "Componentes devem iniciar com __",
            answer: "letra maiúscula",
        },
        {
            question: "Podemos colocar __ dentro do JSX",
            answer: "expressões",
        },
        {
            question: "O ReactDOM nos ajuda __ ",
            answer: "interagindo com a DOM para colocar componentes React na mesma",
        },
        {
            question: "Usamos o npm para __",
            answer: "gerenciar os pacotes necessários e suas dependências",
        },
        {
            question: "Usamos props para __",
            answer: "passar diferentes informações para componentes",
        },
        {
            question: "Usamos estado (state) para __",
            answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
        }
    ]
    props.setCardsLength(Cards.length)

    return (
        <StyleFlashCards>
        {Cards.map((q, index) => <Perguntas
        index={index}
        key={q.question}
        question={q.question}
        questions={questions}
        answer={q.answer}
        setQuestions={setQuestions}
        appearAnswer={appearAnswer}
        setAppearAnswer={setAppearAnswer}
        Cards={Cards}
        concluded={props.concluded}
        setConcluded={props.setConcluded}
    />)}
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