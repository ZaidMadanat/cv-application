import { useState } from 'react';

function JobInfo({formData, setFormData}) { 

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
            <input type="text" name="companyName" value={jobData.companyName} onChange={handleChange} placeholder="Company Name" />
            <input type="text" name="positionName" value={jobData.positionName} onChange={handleChange} placeholder="Position Name" />
            <input type="text" name="startDate" value={jobData.startDate} onChange={handleChange} placeholder="Start Date" />
            <input type="text" name="endDate" value={jobData.endDate} onChange={handleChange} placeholder="End Date" />
            <textarea name="description" value={jobData.description} onChange={handleChange} placeholder="Description"></textarea>
            <button type="submit">Submit</button>
        </form>
    );
}

export default JobInfo;