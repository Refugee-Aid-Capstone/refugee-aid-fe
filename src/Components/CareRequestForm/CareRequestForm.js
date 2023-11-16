import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../CareRequestForm/CareRequestForm.scss'; 

function CareRequestForm() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        aidType: '',
        description: '',
        // more fields ?
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here we should add the logic to send data to the server
        // For now, we'll just log the formData and navigate to a different page
        console.log(formData);

        // After submitting, navigate to a different page, mayby the dashboard or a success page?
        navigate('/success'); 
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
