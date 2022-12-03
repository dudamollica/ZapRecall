import Topo from "./components/Topo";
import GlobalStyle from "./GlobalStyle";
import Contador from "./components/Contador"
import FlashCards from "./components/FlashCards"
import React from "react";

function App() {
  const [cardsLength, setCardsLength] = React.useState([])
  return (
    <>
      <GlobalStyle />
      <Topo />
      <FlashCards setCardsLength={setCardsLength} />
      <Contador cardsLength={cardsLength} />
    </>
  );
}

export default App;
