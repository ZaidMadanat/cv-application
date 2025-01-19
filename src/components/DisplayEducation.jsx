function DisplayEducation({formData}) { 
    return (
        <div className="DisplayEducation">
          <h2></h2>
          <p><strong>University:</strong> {formData.uniName}</p>
          <p><strong>Major:</strong> {formData.major}</p>
          <p><strong>Graduation Start:</strong> {formData.gradStart}</p>
          <p><strong>Graduation End:</strong> {formData.gradEnd}</p>
        </div>
    );
}

export default DisplayEducation;