import React, { useState } from 'react';
import NavBar from '../NavBar/NavBar';
import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client';
import '../ProvideAidPage/ProvideAidPage.scss';
import welcomeImage from '../../images/welcome-usa-refugee.png';
import Spinner from '../Spinner/Spinner'

const GET_ORGANIZATIONS = gql`
    query {
        organizations(city: "Cincinatti", state: "OH") {
            id
            name
            contactPhone
            contactEmail
            streetAddress
            website
            city
            state
            zip
            latitude
            longitude
            shareAddress
            sharePhone
            shareEmail
            aidRequests {
                id
                organizationId
                aidType
                language
                description
                status
            }
        }
    }
`;

const ProvideAidPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedOrganization, setSelectedOrganization] = useState(null);
    const [showSearchResults, setShowSearchResults] = useState(false);

    const { loading, error, data } = useQuery(GET_ORGANIZATIONS);

    if (loading) return <Spinner />;

    if (error) return <p>Error: {error.message}</p>;
    console.log(data);  // dont forget to delete

    const aidRequests = data && data.aidRequests ? data.aidRequests : [];


    console.log(aidRequests[0]); //dont forget to delete
    const example_aid_requests = aidRequests.slice(0, 5);


    console.log(aidRequests.length); // dont forget to delete
    console.log(example_aid_requests.length); // dont forget to delete


    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);

        setShowSearchResults(value !== '');

        const foundRequest = aidRequests.find(req => req.description.toLowerCase().includes(value.toLowerCase()));
        setSelectedOrganization(foundRequest);

    };

    // const handleFindButtonClick = () => {

    //     setShowSearchResults(true);
    // };

    return (
        <div className="provide-aid-page">
            <NavBar />

            <div className="content-section">

                {/* Left Section */}
                <div className="left-section">
                    <div className="search-section">
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={handleSearchChange}
                            placeholder="Search for organizations"
                        />
                        <button onClick={handleSearchChange}>Find</button>
                    </div>

                    <div className="filter-fields">
                        <select>
                            <option value="filter1">Filter 1</option>
                            <option value="filter2">Filter 2</option>
                            <option value="filter3">Filter 3</option>
                        </select>
                        <select>
                            <option value="filterA">Filter A</option>
                            <option value="filterB">Filter B</option>
                            <option value="filterC">Filter C</option>
                        </select>
                    </div>

                    <ul>
                        {example_aid_requests.map(item => (
                            <li key={item.id}>
                                <h3>{item.aidType}</h3>
                                <p>{item.description}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right Section */}
                <div className="right-section">
                    {selectedOrganization ? (
                        <>
                            <h2>{selectedOrganization.name}</h2>
                            <p>Phone: {selectedOrganization.contactPhone}</p>
                            <p>Email: {selectedOrganization.contactEmail}</p>
                            <p>Address: {selectedOrganization.streetAddress}</p>
                            <p>Website: {selectedOrganization.website}</p>
                            <p>City: {selectedOrganization.city}</p>
                            <p>State: {selectedOrganization.state}</p>
                            <p>ZIP: {selectedOrganization.zip}</p>
                            <div style={{ width: '300px', height: '300px', backgroundColor: 'gray' }}>
                                Map Here (Integration with map service required)
                            </div>
                        </>
                    ) : showSearchResults ? null : (
                        <div className="welcome-image-container">
                            <img
                                src={welcomeImage}
                                alt="welcome-usa-refugee"
                                className="welcome-image"
                            />
                        </div>
                    )}
                </div>

            </div>
        </div>
    );


};

export default ProvideAidPage;