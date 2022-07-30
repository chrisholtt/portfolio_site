// import Navbar from './components/Navbar'
import ThreeScene from './components/three-scene';
import Title from './components/Title';



function App() {
  return (
    <>
      <Title />
      <div className='webgl'>
        <ThreeScene />
      </div>
      <section></section>
    </>
  );
}

export default App;
