import styled from "styled-components"

export default function Perguntas(props){
    return(
     <QuestionBox>
     {props.title}
     <ion-icon name="play-outline"></ion-icon>
     </QuestionBox>
    )
}

const QuestionBox= styled.div `
width: 80%;
height: 65px;
background: #FFFFFF;
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
border-radius: 5px;
margin-bottom: 25px;
display: flex;
align-items: center;
padding-left: 10px;
padding-right: 10px;
justify-content: space-between;
    font-family: 'Recursive';
    font-style: normal;
    font-size: 16px;
    color: #333333;

`