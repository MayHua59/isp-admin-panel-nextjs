"use client";
import { faSave, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";

export default function AddOltPage() {
  const [formData, setFormData] = useState({
    name: "",
    ip_address: "",
    location: "",
    serial_number: "",
    model: "",
    vendor: "",
    managed_by: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    ip_address: "",
    serial_number: "",
    model: "",
    vendor: "",
    managed_by: "",
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
    if (!formData.ip_address.trim()) {
      newErrors.ip_address = "IP Address is required";
      valid = false;
    }
    if (!formData.serial_number.trim()) {
      newErrors.serial_number = "Serial Number is required";
      valid = false;
    }
    if (!formData.model.trim()) {
      newErrors.model = "Model is required";
      valid = false;
    }
    if (!formData.vendor.trim()) {
      newErrors.vendor = "Vendor is required";
      valid = false;
    }
    if (!formData.managed_by.trim()) {
      newErrors.managed_by = "Managed By is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Here you would typically send the data to your API
      console.log("OLT Form submitted:", formData);
      alert("OLT added successfully!");
      setFormData({
        name: "",
        ip_address: "",
        location: "",
        serial_number: "",
        model: "",
        vendor: "",
        managed_by: "",
      });
    }
  };

  return (
    <div className="container-fluid">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="mb-0">Add New OLT</h2>
        <Link href="/company/networking/olt" className="btn btn-outline-secondary">
          <FontAwesomeIcon icon={faTimes} className="me-2" />
          Cancel
        </Link>
      </div>

      {/* OLT Form */}
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
              />
              {errors.name && <div className="invalid-feedback">{errors.name}</div>}
            </div>

            <div className="mb-3">
              <label htmlFor="ip_address" className="form-label">
                IP Address <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className={`form-control ${errors.ip_address ? "is-invalid" : ""}`}
                id="ip_address"
                name="ip_address"
                value={formData.ip_address}
                onChange={handleChange}
              />
              {errors.ip_address && <div className="invalid-feedback">{errors.ip_address}</div>}
            </div>

            <div className="mb-3">
              <label htmlFor="location" className="form-label">
                Location
              </label>
              <input
                type="text"
                className="form-control"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
              />
            </div>

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
              />
              {errors.model && <div className="invalid-feedback">{errors.model}</div>}
            </div>

            <div className="mb-3">
              <label htmlFor="vendor" className="form-label">
                Vendor <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className={`form-control ${errors.vendor ? "is-invalid" : ""}`}
                id="vendor"
                name="vendor"
                value={formData.vendor}
                onChange={handleChange}
              />
              {errors.vendor && <div className="invalid-feedback">{errors.vendor}</div>}
            </div>

            <div className="mb-3">
              <label htmlFor="managed_by" className="form-label">
                Managed By <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className={`form-control ${errors.managed_by ? "is-invalid" : ""}`}
                id="managed_by"
                name="managed_by"
                value={formData.managed_by}
                onChange={handleChange}
              />
              {errors.managed_by && <div className="invalid-feedback">{errors.managed_by}</div>}
            </div>

            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <button type="submit" className="btn btn-primary">
                <FontAwesomeIcon icon={faSave} className="me-2" />
                Save OLT
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}