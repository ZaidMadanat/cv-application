import { useState } from "react";

function GeneralInfo() { 
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        location: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target; 
        setFormData({ 
            ...formData, 
            [name]: value
        });
    };

    const handleSubmit = (e) => { 
        e.preventDefault();
        localStorage.setItem("formData", JSON.stringify(formData)); 
    };

    return ( 
        <form onSubmit={handleSubmit}> 
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
            <input type="text" name="location" value={formData.location} onChange={handleChange} />
            <button type="submit">Submit</button>
        </form>
    );
}

export default GeneralInfo;