import { useState } from 'react';
import '../ProvideAidPage/ProvideAidPage.scss';
import Search from '../Search/Search';
import OrganizationDisplay from '../OrganizationDisplay/OrganizationDisplay';
import './ProvideAidPage.scss'

export default function ProvideAidPage() {
  const [selectedOrganization, setSelectedOrganization] = useState({});

  function selectOrganization(organization) {
    setSelectedOrganization(organization);
  }

  return (
    <div className='provide-aid-page'>
      <main className='content-section'>
        <Search selectOrganization={selectOrganization} />
        <div aria-live="polite">
          <OrganizationDisplay selectedOrganization={selectedOrganization} />
        </div>
      </main>
    </div>
  );
}
    