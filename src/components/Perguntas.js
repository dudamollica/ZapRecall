import styled from "styled-components"
import React from "react"
import Respostas from "./Respostas"

export default function Perguntas(props) {
    const [red, setRed] = React.useState([])
    const [orange, setOrange] = React.useState([])
    const [green, setGreen] = React.useState([])

    function selectedQuestion(question) {
        if (!props.questions.includes(props.question)) {
            const newArray = [...props.questions, question]
            props.setQuestions(newArray)
        }
    }

    function addAppearAnswer(answer) {
        const newArray = [...props.appearAnswer, answer]
        props.setAppearAnswer(newArray)
    }

    const iconPlay = <ion-icon data-test="play-btn" name="play-outline" onClick={() => selectedQuestion(props.question)}></ion-icon>
    const iconTurn = <ion-icon data-test="turn-btn" name="sync-outline" onClick={() => addAppearAnswer(props.answer)}></ion-icon>
    const iconRed = <ion-icon name="close-circle"></ion-icon>
    const iconOrange = <ion-icon name="help-circle"></ion-icon>
    const iconGreen = <ion-icon name="checkmark-circle"></ion-icon>

    const click = props.questions.includes(props.question)
    const disappear = props.appearAnswer.includes(props.answer)
    const concluded = props.concluded.includes(props.question)
    const isRed = red.includes(props.question)
    const isOrange = orange.includes(props.question)
    const isGreen = green.includes(props.question)

    return (
        <>
            <QuestionBox
                click={click}
                disappear={disappear}
                concluded={concluded}
                isRed={isRed}
                isOrange={isOrange}
                isGreen={isGreen}
            >
                <span data-test="flashcard-text">
                    {concluded ? `Pergunta ${props.index + 1}` : "" ||
                        click ? props.question : `Pergunta ${props.index + 1}`
                    }
                </span>
                {isRed ? iconRed : "" || isOrange ? iconOrange : "" || isGreen ? iconGreen : "" ||
                    click ? iconTurn : iconPlay}

            </QuestionBox>

            <Respostas
                question={props.question}
                answer={props.answer}
                appearAnswer={props.appearAnswer}
                setAppearAnswer={props.setAppearAnswer}
                concluded={props.concluded}
                setConcluded={props.setConcluded}
                red={red}
                setRed={setRed}
                orange={orange}
                setOrange={setOrange}
                green={green}
                setGreen={setGreen}
            />
        </>
    )
}

const QuestionBox = styled.div`
    width: 50%;
    height: ${props => props.concluded ? "65px" : "131px" && props.click ? "131px" : "65px"};  
    background: #FFFFFF;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    margin-bottom: 25px;
    display: flex;
    flex-direction: ${props => props.concluded ? "row" : "column" && props.click ? "column" : "row"};
    align-items: ${props => props.concluded ? "center" : "flex-end" && props.click ? "flex-end" : "center"};
    padding-left: 15px;
    padding-right: 10px;
    justify-content: space-between;
    transition: height 0.5s;
    display: ${props => props.concluded ? "" : "none" && props.disappear ? "none" : ""};
    span{
    margin-top: ${props => props.concluded ? "0px" : "20px" && props.click ? "20px" : "0px"};
    font-family: 'Recursive';
    font-weight: 700;
    font-style: normal;
    font-size: 16px;
    color: ${props => props.isRed && "#FF3030" || props.isOrange && "#FF922E" || props.isGreen && "#2FBE34"};
    width:100%;
    text-decoration: ${props => props.concluded ? "line-through" : ""};
}
    ion-icon{
    font-size: 30px;
    font-weight: 700;
    margin-bottom: ${props => props.concluded ? "0px" : "20px" && props.click ? "20px" : "0px"};
    margin-right: ${props => props.concluded ? "0px" : "20px" && props.click ? "20px" : "0px"};
    color: ${props => props.isRed && "#FF3030" || props.isOrange && "#FF922E" || props.isGreen && "#2FBE34"}
}

`