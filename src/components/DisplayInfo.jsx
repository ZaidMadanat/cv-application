function DisplayInfo({ formData }) {
  return (
    <div className="displays">
      <h1 className="resume-name">{formData.name}</h1>
      
      <div className="resume-contact">
        <ul>
          <li>📧 {formData.email}</li>
          <li>📞 {formData.phone}</li>
          <li>📍 {formData.location}</li>
        </ul>
      </div>

      
      <div className="resume-section">
        <h2>Job Experience</h2>
        {formData.jobData.map((job, index) => (
          <div key={index} className="job-entry">
            <h3>{job.companyName}</h3>
            <p className="job-title">{job.positionName}</p>
            <p className="job-dates">
              {job.startDate} - {job.endDate}
            </p>
            <p className="job-description">{job.description}</p>
          </div>
        ))}
      </div>

      
      <div className="resume-section">
        <h2>Education</h2>
        {formData.educationData.map((edu, index) => (
          <div key={index} className="education-entry">
            <h3>{edu.uniName}</h3>
            <p className="degree">{edu.major}</p>
            <p className="edu-dates">
              {edu.gradStart} - {edu.gradEnd}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DisplayInfo;