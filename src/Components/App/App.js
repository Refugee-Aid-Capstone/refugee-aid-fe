import { Route, Routes } from 'react-router';
import Homepage from '../Homepage/Homepage';
import OurMissionPage from '../OurMissionPage/OurMissionPage';
import ProvideAidPage from '../ProvideAidPage/ProvideAidPage';
import { useQuery } from '@apollo/client';
import { GET_ORG_REQUESTS } from '../../apollo-client/queries';
import { useEffect } from 'react';
import Error404 from '../ErrorHandling/Error404'; 

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route exact path='/provideAid' element={<ProvideAidPage />} />
        <Route exact path='/OurMission' element={<OurMissionPage />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
