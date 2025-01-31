import {v4 as uuidv4} from 'uuid'; 

/* 
Adds a new job with a uuid, then spreads the previous data, appending the new data
*/
function addJob(setFormData) { 
    const newJob = { 
        id: uuidv4(), 
        companyName: "", 
        positionName: "", 
        startDate: "", 
        endDate: "", 
        description: "",   
    }; 
    setFormData((prevData) => [...prevData, newJob]);
}

export default addJob