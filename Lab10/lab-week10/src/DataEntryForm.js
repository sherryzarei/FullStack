import React, { useState } from "react";

const DataEntryForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    address: "",
    address2: "",
    city: "",
    province: "",
    postalCode: "",
    termsAccepted: false,
  });

  const [submittedData, setSubmittedData] = useState(null); 

  const provinces = [
    "Alberta",
    "British Columbia",
    "Manitoba",
    "New Brunswick",
    "Newfoundland and Labrador",
    "Nova Scotia",
    "Ontario",
    "Prince Edward Island",
    "Quebec",
    "Saskatchewan",
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.termsAccepted) {
      setSubmittedData(formData); 
      alert("Form submitted successfully!");
    } else {
      alert("Please accept the terms and conditions.");
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto" }}>
      <form onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
        <h2>Data Entry Form</h2>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
            required
          />
        </div>
        <div>
          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            required
          />
        </div>
        <div>
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="1234 Main St"
            required
          />
        </div>
        <div>
          <label>City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="City"
            required
          />
        </div>
        <div>
          <label>Province</label>
          <select
            name="province"
            value={formData.province}
            onChange={handleChange}
            required
          >
            <option value="">Choose...</option>
            {provinces.map((province) => (
              <option key={province} value={province}>
                {province}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Postal Code</label>
          <input
            type="text"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            placeholder="Postal Code"
            required
          />
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
            />
            Agree to Terms & Conditions
          </label>
        </div>
        <button type="submit" style={{ backgroundColor: "green", color: "white" }}>
          Submit
        </button>
      </form>

      {submittedData && (
        <div style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "8px" }}>
          <h3>Submitted Data Summary</h3>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Full Name:</strong> {submittedData.fullName}</p>
          <p><strong>Address:</strong> {submittedData.address}</p>
          <p><strong>City:</strong> {submittedData.city}</p>
          <p><strong>Province:</strong> {submittedData.province}</p>
          <p><strong>Postal Code:</strong> {submittedData.postalCode}</p>
        </div>
      )}
    </div>
  );
};

export default DataEntryForm;