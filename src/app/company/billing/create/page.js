"use client";

import { faSave, faTimes, faFileInvoiceDollar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";

export default function AddBillingPage() {
  const [formData, setFormData] = useState({
    customer_name: "",
    amount: "",
    due_date: "",
    status: "Unpaid", // Default status
    invoice_number: "",
  });

  const [errors, setErrors] = useState({
    customer_name: "",
    amount: "",
    due_date: "",
    status: "",
    invoice_number: "",
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

    if (!formData.customer_name.trim()) {
      newErrors.customer_name = "Customer Name is required";
      valid = false;
    }
    if (!formData.amount.toString().trim() || isNaN(formData.amount) || parseFloat(formData.amount) <= 0) {
      newErrors.amount = "Amount is required and must be a positive number";
      valid = false;
    }
    if (!formData.due_date.trim()) {
      newErrors.due_date = "Due Date is required";
      valid = false;
    }
    if (!formData.invoice_number.trim()) {
      newErrors.invoice_number = "Invoice Number is required";
      valid = false;
    }
    if (!formData.status.trim()) {
      newErrors.status = "Status is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Billing Form submitted:", formData);
      console.log("Billing entry added successfully!");
      setFormData({
        customer_name: "",
        amount: "",
        due_date: "",
        status: "Unpaid",
        invoice_number: "",
      });
      setErrors({
        customer_name: "",
        amount: "",
        due_date: "",
        status: "",
        invoice_number: "",
      });
    }
  };

  return (
    <div className="container-fluid">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="mb-0">
          <FontAwesomeIcon icon={faFileInvoiceDollar} className="me-2" style={{ color: "#000" }} />
          Add New Billing
        </h2>
        <Link href="/company/billing" className="btn btn-outline-secondary">
          <FontAwesomeIcon icon={faTimes} className="me-2" />
          Cancel
        </Link>
      </div>

      {/* Billing Form */}
      <div className="card shadow">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            {/* Customer Name */}
            <div className="mb-3">
              <label htmlFor="customer_name" className="form-label">
                Customer Name <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className={`form-control ${errors.customer_name ? "is-invalid" : ""}`}
                id="customer_name"
                name="customer_name"
                value={formData.customer_name}
                onChange={handleChange}
                placeholder="Enter customer name"
              />
              {errors.customer_name && <div className="invalid-feedback">{errors.customer_name}</div>}
            </div>

            {/* Amount */}
            <div className="mb-3">
              <label htmlFor="amount" className="form-label">
                Amount <span className="text-danger">*</span>
              </label>
              <input
                type="number"
                step="0.01" // Allows decimal values for currency
                className={`form-control ${errors.amount ? "is-invalid" : ""}`}
                id="amount"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                placeholder="Enter amount (e.g., 50.00)"
              />
              {errors.amount && <div className="invalid-feedback">{errors.amount}</div>}
            </div>

            {/* Due Date */}
            <div className="mb-3">
              <label htmlFor="due_date" className="form-label">
                Due Date <span className="text-danger">*</span>
              </label>
              <input
                type="date"
                className={`form-control ${errors.due_date ? "is-invalid" : ""}`}
                id="due_date"
                name="due_date"
                value={formData.due_date}
                onChange={handleChange}
              />
              {errors.due_date && <div className="invalid-feedback">{errors.due_date}</div>}
            </div>

            {/* Status */}
            <div className="mb-3">
              <label htmlFor="status" className="form-label">
                Status <span className="text-danger">*</span>
              </label>
              <select
                className={`form-select ${errors.status ? "is-invalid" : ""}`}
                id="status"
                name="status"
                value={formData.status}
                onChange={handleChange}
              >
                <option value="Unpaid">Unpaid</option>
                <option value="Paid">Paid</option>
                <option value="Overdue">Overdue</option>
              </select>
              {errors.status && <div className="invalid-feedback">{errors.status}</div>}
            </div>

            {/* Invoice Number */}
            <div className="mb-3">
              <label htmlFor="invoice_number" className="form-label">
                Invoice Number <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className={`form-control ${errors.invoice_number ? "is-invalid" : ""}`}
                id="invoice_number"
                name="invoice_number"
                value={formData.invoice_number}
                onChange={handleChange}
                placeholder="Enter invoice number"
              />
              {errors.invoice_number && <div className="invalid-feedback">{errors.invoice_number}</div>}
            </div>

            {/* Form Action Buttons */}
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <button type="submit" className="btn btn-primary">
                <FontAwesomeIcon icon={faSave} className="me-2" />
                Save Billing
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}