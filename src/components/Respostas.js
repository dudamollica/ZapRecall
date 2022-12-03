import React from "react"
import styled from "styled-components"

export default function Respostas(props) {
    const disappear = props.appearAnswer.includes(props.answer)
    return (
        <AnswerBox disappear={disappear}>
            {props.answer}
        </AnswerBox>
    )
}

const AnswerBox = styled.div`
display: ${props => props.disappear?"block":"none"}
`