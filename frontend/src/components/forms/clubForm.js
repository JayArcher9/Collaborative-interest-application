import React, { useState } from 'react';
import axios from 'axios';
import './clubForm.css';

function ClubForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    enrollmentNumber: '',
    phoneNumber: '',
    previousExperience: '',
    videoUrl: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form data:', formData);

    try {
      await axios.post('http://localhost:4000/club', {formData});
      console.log('Form submitted successfully');

      // Clear the form
      setFormData({
        name: '',
        email: '',
        enrollmentNumber: '',
        phoneNumber: '',
        previousExperience: '',
        videoUrl: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="enrollmentNumber">Enrollment Number:</label>
        <input
          type="text"
          id="enrollmentNumber"
          name="enrollmentNumber"
          value={formData.enrollmentNumber}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="previousExperience">Previous Experience:</label>
        <textarea
          id="previousExperience"
          name="previousExperience"
          value={formData.previousExperience}
          onChange={handleChange}
        ></textarea>
      </div>
      <div>
        <label htmlFor="videoUrl">Video URL:</label>
        <input
          type="url"
          id="videoUrl"
          name="videoUrl"
          value={formData.videoUrl}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ClubForm;