import styled from "styled-components"
import party from "../assets/party.png"
import sad from "../assets/sad.png"

export default function Counter(props) {
    const constainsRed = props.status.includes("red")

    function Msg() {
        if (!constainsRed) {
            return (<p data-test="finish-text">
                <div><img src={party} />
                    <span>Parabéns!</span></div>
                <div>Você não esqueceu de nenhum flashcard!</div>
            </p>)
        } else {
            return (<p data-test="finish-text">
                <div><img src={sad} />
                    <span>Putz...</span></div>
                <div>Ainda faltam alguns...  Mas não desanime!</div>
            </p>)

        }
    }

    return (
        <StyleCounter containsIcon={props.status.length}>

            <StyleMsg>
                {props.status.length == props.cardsLength && Msg()}
            </StyleMsg>
            <span data-test="footer">
                {props.concluded.length}/{props.cardsLength} Concluídos
            </span>
            <div>
                {props.status.map((s, index) => <Status icon={s} key={index} />)}
            </div>
        </StyleCounter>
    )
}


function Status(props) {
    return (
        <IconStyle cor={props.icon}>
            {props.icon == "red" && <ion-icon name="close-circle" data-test="no-icon"></ion-icon> ||
                props.icon == "orange" && <ion-icon name="help-circle" data-test="partial-icon"></ion-icon> ||
                props.icon == "green" && <ion-icon name="checkmark-circle" data-test="zap-icon"></ion-icon>}
        </IconStyle>
    )
}

const StyleCounter = styled.div`
background: white;
box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
padding-top: ${props => props.containsIcon != 0 && "5px"};
height: ${props => props.containsIcon == 0 && "70px"};
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 18px;
color:#333333;
position: fixed;
bottom: 0;
div{
    margin-top: 5px;
    margin-bottom: 5px;
}
`
const IconStyle = styled.span`
color:${props => props.cor == "green" ? "#2FBE34" : props.cor};
font-size: 23px;
`
const StyleMsg = styled.div`
p{
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
}
img{
    margin-right: 5px;
}
span{
    font-weight: 700;
}
`