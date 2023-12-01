import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../CareRequestForm/CareRequestForm.scss';
import { useMutation } from '@apollo/client';
import { CREATE_AID_REQUEST } from '../../apollo-client/mutations';
import Spinner from '../Spinner/Spinner';

function CareRequestForm({ orgId }) { 

    console.log(orgId)
    
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    aidType: '',
    description: '',
    language: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [createAidRequest, { loading }] = useMutation(CREATE_AID_REQUEST);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.aidType || !formData.description) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    createAidRequest({
      variables: {
        aidType: formData.aidType,
        description: formData.description,
        organizationId: parseInt(orgId, 10), 
        language: formData.language || null,
      },
    })
      .then(() => navigate('/organization-dashboard'))
      .catch((err) => {
        console.error('Error creating aid request:', err);
        setErrorMessage(`Failed to create aid request: ${err.message}`);
      });
  };

  return (
    <div className='care-request-form-container'>
      <form onSubmit={handleSubmit} className='care-request-form'>
        {/* Aid Type Field */}
        <div className='form-group'>
          <label htmlFor='aidType'>Aid Type:</label>
          <select
            id='aidType'
            name='aidType'
            value={formData.aidType}
            onChange={handleChange}
            className='form-control'
          >
            <option value=''>Select Aid Type</option>
            <option value='food'>Food</option>
            <option value='medical'>Medical</option>
            <option value='legal'>Legal</option>
            <option value='language'>Language</option>
            <option value='other'>Other</option>
          </select>
        </div>
        {/* Description Field */}
        <div className='form-group'>
          <label htmlFor='description'>Description:</label>
          <textarea
            id='description'
            name='description'
            value={formData.description}
            onChange={handleChange}
            className='form-control'
          />
        </div>
        {/* Language Field (Optional) */}
        <div className='form-group'>
          <label htmlFor='language'>Language (optional):</label>
          <input
            id='language'
            name='language'
            value={formData.language}
            onChange={handleChange}
            className='form-control'
          />
        </div>
        {/* Error Message */}
        {errorMessage && <div className='error-message'>{errorMessage}</div>}
        {/* Submit Button */}
        {loading ? (
          <Spinner />
        ) : (
          <button type='submit' className='submit-button' disabled={loading}>
            Submit Request
          </button>
        )}
      </form>
    </div>
  );
}

export default CareRequestForm;
 