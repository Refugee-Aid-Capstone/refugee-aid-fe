import { Route, Routes } from 'react-router';
import Homepage from '../Homepage/Homepage';
import OurMissionPage from '../OurMissionPage/OurMissionPage';
import ProvideAidPage from '../ProvideAidPage/ProvideAidPage';

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Homepage />} />
      <Route exact path='/provideAid' element={<ProvideAidPage />} />
      <Route exact path='/OurMission' element={<OurMissionPage />} />
    </Routes>
  );
}

export default App;
