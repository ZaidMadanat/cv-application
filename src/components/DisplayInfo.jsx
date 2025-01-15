
function DisplayInfo({formData}) { 
    return (
        <div className="DisplayInfo">
          <h2>Your Information</h2>
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Phone:</strong> {formData.phone}</p>
          <p><strong>Location:</strong> {formData.location}</p>
        </div>
    );
}

export default DisplayInfo;