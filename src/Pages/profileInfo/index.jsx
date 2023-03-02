import React, { useState } from "react";
import styles from "./profile.css";

function ProfilePage() {
  const [username, setUsername] = useState("John Doe");
  const [address, setAddress] = useState("123 Main St");
  const [email, setEmail] = useState("johndoe@gmail.com");
  const [contactNumber, setContactNumber] = useState("555-555-5555");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleContactNumberChange = (e) => {
    setContactNumber(e.target.value);
  };

  return (
    <div className="profile">
      <h1 className="title">Profile Info</h1>
      <div className="photoContainer">
        <img
          className="photo"
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Profile Photo"
        />
        <button className="editButton">Edit Photo</button>
      </div>
      <div className="formContainer">
        <div className="formGroup">
          <label className="label" htmlFor="username">
            Username:
          </label>
          <input
            className="input"
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="formGroup">
          <label className="label" htmlFor="address">
            Address:
          </label>
          <input
            className="input"
            type="text"
            id="address"
            value={address}
            onChange={handleAddressChange}
          />
        </div>
        <div className="formGroup">
          <label className="label" htmlFor="email">
            Email:
          </label>
          <input
            className="input"
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="formGroup">
          <label className="label" htmlFor="contactNumber">
            Contact Number:
          </label>
          <input
            className="input"
            type="tel"
            id="contactNumber"
            value={contactNumber}
            onChange={handleContactNumberChange}
          />
        </div>
        <button className="saveButton">Save Changes</button>
      </div>
    </div>
  );
}

export default ProfilePage;
