import React, { useState } from 'react';

const ContactForm = () => {

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Function to handle input changes Manually
  const handleChange = (e) => {
    const { name, value } = e.target; // Get the field name and value from the event

    setFormData(prevData => {
      // Manually update each field
      console.log("Name :", name, "Value :", value); // Log the field name and value
      if (name === "name") {
        return { ...prevData, name: value };
      } else if (name === "email") {
        return { ...prevData, email: value };
      } else if (name === "message") {
        return { ...prevData, message: value };
      }
    });
  };

    // Automatic handling of form input changes
    // const handleChange = (e) => {
    //   setFormData({
    //     ...formData,
    //     [e.target.name]: e.target.value,

    //   });
    // };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    console.log('Form Data:', formData); // Log the form data after submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input 
          type="text" 
          name="name" 
          value={formData.name}
          onChange={handleChange} 
        />

      </div>
      <div>
        <label>Email:</label>
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
        />
      </div>
      <div>
        <label>Message:</label>
        <textarea 
          name="message" 
          value={formData.message} 
          onChange={handleChange} 
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
