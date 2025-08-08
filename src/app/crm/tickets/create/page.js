"use client";
import { faSave, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";

export default function CreateTicketPage() {
  const [formData, setFormData] = useState({
    subject: "",
    customer: "",
    priority: "",
    assignedTo: "",
    description: "",
  });

  const [errors, setErrors] = useState({
    subject: "",
    customer: "",
    priority: "",
    assignedTo: "",
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

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
      valid = false;
    }
    if (!formData.customer.trim()) {
      newErrors.customer = "Customer is required";
      valid = false;
    }
    if (!formData.priority.trim()) {
      newErrors.priority = "Priority is required";
      valid = false;
    }
    if (!formData.assignedTo.trim()) {
      newErrors.assignedTo = "Assigned To is required";
      valid = false;
    }
    if (!formData.description.trim()) {
      newErrors.description = "Description is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Here you would typically send the data to your API
      console.log("Ticket Form submitted:", formData);
      alert("Ticket created successfully!");
      setFormData({
        subject: "",
        customer: "",
        priority: "",
        assignedTo: "",
        description: "",
      });
    }
  };

  return (
    <div className="container-fluid">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="mb-0">Create New Ticket</h2>
        <Link href="/crm/tickets" className="btn btn-outline-secondary">
          <FontAwesomeIcon icon={faTimes} className="me-2" />
          Cancel
        </Link>
      </div>

      {/* Ticket Form */}
      <div className="card shadow">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="subject" className="form-label">
                Subject <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className={`form-control ${errors.subject ? "is-invalid" : ""}`}
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />
              {errors.subject && <div className="invalid-feedback">{errors.subject}</div>}
            </div>

            <div className="mb-3">
              <label htmlFor="customer" className="form-label">
                Customer <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className={`form-control ${errors.customer ? "is-invalid" : ""}`}
                id="customer"
                name="customer"
                value={formData.customer}
                onChange={handleChange}
              />
              {errors.customer && <div className="invalid-feedback">{errors.customer}</div>}
            </div>

            <div className="mb-3">
              <label htmlFor="priority" className="form-label">
                Priority <span className="text-danger">*</span>
              </label>
              <select
                className={`form-select ${errors.priority ? "is-invalid" : ""}`}
                id="priority"
                name="priority"
                value={formData.priority}
                onChange={handleChange}
              >
                <option value="">Select priority</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
              {errors.priority && <div className="invalid-feedback">{errors.priority}</div>}
            </div>

            <div className="mb-3">
              <label htmlFor="assignedTo" className="form-label">
                Assigned To <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className={`form-control ${errors.assignedTo ? "is-invalid" : ""}`}
                id="assignedTo"
                name="assignedTo"
                value={formData.assignedTo}
                onChange={handleChange}
              />
              {errors.assignedTo && <div className="invalid-feedback">{errors.assignedTo}</div>}
            </div>

            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description <span className="text-danger">*</span>
              </label>
              <textarea
                className={`form-control ${errors.description ? "is-invalid" : ""}`}
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={4}
              />
              {errors.description && <div className="invalid-feedback">{errors.description}</div>}
            </div>

            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <button type="submit" className="btn btn-primary">
                <FontAwesomeIcon icon={faSave} className="me-2" />
                Save Ticket
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}