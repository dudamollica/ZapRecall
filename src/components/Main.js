import Logo from "../assets/logo.png"
import styled from "styled-components"
import Counter from "./Counter"
import FlashCards from "./FlashCards"
import React from "react";

export default function Main() {
    const [cardsLength, setCardsLength] = React.useState([])
    const [concluded, setConcluded] = React.useState([])
    const [status, setStatus] = React.useState([])

    return (
        <>
            <Title>
                <img src={Logo} />
                <h1>ZapRecall</h1>
            </Title>
            <FlashCards
                setCardsLength={setCardsLength}
                concluded={concluded}
                setConcluded={setConcluded}
                status={status}
                setStatus={setStatus}
            />
            <Counter
                concluded={concluded}
                cardsLength={cardsLength}
                status={status}
            />
        </>
    )
}

const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top:45px;
    padding-bottom: 45px;
img{
    width: 52px;
    height: 60px;
    margin-right: 15px;
}
h1{
    text-align: center;
    color: white;
    font-family: 'Righteous';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
}
`