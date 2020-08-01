import React from "react";
import styled from 'styled-components';
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

const ProxyAppWrapper = styled.div`
width: 100%;
margin: 0;
padding: 0;
height: 100px;
`;

const TitleWrapper = styled.div`
display: flex;
flex-direction: row;
background-color: #282c34;
`;
const GameTitle = styled.div`
display: flex;
flex-direction: row;
width: 1140px;
overflow-x: hidden;
padding-top: 70px;
padding-bottom: 18px;
padding-left: 5px;
margin: auto;
background-color: #282c34;
font-size: 30px;
text-transform: uppercase;
font-family: 'Sofia Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;
font-weight: normal;
font-weight: 700;
color: #a1a7b3;
`;

const TopRow = styled.div`
  display: flex;
  background-color: #282c34;
  flex-direction: row;
  justify-content: center;
`

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    if (window.location.pathname === '/') {
      window.location.pathname = '/21';
    }
  }

  render() {
    return <div>
      <ProxyAppWrapper className='proxy-app-wrapper' />
      <Header />
      <TitleWrapper className='proxy-header-title-wrapper'>
        <GameTitle>
          <div id='Title'></div>
        </GameTitle>
      </TitleWrapper>
      <TopRow className='proxy-header-top-row-viewer-pep'>
        <div className='proxy-images-video-viewer' id='images'></div>
        <div className='proxy-pricePromo-app' id='PriceAndPromotion'></div>
      </TopRow>
      <div id='carousel'></div>
      <div id="Overview"></div>
      <div id="desc"></div>
      <div id="Traits"></div>
      <div id="related"></div>
      <div className='otherPopularGames-app-proxy' id="OtherPopularGames"></div>
      <div id="SystemRequirements"></div>
      <div id="legal"></div>
      <Footer />
      <ProxyAppWrapper />
    </div>
  }
}

export default App;