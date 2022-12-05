import styled from "styled-components"
import CardQuestion from "./CardQuestion"
import React from "react"

export default function FlashCards(props) {
    const [questions, setQuestions] = React.useState([])
    const [appearAnswer, setAppearAnswer] = React.useState([])
    const [red, setRed] = React.useState([])
    const [orange, setOrange] = React.useState([])
    const [green, setGreen] = React.useState([])
    
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

    function selectedQuestion(question) {
        if (!questions.includes(question)) {
            const newArray = [...questions, question]
            setQuestions(newArray)
        }
    }

    function addAppearAnswer(answer) {
        const newArray = [...appearAnswer, answer]
        setAppearAnswer(newArray)
    }

    function conclude(questionConcluded, color) {
        const newStatus = [...props.status, color]
        props.setStatus(newStatus)

        if (!props.concluded.includes(questionConcluded)) {
            const newArray = [...props.concluded, questionConcluded]
            props.setConcluded(newArray)
        }
        if (color == "red") {
            const newRed = [...red, questionConcluded]
            setRed(newRed)
        }
        if (color == "orange") {
            const newOrange = [...orange, questionConcluded]
            setOrange(newOrange)
        }
        if (color == "green") {
            const newGreen = [...green, questionConcluded]
            setGreen(newGreen)
        }
    }

    return (
        <StyleFlashCards>
            {Cards.map((q, index) => <CardQuestion
                index={index} key={q.question}
                question={q.question} answer={q.answer}
                selectedQuestion={selectedQuestion}
                addAppearAnswer={addAppearAnswer}
                conclude={conclude}
                concluded={props.concluded}
                red={red} orange={orange} green={green}
                appearAnswer={appearAnswer} questions={questions}
            />)}
        </StyleFlashCards>
    )
}

const StyleFlashCards = styled.div`
width:100%;
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 125px;
`