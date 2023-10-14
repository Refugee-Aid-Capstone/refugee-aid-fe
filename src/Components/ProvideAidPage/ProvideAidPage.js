import React, { useState } from 'react';
import NavBar from '../NavBar/NavBar';
import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client';

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

    const { loading, error, data } = useQuery(GET_ORGANIZATIONS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    console.log(data);  // dont forget to delete

    const aidRequests = data && data.requests ? data.requests : [];

    console.log(aidRequests[0]); //dont forget to delete
    const example_aid_requests = aidRequests.slice(0, 5);


    console.log(aidRequests.length); // dont forget to delete
    console.log(example_aid_requests.length); // dont forget to delete


    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);

        const foundRequest = aidRequests.find(req => req.description.toLowerCase().includes(value.toLowerCase()));
        setSelectedOrganization(foundRequest);
        
    };


    return (
        <div>
            <NavBar />

            <div>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder="Search for organizations"
                />
                <ul>
                    {example_aid_requests.map(item => (
                        <li key={item.id}>
                            <h3>{item.aidType}</h3>
                            <p>{item.description}</p>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                {selectedOrganization && (
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
                )}
            </div>
        </div>
    );
};

export default ProvideAidPage;
