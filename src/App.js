import ThreeScene from './components/three-scene';
import ThreeScene2 from './components/three-scene-2';
import Title from './components/Title';
import Navbar from './components/Navbar'
import Progress from './components/Progress'
import About from './containers/About'
import AboutText from './containers/AboutText'
import Contact from './containers/Contact'
import SubTitle from './components/SubTitle'
import BackgroundText from './components/BackgroundText'
import TextSphere from './components/TextSphere';
// import { Link } from 'react-scroll'



function App() {
  return (
    <>
      <Navbar />
      <Progress />

      <section className='sec1'>
        <Title />
        <SubTitle />
        <div className='webgl'>
          <ThreeScene />
          <BackgroundText text={'INDEX'} />
        </div>
      </section>

      <section className='sec2'>
        <AboutText />
        <div className='webgl2'>
          <ThreeScene2 />
        </div>
        <About />
        <BackgroundText text={'ABOUT'} />
      </section>

      <section className='sec3'>
        <Contact />
        <TextSphere />
        <BackgroundText text={'CONTACT'} />
      </section>



    </>
  );
}

export default App;
