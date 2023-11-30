import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../CareRequestForm/CareRequestForm.scss';
import { useMutation } from '@apollo/client';
import { CREATE_AID_REQUEST } from '../../apollo-client/mutations';

    function CareRequestForm({ organizationId }) {
        const navigate = useNavigate();
        const [formData, setFormData] = useState({
          aidType: '',
          description: '',
        });

        const [createAidRequest, { loading, error }] = useMutation(CREATE_AID_REQUEST);

        // Temporary console logs to bypass unused variable warning
console.log(loading, error);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      createAidRequest({ variables: { ...formData, organizationId } })
        .then(() => {
          navigate('/organization-dashboard');
        })
        .catch((err) => {
            console.error('Error creating aid request:', err);
            alert(`Failed to create aid request: ${err.message}`);
          });          
  };
     

    return (
        <div className="care-request-form-container">
            <form onSubmit={handleSubmit} className="care-request-form">
                <div className="form-group">
                    <label htmlFor="aidType">Aid Type:</label>
                    <select name="aidType" value={formData.aidType} onChange={handleChange} className="form-control">
                        <option value="">Select Aid Type</option>
                        <option value="food">Food</option>
                        <option value="medical">Medical</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <textarea name="description" value={formData.description} onChange={handleChange} className="form-control" />
                </div>
                <button type="submit" className="submit-button">Submit Request</button>
            </form>
        </div>
    );
}

export default CareRequestForm;
