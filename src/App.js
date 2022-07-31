// import Navbar from './components/Navbar'
import ThreeScene from './components/three-scene';
import Title from './components/Title';
import Navbar from './components/Navbar'



function App() {
  return (
    <>
      <Navbar />
      <Title />
      <div className='webgl'>
        <ThreeScene />
      </div>
      <section></section>
    </>
  );
}

export default App;
