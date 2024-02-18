import React, { useState } from "react";
import axios from "axios";

const DataForm = () => {
  const [formData, setFormData] = useState({
    hemoglobin: "",
    rbc: "",
    wbc: "",
    platelets: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to the Node.js server API
      await axios.post("http://localhost:3001/api/storeData", formData);

      // Optionally, you can reset the form data after successful submission
      setFormData({
        hemoglobin: "",
        rbc: "",
        wbc: "",
        platelets: "",
        date: "",
      });

      console.log("Data submitted successfully");
    } catch (error) {
      console.error("Error submitting data:", error.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "300px",
        margin: "auto",
      }}
    >
      <label style={{ marginBottom: "10px" }}>
        Hemoglobin:
        <input
          type="text"
          name="hemoglobin"
          value={formData.hemoglobin}
          onChange={handleChange}
          style={{ width: "100%" }}
        />
      </label>

      <label style={{ marginBottom: "10px" }}>
        RBC:
        <input
          type="text"
          name="rbc"
          value={formData.rbc}
          onChange={handleChange}
          style={{ width: "100%" }}
        />
      </label>

      <label style={{ marginBottom: "10px" }}>
        WBC:
        <input
          type="text"
          name="wbc"
          value={formData.wbc}
          onChange={handleChange}
          style={{ width: "100%" }}
        />
      </label>

      <label style={{ marginBottom: "10px" }}>
        Platelets:
        <input
          type="text"
          name="platelets"
          value={formData.platelets}
          onChange={handleChange}
          style={{ width: "100%" }}
        />
      </label>

      <label style={{ marginBottom: "10px" }}>
        Date:
        <input
          type="text"
          name="date"
          value={formData.date}
          onChange={handleChange}
          style={{ width: "100%" }}
        />
      </label>

      <button type="submit" style={{ width: "100%" }}>
        Submit
      </button>
    </form>
  );
};

export default DataForm;
