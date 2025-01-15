import { useState } from 'react'; 

function EducationInfo({formData, setFormData}) { 
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
            <input type="text" name="uniName" value={educationData.uniName} onChange={handleChange} placeholder="Enter University Name" />
            <input type="text" name="major" value={educationData.major} onChange={handleChange} placeholder="Enter Major"/>
            <input type="text" name="gradStart" value={educationData.gradStart} onChange={handleChange} placeholder="Enter your graduation start date" />
            <input type="text" name="gradEnd" value={educationData.gradEnd} onChange={handleChange} placeholder="Enter your graduation end date"/>
            <button type="submit">Submit</button>
        </form>
    );
}

export default EducationInfo;