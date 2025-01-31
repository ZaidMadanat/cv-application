function handleChange(setFormData, id, e) {
    const {name, value } = e.target;

    setFormData((prevData) => 
        prevData.map((entry) => 
            entry.id === id ? { ...entry, [name]: value} : entry
        )
    );
}
export default handleChange