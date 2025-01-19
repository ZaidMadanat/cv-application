import './styles/app.css';
import './styles/form.css';
import example from './Example.jsx';
import {useState} from "react";

// Form Components
import GeneralInfo from './components/info.jsx';
import JobInfo from './components/job.jsx';
import EducationInfo from './components/education.jsx';


// Display Components
import DisplayInfo from "./components/DisplayInfo.jsx"
import DisplayJob from "./components/DisplayJob.jsx"
import DisplayEducation from './components/DisplayEducation.jsx';



function App() {
  
  // Create States for each Data Entry, using the examples folder to put placeholder data. 
  const [GeneralData, setGeneralData] = useState(example.general); 
  const [EducationData, setEducationData] = useState(example.education);
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
          <EducationInfo formData={EducationData} setFormData={setEducationData}/>
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
