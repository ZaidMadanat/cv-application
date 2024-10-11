import { useState } from 'react'; 

function EducationInfo() { 
    const[educationData, setEducationData] = useState({ 
        uniName: "Stanford University",
        major: "Computer Science",
        gradStart: "",
        gradEnd: "",
    });

    const handleChange = (e) => { 
        const { name, value } = e.target; 
        setEducationData({ 
            ...educationData, 
            [name]: value
        });        
    };

    const handleSubmit = (e) => { 
        e.preventDefault(); 
        localStorage.setItem("educationData", JSON.stringify(educationData)); 
    };
    return ( 
        <form onSubmit={handleSubmit}> 
            <input type="text" name="uniName" value={educationData.uniName} onChange={handleChange} />
            <input type="text" name="major" value={educationData.major} onChange={handleChange} />
            <input type="text" name="gradStart" value={educationData.gradStart} onChange={handleChange} />
            <input type="text" name="gradEnd" value={educationData.gradEnd} onChange={handleChange} />
            <button type="submit">Submit</button>
        </form>
    );
}

export default EducationInfo;