function DisplayJob({formData}) { 
    return (
        <div className="DisplayJob">
          <h2>Your Information</h2>
          <p><strong>Company:</strong> {formData.companyName}</p>
          <p><strong>Position:</strong> {formData.positionName}</p>
          <p><strong>Start Date:</strong> {formData.startDate}</p>
          <p><strong>End Date:</strong> {formData.endDate}</p>
          <p><strong>Description:</strong> {formData.description}</p>
        </div>
    );
}

export default DisplayJob;