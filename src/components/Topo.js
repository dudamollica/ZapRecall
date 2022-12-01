import Logo from "../assets/logo.png"
import styled from "styled-components"

export default function Topo() {
    return (
        <Title>
            <img src={Logo} />
            <h1>ZapRecall</h1>
        </Title>
    )
}

const Title = styled.div`
    background-color: #FB6B6B;
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