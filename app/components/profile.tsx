import { FaMapMarkerAlt } from 'react-icons/fa';

export default function Profile() {
  return (
    <div className="profile">
      <div className="profile-picture"></div>
      <div className="profile-info">
        <h1>Hi! I'm Moises Figueroa</h1>
        <p><FaMapMarkerAlt /> Chile, Concepción</p>
      </div>
    </div>
  );
}

  