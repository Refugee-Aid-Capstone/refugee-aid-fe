import { useState } from 'react';
import { Route, Routes, useNavigate, } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Homepage from '../Homepage/Homepage';
import OrganizationDashboard from '../OrganizationDashboard/OrganizationDashboard';
import ProvideAidPage from '../ProvideAidPage/ProvideAidPage';
import Error404 from '../ErrorHandling/Error404';
import Error500 from '../ErrorHandling/Error500';
import GeneralError from '../ErrorHandling/GeneralError';
import Contact from '../Contact/Contact'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleOrganizationLogin = () => {
    if (isLoggedIn) {
      setIsLoggedIn(false);
      navigate('/');
    } else {
      setIsLoggedIn(true);
      navigate('/organizationDashboard');
    }
  }


  return (
    <>
      <NavBar isLoggedIn={isLoggedIn} handleLogin={handleOrganizationLogin} />
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route exact path='/Contact' element={<Contact />} />
        <Route exact path='/provideAid' element={<ProvideAidPage />} />
        <Route exact path='/OrganizationDashboard' element={<OrganizationDashboard orgId={99} />} />
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
