import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../CareRequestForm/CareRequestForm.scss'; 

function CareRequestForm() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        aidType: '',
        description: '',
        // You can add more fields as needed
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
        // Here you should add the logic to send data to your server
        // For now, we'll just log the formData and navigate to a different page
        console.log(formData);

        // After submitting, navigate to a different page, e.g., the dashboard or a success page
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
                        {/* Add other options as necessary */}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <textarea name="description" value={formData.description} onChange={handleChange} className="form-control" />
                </div>
                {/* Add other input fields similarly */}
                <button type="submit" className="submit-button">Submit Request</button>
            </form>
        </div>
    );
}

export default CareRequestForm;
