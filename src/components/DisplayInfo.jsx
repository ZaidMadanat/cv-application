import '../styles/displayInfo.css';
import emailIcon from '../assets/email.svg';
import phoneIcon from '../assets/phone.svg';
import locationIcon from '../assets/location.svg';

function DisplayInfo({ formData }) {
  return (
    <div className="DisplayInfo">
      <h4>{formData.name}</h4>
      <ul className="Contact">
        <li>
          <img src={emailIcon} alt="Email Icon" className="icon" />
          {formData.email}
        </li>
        <li>
          <img src={phoneIcon} alt="Phone Icon" className="icon" />
          <strong>Phone </strong>{formData.phone}
        </li>
        <li>
          <img src={locationIcon} alt="Location Icon" className="icon" />
          <strong>Location </strong>{formData.location}
        </li>
      </ul>
    </div>
  );
}

export default DisplayInfo;