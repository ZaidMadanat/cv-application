import './styles/app.css';
import './styles/form.css';
import example from './Example.jsx';
import {useState} from "react";
import {v4 as uuidv4} from 'uuid'; 


// Form Components
import GeneralInfo from './components/info.jsx';
import JobInfo from './components/Job/job.jsx';
import addEducation from './components/Education/addEducation.jsx';
import EducationForm from './components/Education/educationForm.jsx';


// Display Components 
import DisplayInfo from "./components/DisplayInfo.jsx";
import DisplayJob from "./components/Job/DisplayJob.jsx";
import DisplayEducation from './components/Education/DisplayEducation.jsx';


function App() {
  
  // Create States for each Data Entry, using the examples folder to put placeholder data. 
  const [GeneralData, setGeneralData] = useState(example.general); 
  const [EducationData, setEducationData] = useState([
    {id: uuidv4(), uniName: "Stanford University", major: "CS", gradStart: "2016", gradEnd: "2020" }
  ]);
  const [JobData, setJobData] = useState(example.job);



  return ( 
    <div id='main'>
      <div className='edits'> 
        <div className='Section' id='1'>
          <h1>General Information</h1>
          <GeneralInfo formData={GeneralData} setFormData={setGeneralData}/> 
          <hr />
        </div>

        <div className='Section' id='2'> 
          <h1>Job Experience</h1>
          <JobInfo formData={JobData} setFormData={setJobData}/>
          <hr /> 
        </div>

        <div className='Section' id='3'> 
          <h1>Education</h1>
          {EducationData.map((school =>           
            <EducationForm  
              key={school.id}
              formData={school}
              handleChange={(e) => { 
                const {name, value} = e.target; 
                setEducationData((prevData) => 
                  prevData.map((entry) => 
                    entry.id === school.id ? {...entry, [name]: value} : entry
                  )  
              );
              }}
            />
          ))}

          <button className='add' onClick={() => addEducation(setEducationData)}>Add</button>
          <hr />
        </div>
      </div>
  
      <div className='display'>
         <DisplayInfo formData={GeneralData}/>
         <DisplayJob formData={JobData}/>
         <DisplayEducation formData={EducationData}/>
      </div>
       
    </div> 
  )
}

export default App
