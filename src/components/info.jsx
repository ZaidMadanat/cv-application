import { useState } from "react";

function GeneralInfo() { 
    const handleChange = (e) => {
        const { name, value } = e.target; 
        setFormData({ 
            ...formData, 
            [name]: value
        });
    };

    const handleSubmit = (e) => { 
        e.preventDefault();
    };

    return ( 
        <form onSubmit={handleSubmit} className='FormInfo'> 
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter Name" />
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter Degree"/>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter Phone Number" />
            <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="Enter your location" />
            <button type="submit">Submit</button>
        </form>
    );
}

export default GeneralInfo;