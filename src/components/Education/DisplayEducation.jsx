function DisplayEducation({ formData }) {
  return (
    <div>
      {formData.map((school, index) => (
        <div key={index}>
          <p><strong>University:</strong> {school.uniName}</p>
          <p><strong>Major:</strong> {school.major}</p>
          <p><strong>Start Date:</strong> {school.gradStart}</p>
          <p><strong>End Date:</strong> {school.gradEnd}</p>
        </div>
      ))}
    </div>
  );
}

export default DisplayEducation;