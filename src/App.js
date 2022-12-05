import Main from "./components/Main";
import GlobalStyle from "./GlobalStyle";
import React from "react";
import FrontPage from "./components/FrontPage";
import styled from "styled-components";

function App() {
  const [clickStart, setClickStart] = React.useState(false)

  return (
    <>
      <GlobalStyle />

      <FrontVisibility clickStart={clickStart}>
        <FrontPage setClickStart={setClickStart} />
      </FrontVisibility>

      <MainVisibility clickStart={clickStart}>
        <Main />
      </MainVisibility>
    </>
  );
}

export default App;

const FrontVisibility = styled.div`
display: ${props => props.clickStart && "none"};
`
const MainVisibility = styled.div`
display: ${props => !props.clickStart && "none"};
`