import Logo from "../assets/logo.png"
import styled from "styled-components"

export default function FrontPage({setClickStart}) {

    function disappearFront(){
        setClickStart(true)
    }
   
    return (
        <FrontPageStyle>
            <img src={Logo} />
            <h1>ZapRecall</h1>
            <button onClick={disappearFront}>Iniciar Recall!</button>
        </FrontPageStyle>
    )
}

const FrontPageStyle = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
    margin-top: 120px;
    }
    h1{
    margin-top: 50px;
    text-align: center;
    color: white;
    font-family: 'Righteous';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    }
    button{
    margin-top:46px;
    width: 246px;
    height: 54px;
    background: #FFFFFF;
    border: 1px solid #D70900;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    color: #D70900;
    font-family: 'Righteous';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    &:Hover{
    cursor: pointer;
    }
    }
`