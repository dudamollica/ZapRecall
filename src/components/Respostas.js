import React from "react"
import styled from "styled-components"

export default function Respostas(props) {
    const disappear = props.appearAnswer.includes(props.answer)

    function conclude(questionConcluded, color) {
        if (!props.concluded.includes(questionConcluded)) {
            const newArray = [...props.concluded, questionConcluded]
            props.setConcluded(newArray)
        }
        if (color == "red") {
        const newRed= [...props.red, questionConcluded]
        props.setRed(newRed)
        }
        if (color == "orange") {
        const newOrange= [...props.orange, questionConcluded]
        props.setOrange(newOrange)
        }
        if (color == "green") {
        const newGreen= [...props.green, questionConcluded]
        props.setGreen(newGreen)
        }
    }


    return (
        <AnswerBox disappear={disappear}
            concluded={props.concluded.includes(props.question)}>
            <span>{props.answer}</span>
            <BoxButtons>
                <Red onClick={() => conclude(props.question, "red")}>
                    Não lembrei
                </Red>
                <Orange onClick={() => conclude(props.question, "orange")}>
                    Quase não lembrei
                </Orange>
                <Green onClick={() => conclude(props.question, "green")}>
                    Zap!
                </Green>
            </BoxButtons>
        </AnswerBox>
    )
}

const AnswerBox = styled.div`
    display: ${props => props.concluded ? "none" : "flex" && props.disappear ? "flex" : "none"};
    width: 50%;
    height: 131px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    margin-bottom: 25px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
span{
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
}
`

const BoxButtons = styled.div`
    display:flex;
    margin-top: 23px;
div{
    width: 100px;
    height: 45px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    color: white;
    &:hover{
    cursor: pointer;
}
}
`
const Red = styled.div`
background: #FF3030;
margin-right: 10px;
`
const Orange = styled.div`
background: #FF922E;
margin-right: 10px;
`
const Green = styled.div`
background: #2FBE34;
`