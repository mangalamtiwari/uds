
import React, { useState } from 'react';
import '../../styles/Form.css'; // Add your custom styles path

const servicesOptions = [
  'Pre-Wedding Shoot',
  'Candid Photography',
  'Traditional Photography',
  'Cinematic Video',
  'Traditional Video',
  'Photo Album',
  'Podcast',
  'Live Broadcast',
  'Others',
];

const Form = () => {
  const [formData, setFormData] = useState({
    services: [],
    date: '',
    phoneNumber: '',
    address: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    const updatedServices = checked
      ? [...formData.services, name]
      : formData.services.filter((service) => service !== name);

    setFormData({
      ...formData,
      services: updatedServices,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Conditions
    if (formData.services.length === 0) {
      alert('Please select at least one plan.');
      return;
    }

    const currentDate = new Date();
    const selectedDate = new Date(formData.date);

    if (selectedDate.getFullYear() - currentDate.getFullYear() > 2 || selectedDate.getFullYear() <  currentDate.getFullYear()) {
      alert('Please select a date with a gap of at most 2 years from the current date and Should Not be previous dates');
      return;
    }

    if (!/^\d{10}$/.test(formData.phoneNumber)) {
      alert('Please enter a valid 10-digit phone number.');
      return;
    }

    // If all conditions pass, proceed with form submission logic
    try {
      const response = await fetch('http://localhost:3001/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Response Successfully submitted. Someone will contact you soon.");
        console.log('Form submitted successfully!');
        // You can add additional logic here, such as resetting the form
        setFormData({
          services: [],
          date: '',
          phoneNumber: '',
          address: '',
        });
      } else {
        console.error('Form submission failed.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h3>Book Our Services</h3>
        <h5>Opt For Plans: </h5>
        {servicesOptions.map((service) => (
          <div key={service} className="checkbox-container">
            <input
              type="checkbox"
              name={service}
              checked={formData.services.includes(service)}
              onChange={handleCheckboxChange}
            />
            <label>{service}</label>
          </div>
        ))}
        <div>
          <label>
            Function Date:
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            Contact Detail (Phone Number):
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            Address:
            <textarea
              name="address"
              value={formData.address}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
