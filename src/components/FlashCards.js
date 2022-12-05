import styled from "styled-components"
import CardQuestion from "./CardQuestion"
import React from "react"

export default function FlashCards(props) {
    const [questions, setQuestions] = React.useState([])
    const [appearAnswer, setAppearAnswer] = React.useState([])

    const Cards = [
        {
            question: "O que é JSX?",
            answer: "Uma extensão de linguagem do JavaScript",
        },
        {
            question: "O React é __",
            answer: "Uma biblioteca JavaScript para construção de interfaces",
        },
        {
            question: "Componentes devem iniciar com __",
            answer: "Letra maiúscula",
        },
        {
            question: "Podemos colocar __ dentro do JSX",
            answer: "Expressões",
        },
        {
            question: "O ReactDOM nos ajuda __ ",
            answer: "Interagindo com a DOM para colocar componentes React na mesma",
        },
        {
            question: "Usamos o npm para __",
            answer: "Gerenciar os pacotes necessários e suas dependências",
        },
        {
            question: "Usamos props para __",
            answer: "Passar diferentes informações para componentes",
        },
        {
            question: "Usamos estado (state) para __",
            answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
        }
    ]
    props.setCardsLength(Cards.length)

    return (
        <StyleFlashCards data-test="flashcard">
            {Cards.map((q, index) => <CardQuestion
                index={index}
                key={q.question}
                question={q.question}
                answer={q.answer}
                questions={questions}
                setQuestions={setQuestions}
                appearAnswer={appearAnswer}
                setAppearAnswer={setAppearAnswer}
                concluded={props.concluded}
                setConcluded={props.setConcluded}
                status={props.status}
                setStatus={props.setStatus}
            />)}
        </StyleFlashCards>
    )
}

const StyleFlashCards = styled.div`
width:100%;
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 70px;
`