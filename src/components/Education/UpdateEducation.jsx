function handleChange(setFormData, id, e) {
    const {name, value } = e.target;

    setFormData(previous => previous.map( item => 
        item.id === id ? {...item, [name]: value} : item 
    ));
}
export default handleChange