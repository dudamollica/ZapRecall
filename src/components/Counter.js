import styled from "styled-components"

export default function Counter(props) {
    return (
        <StyleContador
        icon={props.status.length}>
            {props.concluded.length}/{props.cardsLength} Concluídos
            <div>
                {props.status.map((s, index) => <Status icon={s} key={index} />)}
            </div>
        </StyleContador>
    )
}

function Status(props) {
    return (
        <IconStyle cor={props.icon}>
            {props.icon == "red" && <ion-icon name="close-circle"></ion-icon> ||
                props.icon == "orange" && <ion-icon name="help-circle"></ion-icon> ||
                props.icon == "green" && <ion-icon name="checkmark-circle"></ion-icon>}
        </IconStyle>
    )
}

const StyleContador = styled.div`
background: white;
box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
padding-top: ${props=> props.icon!=0 && "10px"};
height: ${props=> props.icon==0 && "70px"};
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
    margin-top: 10px;
    margin-bottom: 5px;
}
`
const IconStyle = styled.span`
color:${props => props.cor == "green" ? "#2FBE34" : props.cor};
font-size: 23px;
`