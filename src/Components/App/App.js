import { Route, Routes } from 'react-router';
import Homepage from '../Homepage/Homepage';
import OurMissionPage from '../OurMissionPage/OurMissionPage';
import ProvideAidPage from '../ProvideAidPage/ProvideAidPage';
import Error404 from '../ErrorHandling/Error404'; 
import Error500 from '../ErrorHandling/Error500';
import GeneralError from '../ErrorHandling/GeneralError';



function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route exact path='/provideAid' element={<ProvideAidPage />} />
        <Route exact path='/OurMission' element={<OurMissionPage />} />
        <Route path='/error500' element={<Error500 />} />
        {window.location.pathname === '/500-test' && (
          <Route path="/500-test" element={<Error500 />} />
        )}
        <Route path="/general-error" element={<GeneralError />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
