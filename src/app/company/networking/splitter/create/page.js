"use client";

import { faSave, faTimes, faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";

export default function AddSplitterPage() {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    type: "",
    manufacturer: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    location: "",
    type: "",
    manufacturer: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }
    if (!formData.location.trim()) {
      newErrors.location = "Location is required";
      valid = false;
    }
    if (!formData.type.trim()) {
      newErrors.type = "Type is required";
      valid = false;
    }
    if (!formData.manufacturer.trim()) {
      newErrors.manufacturer = "Manufacturer is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Splitter Form submitted:", formData);
      console.log("Splitter added successfully!");
      setFormData({
        name: "",
        location: "",
        type: "",
        manufacturer: "",
      });
      setErrors({
        name: "",
        location: "",
        type: "",
        manufacturer: "",
      });
    }
  };

  return (
    <div className="container-fluid">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="mb-0">
          <FontAwesomeIcon icon={faCodeBranch} className="me-2" style={{ color: "#000" }} />
          Add New Splitter
        </h2>
        <Link href="/company/networking/splitter" className="btn btn-outline-secondary">
          <FontAwesomeIcon icon={faTimes} className="me-2" />
          Cancel
        </Link>
      </div>

      {/* Splitter Form */}
      <div className="card shadow">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter splitter name"
              />
              {errors.name && <div className="invalid-feedback">{errors.name}</div>}
            </div>

            <div className="mb-3">
              <label htmlFor="location" className="form-label">
                Location <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className={`form-control ${errors.location ? "is-invalid" : ""}`}
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Enter location"
              />
              {errors.location && <div className="invalid-feedback">{errors.location}</div>}
            </div>

            <div className="mb-3">
              <label htmlFor="type" className="form-label">
                Type <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className={`form-control ${errors.type ? "is-invalid" : ""}`}
                id="type"
                name="type"
                value={formData.type}
                onChange={handleChange}
                placeholder="e.g., 1x8, 1x16, PLC"
              />
              {errors.type && <div className="invalid-feedback">{errors.type}</div>}
            </div>

            <div className="mb-3">
              <label htmlFor="manufacturer" className="form-label">
                Manufacturer <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className={`form-control ${errors.manufacturer ? "is-invalid" : ""}`}
                id="manufacturer"
                name="manufacturer"
                value={formData.manufacturer}
                onChange={handleChange}
                placeholder="Enter manufacturer"
              />
              {errors.manufacturer && <div className="invalid-feedback">{errors.manufacturer}</div>}
            </div>

            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <button type="submit" className="btn btn-primary">
                <FontAwesomeIcon icon={faSave} className="me-2" />
                Save Splitter
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}