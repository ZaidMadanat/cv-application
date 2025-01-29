import EducationForm from "./educationForm"

function EducationInfo({formData, setFormData}) { 
    const handleChange = (e) => { 
        const { name, value } = e.target; 
        setFormData({ 
            ...formData, 
            [name]: value,
        });        
    };
    return ( 
        <EducationForm formData={formData} handleChange={handleChange}/>
    )
}

export default EducationInfo;