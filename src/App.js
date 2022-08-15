// import Navbar from './components/Navbar'
import ThreeScene from './components/three-scene';
import ThreeScene2 from './components/three-scene-2';
import Title from './components/Title';
import Navbar from './components/Navbar'
import Progress from './components/Progress'
import About from './containers/About'
import SubTitle from './components/SubTitle'




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
        </div>
      </section>

      <section className='sec2'>
        <div className='webgl2'>
          <ThreeScene2 />
        </div>
        <About />
      </section>


      <section className='sec3'>

      </section>



    </>
  );
}

export default App;
