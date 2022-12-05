import styled from "styled-components"
import React from "react"
import CardAnswer from "./CardAnswer"

export default function CardQuestion(props) {

    const { index, key, question, answer, selectedQuestion, addAppearAnswer, conclude,
        concluded, red, orange, green, appearAnswer, questions } = props

    const iconPlay = <ion-icon data-test="play-btn" name="play-outline" onClick={() => selectedQuestion(question)}></ion-icon>
    const iconTurn = <ion-icon data-test="turn-btn" name="sync-outline" onClick={() => addAppearAnswer(answer)}></ion-icon>
    const iconRed = <ion-icon name="close-circle" data-test="no-icon"></ion-icon>
    const iconOrange = <ion-icon name="help-circle" data-test="partial-icon"></ion-icon>
    const iconGreen = <ion-icon name="checkmark-circle" data-test="zap-icon"></ion-icon>

    const click = questions.includes(question)
    const disappear = appearAnswer.includes(answer)
    const concludedQuestion = concluded.includes(question)
    const isRed = red.includes(question)
    const isOrange = orange.includes(question)
    const isGreen = green.includes(question)

    return (
        <FlashCard data-test="flashcard"
        disappear={disappear}
        click={click}
        concluded={concludedQuestion}>
            <QuestionBox
                click={click}
                disappear={disappear}
                concluded={concludedQuestion}
                isRed={isRed}
                isOrange={isOrange}
                isGreen={isGreen}>

                <span data-test="flashcard-text">
                    {concludedQuestion ? `Pergunta ${index + 1}` : "" ||
                        click ? question : `Pergunta ${index + 1}`
                    }
                </span>

                {isRed ? iconRed : "" || isOrange ? iconOrange : "" || isGreen ? iconGreen : "" ||
                    click ? iconTurn : iconPlay}

            </QuestionBox>

            <CardAnswer
                question={question}
                answer={answer}
                appearAnswer={appearAnswer}
                concluded={concluded}
                conclude={conclude} />
        </FlashCard>
    )
}
const FlashCard = styled.div`
    background-color: ${props=> props.concluded? "#ffffff" : "" || props.click? "#FFFFD5" : "#ffffff"};
    width: 60%;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    margin-bottom: 25px;
    transition: all 0.7s;
    transform-style: preserve-3d;
    transform: ${props=> props.concluded && "rotateY(360deg)" || props.disappear && "rotateY(180deg)"};
    @media(max-width:553px) {
        width:80%
    }
`

const QuestionBox = styled.div`
    height: ${props => props.concluded ? "65px" : "131px" && props.click ? "131px" : "65px"};  
    display: flex;
    flex-direction: ${props => props.concluded ? "row" : "column" && props.click ? "column" : "row"};
    align-items: ${props => props.concluded ? "center" : "flex-end" && props.click ? "flex-end" : "center"};
    padding-left: 15px;
    padding-right: 10px;
    justify-content: space-between;
    transition: height 0.5s;
    display: ${props => props.concluded ? "" : "none" && props.disappear ? "none" : ""};
    backface-visibility: hidden;
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