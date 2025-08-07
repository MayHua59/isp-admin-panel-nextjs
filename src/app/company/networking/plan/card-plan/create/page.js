"use client";

import { faSave, faTimes, faIdCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";

export default function AddCardPlanPage() {
  const [formData, setFormData] = useState({
    plan_name: "",
    data_gb: "",
    validity_days: "",
    price: "",
    description: "",
  });

  const [errors, setErrors] = useState({
    plan_name: "",
    data_gb: "",
    validity_days: "",
    price: "",
    description: "",
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

    if (!formData.plan_name.trim()) {
      newErrors.plan_name = "Plan Name is required";
      valid = false;
    }
    if (!formData.data_gb.toString().trim()) {
      newErrors.data_gb = "Data (GB) is required";
      valid = false;
    } else if (isNaN(formData.data_gb) && formData.data_gb.toLowerCase() !== 'unlimited') {
      newErrors.data_gb = "Data (GB) must be a number or 'Unlimited'";
      valid = false;
    }
    if (!formData.validity_days.toString().trim() || isNaN(formData.validity_days) || parseInt(formData.validity_days) <= 0) {
      newErrors.validity_days = "Validity (Days) is required and must be a positive number";
      valid = false;
    }
    if (!formData.price.toString().trim() || isNaN(formData.price) || parseFloat(formData.price) <= 0) {
      newErrors.price = "Price is required and must be a positive number";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Card Plan Form submitted:", formData);
      console.log("Card Plan added successfully!");
      setFormData({
        plan_name: "",
        data_gb: "",
        validity_days: "",
        price: "",
        description: "",
      });
      setErrors({
        plan_name: "",
        data_gb: "",
        validity_days: "",
        price: "",
        description: "",
      });
    }
  };

  return (
    <div className="container-fluid">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="mb-0">
          <FontAwesomeIcon icon={faIdCard} className="me-2" style={{ color: "#000" }} />
          Add New Card Plan
        </h2>
        <Link href="/company/networking/plan/card-plan" className="btn btn-outline-secondary">
          <FontAwesomeIcon icon={faTimes} className="me-2" />
          Cancel
        </Link>
      </div>

      {/* Card Plan Form */}
      <div className="card shadow">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="plan_name" className="form-label">
                Plan Name <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className={`form-control ${errors.plan_name ? "is-invalid" : ""}`}
                id="plan_name"
                name="plan_name"
                value={formData.plan_name}
                onChange={handleChange}
                placeholder="e.g., Prepaid 10GB"
              />
              {errors.plan_name && <div className="invalid-feedback">{errors.plan_name}</div>}
            </div>

            <div className="mb-3">
              <label htmlFor="data_gb" className="form-label">
                Data (GB) <span className="text-danger">*</span>
              </label>
              <input
                type="text" // Use text to allow "Unlimited"
                className={`form-control ${errors.data_gb ? "is-invalid" : ""}`}
                id="data_gb"
                name="data_gb"
                value={formData.data_gb}
                onChange={handleChange}
                placeholder="e.g., 10 or Unlimited"
              />
              {errors.data_gb && <div className="invalid-feedback">{errors.data_gb}</div>}
            </div>

            <div className="mb-3">
              <label htmlFor="validity_days" className="form-label">
                Validity (Days) <span className="text-danger">*</span>
              </label>
              <input
                type="number"
                className={`form-control ${errors.validity_days ? "is-invalid" : ""}`}
                id="validity_days"
                name="validity_days"
                value={formData.validity_days}
                onChange={handleChange}
                placeholder="e.g., 30"
              />
              {errors.validity_days && <div className="invalid-feedback">{errors.validity_days}</div>}
            </div>

            <div className="mb-3">
              <label htmlFor="price" className="form-label">
                Price <span className="text-danger">*</span>
              </label>
              <input
                type="number"
                step="0.01"
                className={`form-control ${errors.price ? "is-invalid" : ""}`}
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="e.g., 15.00"
              />
              {errors.price && <div className="invalid-feedback">{errors.price}</div>}
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
                placeholder="Describe the card plan features"
              ></textarea>
            </div>

            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <button type="submit" className="btn btn-primary">
                <FontAwesomeIcon icon={faSave} className="me-2" />
                Save Card Plan
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
