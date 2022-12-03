import styled from "styled-components"
import React from "react"
import Respostas from "./Respostas"

export default function Perguntas(props) {

    function selectedQuestion(question) {
        const newArray = [...props.questions, question]
        props.setQuestions(newArray)
    }

    function addAppearAnswer(answer) {
        const newArray = [...props.appearAnswer, answer]
        props.setAppearAnswer(newArray)
    }

    const iconPlay = <ion-icon name="play-outline" onClick={() => selectedQuestion(props.question)}></ion-icon>
    const click = props.questions.includes(props.question)
    const iconTurn = <ion-icon name="sync-outline" onClick={() => addAppearAnswer(props.answer)}></ion-icon>
    const disappear = props.appearAnswer.includes(props.answer)

    return (
        <>
            <QuestionBox
                click={click}
                disappear={disappear}
            >
                <span>
                    {props.questions.includes(props.question) ? props.question : `Pergunta ${props.index + 1}`}
                </span>
                {click ? iconTurn : iconPlay}

            </QuestionBox>

            <Respostas
                question={props.question}
                answer={props.answer}
                appearAnswer={props.appearAnswer}
                setAppearAnswer={props.setAppearAnswer}
                concluded={props.concluded}
                setConcluded={props.setConcluded}
            />
        </>
    )
}

const QuestionBox = styled.div`
    width: 50%;
    height: ${props => props.click ? "131px" : "65px"};  
    background: #FFFFFF;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    margin-bottom: 25px;
    display: flex;
    flex-direction: ${props => props.click ? "column" : "row"};
    align-items: ${props => props.click ? "flex-end" : "center"};
    padding-left: 15px;
    padding-right: 10px;
    justify-content: space-between;
    transition: height 0.5s;
    display: ${props => props.disappear ? "none" : ""};
    span{
    margin-top: ${props => props.click ? "20px" : "0px"};
    font-family: 'Recursive';
    font-weight: 700;
    font-style: normal;
    font-size: 16px;
    color: #333333;
    width:100%;
}
    ion-icon{
    font-size: 30px;
    font-weight: 700;
    margin-bottom: ${props => props.click ? "20px" : "0px"};
    margin-right: ${props => props.click ? "20px" : "0px"};
    
}

`