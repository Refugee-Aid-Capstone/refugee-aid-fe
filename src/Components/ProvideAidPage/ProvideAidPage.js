import { useState } from 'react';
import NavBar from '../NavBar/NavBar';
import '../ProvideAidPage/ProvideAidPage.scss';
import Search from '../Search/Search';
import OrganizationDisplay from '../OrganizationDisplay/OrganizationDisplay';
import Spinner from '../Spinner/Spinner'

export default function ProvideAidPage() {
  const [selectedOrganization, setSelectedOrganization] = useState({});

  function selectOrganization(organization) {
    setSelectedOrganization(organization)
  }

  return (
    <div className='provide-aid-page'>
      <NavBar />
      <main className='content-section'>
        <Search selectOrganization={selectOrganization} />
        <OrganizationDisplay selectedOrganization={selectedOrganization} />
      </main>
    </div>
  );
}
    