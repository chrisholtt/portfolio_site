import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import ProjectPage from './containers/ProjectPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/calorie-tracker' element={<ProjectPage accent={'#2596be'} title={'Full stack calorie tracker app made using Python and PostgreSQL '} lang={'PYTHON'} />} />
        <Route path='/blackjack-game' element={<ProjectPage accent={'#e4d44c'} title={'Browser minigame created using React and MUI'} lang={'JAVASCRIPT'} />} />
      </Routes>
    </>
  );
}

export default App;
