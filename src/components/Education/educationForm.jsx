
/*
Display the education Form on the Left Hand Side of the CV application. 
*/
function EducationForm(formData, handleChange) {
    const handleSubmit = (e) => { 
        e.preventDefault(); 
    };
    return ( 
        <form onSubmit={handleSubmit} className='FormInfo'> 
            <input type="text" name="uniName" value={formData.uniName} onChange={handleChange} placeholder="Enter University Name" />
            <input type="text" name="major" value={formData.major} onChange={handleChange} placeholder="Enter Major"/>
            <input type="text" name="gradStart" value={formData.gradStart} onChange={handleChange} placeholder="Enter your graduation start date" />
            <input type="text" name="gradEnd" value={formData.gradEnd} onChange={handleChange} placeholder="Enter your graduation end date"/>
            <button type="submit">Submit</button>
        </form>
    );
}

export default EducationForm;