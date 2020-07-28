import React from "react";
import styled from 'styled-components';
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

const GameTitle = styled.div`
display: flex;
flex-direction: row;
background-color: #282c34;
font-size: 1.875em;
text-transform: uppercase;
font-family: 'Sofia Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;
font-weight: normal;
font-weight: bold;
color: #a1a7b3;
`;

const TopRow = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #282c34;
`

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <div>
      <Header />
      <GameTitle>
        <div id='Title'></div>
      </GameTitle>
      <TopRow>
        <div id='images'></div>
        <div id='PriceAndPromotion'></div>
      </TopRow>
      <div id='carousel'></div>
      <div id="Overview"></div>
      <div id="desc"></div>
      <div id="Traits"></div>
      <div id="related"></div>
      {/* <div id="OtherPopularGames"></div> */}
      <div id="SystemRequirements"></div>
      <div id="legal"></div>

      <Footer />
    </div>
  }
}

export default App;