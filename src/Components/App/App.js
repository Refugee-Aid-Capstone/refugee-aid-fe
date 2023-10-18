import { Route, Routes } from 'react-router-dom';
import Homepage from '../Homepage/Homepage';
import OrganizationDashboard from '../OrganizationDashboard/OrganizationDashboard';
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
        {/* <Route path='/OrganizationDashboard' element={<div>Test Dashboard</div>} /> */}
        <Route exact path='/OrganizationDashboard' element={<OrganizationDashboard />} />
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
