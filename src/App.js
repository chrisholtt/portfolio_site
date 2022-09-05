import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import ProjectPage from './containers/ProjectPage';

// Project info imports:
import { nftInfo, blackjackInfo, cryptoInfo, calorieInfo, siteInfo } from './descriptions';

function App() {

  const blackjackSlides = [
    "./static/projects/card1.png",
    "./static/projects/card2.png",
    "./static/projects/card3.png",
    "./static/projects/card4.png",
  ];

  const nftSlides = [
    "./static/projects/nft1.gif",
    "./static/projects/nft2.gif",
    "./static/projects/nft3.gif",
    "./static/projects/nft4.gif",
    "./static/projects/nft5.gif",
  ];

  const cryptoSlides = [
    "./static/projects/crypto1.png",
    "./static/projects/crypto2.png",
    "./static/projects/crypto3.png",
  ]

  const siteSlides = [
    "./static/projects/site1.png",
    "./static/projects/site2.png"

  ]

  const calorieSlides = [
    "./static/projects/crypto1.png",
    "./static/projects/crypto2.png",
    "./static/projects/crypto3.png",
  ]

  return (
    <>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/calorie-tracker' element={<ProjectPage slides={calorieSlides} accent={'#2596be'} title={'Full stack calorie tracker app made using Python and PostgreSQL '} lang={'PYTHON'} infoObj={calorieInfo} />} />
        <Route path='/blackjack-game' element={<ProjectPage slides={blackjackSlides} accent={'#e4d44c'} title={'Browser minigame created using React and MUI'} lang={'JAVASCRIPT'} infoObj={blackjackInfo} />} />
        <Route path='/nft-project' element={<ProjectPage slides={nftSlides} accent={'#96d9c3'} title={'NFT project on the Ethereum blockchain. React Dapp, Solidity smart contract and Webflow.'} lang={'SOLIDITY'} infoObj={nftInfo} />} />
        <Route path='/coin-project' element={<ProjectPage slides={cryptoSlides} accent={'#e4d44c'} title={'Web app using React and Chart JS that tracks and charts the top 100 coins.'} lang={'JAVASCRIPT'} infoObj={cryptoInfo} />} />
        <Route path='/site-project' element={<ProjectPage slides={siteSlides} accent={'#e4d44c'} title={'A site to call my own, made using Three.js, WebGL, and React'} lang={'JAVASCRIPT'} infoObj={siteInfo} />} />
      </Routes>
    </>
  );
}

export default App;
