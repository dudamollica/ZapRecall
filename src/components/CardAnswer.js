import React from "react"
import styled from "styled-components"

export default function CardAnswer(props) {
    const disappear = props.appearAnswer.includes(props.answer)

    return (
        <AnswerBox disappear={disappear}
            concluded={props.concluded.includes(props.question)}>
            <span data-test="flashcard-text">{props.answer}</span>
            <BoxButtons>
                <Red data-test="no-btn" onClick={() => props.conclude(props.question, "red")}>
                    Não lembrei
                </Red>
                <Orange data-test="partial-btn" onClick={() => props.conclude(props.question, "orange")}>
                    Quase não lembrei
                </Orange>
                <Green data-test="zap-btn" onClick={() => props.conclude(props.question, "green")}>
                    Zap!
                </Green>
            </BoxButtons>
        </AnswerBox>
    )
}

const AnswerBox = styled.div`
    display: ${props => props.concluded ? "none" : "flex" && props.disappear ? "flex" : "none"};
    margin-bottom: 25px;
    padding-top: 25px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    transform:rotateY(-180deg);
    transform-style: preserve-3d;
    backface-visibility: hidden;
   
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
    @media(max-width:650px){
    width: 30%;
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