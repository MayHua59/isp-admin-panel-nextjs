"use client";

import { faSave, faTimes, faSitemap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";

export default function AddOnuPage() {
  const [formData, setFormData] = useState({
    serial_number: "",
    model: "",
    manufacturer: "",
    location: "",
  });

  const [errors, setErrors] = useState({
    serial_number: "",
    model: "",
    manufacturer: "",
    location: "",
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

    if (!formData.serial_number.trim()) {
      newErrors.serial_number = "Serial Number is required";
      valid = false;
    }
    if (!formData.model.trim()) {
      newErrors.model = "Model is required";
      valid = false;
    }
    if (!formData.manufacturer.trim()) {
      newErrors.manufacturer = "Manufacturer is required";
      valid = false;
    }
    // Location is optional, so no validation here unless explicitly needed

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("ONU Form submitted:", formData);
      console.log("ONU added successfully!");
      setFormData({
        serial_number: "",
        model: "",
        manufacturer: "",
        location: "",
      });
      setErrors({
        serial_number: "",
        model: "",
        manufacturer: "",
        location: "",
      });
    }
  };

  return (
    <div className="container-fluid">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="mb-0">
          <FontAwesomeIcon icon={faSitemap} className="me-2" style={{ color: "#000" }} />
          Add New ONU
        </h2>
        <Link href="/company/networking/onu" className="btn btn-outline-secondary">
          <FontAwesomeIcon icon={faTimes} className="me-2" />
          Cancel
        </Link>
      </div>

      {/* ONU Form */}
      <div className="card shadow">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="serial_number" className="form-label">
                Serial Number <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className={`form-control ${errors.serial_number ? "is-invalid" : ""}`}
                id="serial_number"
                name="serial_number"
                value={formData.serial_number}
                onChange={handleChange}
                placeholder="Enter serial number"
              />
              {errors.serial_number && <div className="invalid-feedback">{errors.serial_number}</div>}
            </div>

            <div className="mb-3">
              <label htmlFor="model" className="form-label">
                Model <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className={`form-control ${errors.model ? "is-invalid" : ""}`}
                id="model"
                name="model"
                value={formData.model}
                onChange={handleChange}
                placeholder="Enter model"
              />
              {errors.model && <div className="invalid-feedback">{errors.model}</div>}
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

            <div className="mb-3">
              <label htmlFor="location" className="form-label">
                Location (Optional)
              </label>
              <input
                type="text"
                className="form-control"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Enter location"
              />
            </div>

            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <button type="submit" className="btn btn-primary">
                <FontAwesomeIcon icon={faSave} className="me-2" />
                Save ONU
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}