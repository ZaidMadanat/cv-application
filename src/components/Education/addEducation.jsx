import {v4 as uuidv4} from 'uuid'; 

/*
Adds a new educational school and updates the SetFormData array 
with the addition of a new school. Then returns the EducationForm 
which handles any updates done on each array number and prints out 
the form. 
*/
function addEducation(setFormData ) { 
    const newSchool = { 
        id: uuidv4(), 
        uniName: "", 
        major: "", 
        gradStart: "", 
        gradEnd: "", 
    };
    setFormData((prevData) => [...prevData, newSchool])
}

export default addEducation