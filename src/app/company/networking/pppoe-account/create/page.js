"use client";

import { faSave, faTimes, faUserLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";

export default function AddPppoeAccountPage() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    onu_id: "",
    plan_id: "",
    user_id: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
    onu_id: "",
    plan_id: "",
    user_id: "",
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

    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
      valid = false;
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
      valid = false;
    }

    if (!formData.onu_id.trim()) {
      newErrors.onu_id = "ONU ID is required";
      valid = false;
    } else if (isNaN(formData.onu_id)) {
      newErrors.onu_id = "ONU ID must be a number";
      valid = false;
    }

    if (!formData.plan_id.trim()) {
      newErrors.plan_id = "Plan ID is required";
      valid = false;
    } else if (isNaN(formData.plan_id)) {
      newErrors.plan_id = "Plan ID must be a number";
      valid = false;
    }

    if (!formData.user_id.trim()) {
      newErrors.user_id = "User ID is required";
      valid = false;
    } else if (isNaN(formData.user_id)) {
      newErrors.user_id = "User ID must be a number";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("PPPoE Account Form submitted:", formData);
      console.log("PPPoE account added successfully!");

      setFormData({
        username: "",
        password: "",
        onu_id: "",
        plan_id: "",
        user_id: "",
      });
      setErrors({
        username: "",
        password: "",
        onu_id: "",
        plan_id: "",
        user_id: "",
      });
    }
  };

  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="mb-0">
          <FontAwesomeIcon icon={faUserLock} className="me-2" style={{ color: "#000" }} />
          Add New PPPoE Account
        </h2>
        <Link href="/company/networking/pppoe-account" className="btn btn-outline-secondary">
          <FontAwesomeIcon icon={faTimes} className="me-2" />
          Cancel
        </Link>
      </div>

      <div className="card shadow">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className={`form-control ${errors.username ? "is-invalid" : ""}`}
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter username"
              />
              {errors.username && <div className="invalid-feedback">{errors.username}</div>}
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password <span className="text-danger">*</span>
              </label>
              <input
                type="password"
                className={`form-control ${errors.password ? "is-invalid" : ""}`}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter password"
              />
              {errors.password && <div className="invalid-feedback">{errors.password}</div>}
            </div>

            <div className="mb-3">
              <label htmlFor="onu_id" className="form-label">
                ONU ID <span className="text-danger">*</span>
              </label>
              <input
                type="number"
                className={`form-control ${errors.onu_id ? "is-invalid" : ""}`}
                id="onu_id"
                name="onu_id"
                value={formData.onu_id}
                onChange={handleChange}
                placeholder="Enter ONU ID"
              />
              {errors.onu_id && <div className="invalid-feedback">{errors.onu_id}</div>}
            </div>

            <div className="mb-3">
              <label htmlFor="plan_id" className="form-label">
                Plan ID <span className="text-danger">*</span>
              </label>
              <input
                type="number"
                className={`form-control ${errors.plan_id ? "is-invalid" : ""}`}
                id="plan_id"
                name="plan_id"
                value={formData.plan_id}
                onChange={handleChange}
                placeholder="Enter plan ID"
              />
              {errors.plan_id && <div className="invalid-feedback">{errors.plan_id}</div>}
            </div>

            <div className="mb-3">
              <label htmlFor="user_id" className="form-label">
                User ID <span className="text-danger">*</span>
              </label>
              <input
                type="number"
                className={`form-control ${errors.user_id ? "is-invalid" : ""}`}
                id="user_id"
                name="user_id"
                value={formData.user_id}
                onChange={handleChange}
                placeholder="Enter user ID"
              />
              {errors.user_id && <div className="invalid-feedback">{errors.user_id}</div>}
            </div>

            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <button type="submit" className="btn btn-primary">
                <FontAwesomeIcon icon={faSave} className="me-2" />
                Save PPPoE Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
