"use client";
import { faSave, faTimes, faServer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";

export default function AddPppoeServerPage() {
  const [formData, setFormData] = useState({
    name: "",
    ip_address: "",
    port: "",
    location: "",
    description: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    ip_address: "",
    port: "",
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

    if (!formData.name.trim()) {
      newErrors.name = "Server Name is required";
      valid = false;
    }
    if (!formData.ip_address.trim()) {
      newErrors.ip_address = "IP Address is required";
      valid = false;
    }
    if (formData.port.trim() && isNaN(formData.port)) {
        newErrors.port = "Port must be a number";
        valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("PPPoE Server Form submitted:", formData);
      console.log("PPPoE Server added successfully!");
      setFormData({
        name: "",
        ip_address: "",
        port: "",
        location: "",
        description: "",
      });
      setErrors({
        name: "",
        ip_address: "",
        port: "",
        location: "",
      });
    }
  };

  return (
    <div className="container-fluid">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="mb-0">
            <FontAwesomeIcon icon={faServer} className="me-2" style={{ color: "#000" }} />
            Add New PPPoE Server
        </h2>
        <Link href="/company/networking/pppoe-server" className="btn btn-outline-secondary">
          <FontAwesomeIcon icon={faTimes} className="me-2" />
          Cancel
        </Link>
      </div>

      {/* PPPoE Server Form */}
      <div className="card shadow">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Server Name <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter server name"
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
                placeholder="Enter IP address"
              />
              {errors.ip_address && <div className="invalid-feedback">{errors.ip_address}</div>}
            </div>

            <div className="mb-3">
              <label htmlFor="port" className="form-label">
                Port (Optional)
              </label>
              <input
                type="number"
                className={`form-control ${errors.port ? "is-invalid" : ""}`}
                id="port"
                name="port"
                value={formData.port}
                onChange={handleChange}
                placeholder="Enter port number (e.g., 1701)"
              />
              {errors.port && <div className="invalid-feedback">{errors.port}</div>}
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

            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description (Optional)
              </label>
              <textarea
                className="form-control"
                id="description"
                name="description"
                rows="3"
                value={formData.description}
                onChange={handleChange}
                placeholder="Enter description"
              ></textarea>
            </div>

            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <button type="submit" className="btn btn-primary">
                <FontAwesomeIcon icon={faSave} className="me-2" />
                Save PPPoE Server
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}