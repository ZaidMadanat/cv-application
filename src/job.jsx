import { useState } from 'react';

function JobInfo() { 
    const [jobData, setJobData] = useState({ 
        companyName: "",
        positionName: "",
        startDate: "",
        endDate: "",
        description: "",
    });

    const handleChange = (e) => { 
        const { name, value } = e.target; 
        setJobData({ 
            ...jobData, 
            [name]: value
        });        
    };

    const handleSubmit = (e) => { 
        e.preventDefault(); 
        localStorage.setItem("jobData", JSON.stringify(jobData)); 
    };

    return ( 
        <form onSubmit={handleSubmit}> 
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