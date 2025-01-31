function DisplayJob({formData}) { 
    return (
        <div className="DisplayJob">
          {formData.map((school) => 
            <div>          
              <p><strong>Company:</strong> {school.companyName}</p>
              <p><strong>Position:</strong> {school.positionName}</p>
              <p><strong>Start Date:</strong> {school.startDate}</p>
              <p><strong>End Date:</strong> {school.endDate}</p>
              <p><strong>Description:</strong> {school.description}</p>
            </div>
          )}
        </div>
    );
}

export default DisplayJob;