import './styles/app.css';
import './styles/form.css';
import './styles/displayInfo.css'
import example from './Example.jsx';
import {useState} from "react";
import {v4 as uuidv4} from 'uuid'; 


// Form Components
import GeneralInfo from './components/info.jsx';
import JobForm from './components/Job/jobForm.jsx';
import addJob from './components/Job/addJob.jsx';
import addEducation from './components/Education/addEducation.jsx';
import EducationForm from './components/Education/educationForm.jsx';
import handleChange from './components/handleChange.jsx';


// Display Components 
import DisplayInfo from "./components/DisplayInfo.jsx";

function App() {
  
  // Create States for each Data Entry, examples folder has p
  const [GeneralData, setGeneralData] = useState(example.general); 
  const [EducationData, setEducationData] = useState([
    {id: uuidv4(), uniName: "Stanford University", major: "BS, Computer Science", gradStart: "2016", gradEnd: "2020" }
  ]);
  const [JobData, setJobData] = useState([
    {id: uuidv4(4), companyName: "Google", positionName: "Junior Software Engineer", startDate: "2020", endDate: "2022", description: "developer"}
  ]);



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
          {JobData.map((job) => 
            <JobForm 
              key={job.id}
              formData={job}
              handleChange={(e) => handleChange(setJobData, job.id, e)}
            />
          )}
          <button className='add' onClick={() => addJob(setJobData)}>Add</button>
          <hr /> 
        </div>

        <div className='Section' id='3'> 
          <h1>Education</h1>
          {EducationData.map((school) => 
            <EducationForm 
              key={school.id}
              formData={school}
              handleChange={(e) => handleChange(setEducationData, school.id, e)}
            />
          )}
          <button className='add' onClick={() => addEducation(setEducationData)}>Add</button>
          <hr />
        </div>
      </div>
        <DisplayInfo 
          formData={{ 
            name: GeneralData.name,
            email: GeneralData.email,
            phone: GeneralData.phone, 
            location: GeneralData.location, 
            jobData: JobData, 
            educationData: EducationData
          }}
        />    
    </div> 
  )
}

export default App
