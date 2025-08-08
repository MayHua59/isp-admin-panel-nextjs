"use client";
import { faSave, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";

export default function AddMessagePage() {
  const [formData, setFormData] = useState({
    sender: "",
    receiver: "",
    subject: "",
    content: "",
  });

  const [errors, setErrors] = useState({
    sender: "",
    receiver: "",
    subject: "",
    content: "",
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

    if (!formData.sender.trim()) {
      newErrors.sender = "Sender is required";
      valid = false;
    }
    if (!formData.receiver.trim()) {
      newErrors.receiver = "Receiver is required";
      valid = false;
    }
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
      valid = false;
    }
    if (!formData.content.trim()) {
      newErrors.content = "Content is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // send the data to API
      console.log("Message Form submitted:", formData);
      alert("Message sent successfully!");
      setFormData({
        sender: "",
        receiver: "",
        subject: "",
        content: "",
      });
    }
  };

  return (
    <div className="container-fluid">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="mb-0">Create New Message</h2>
        <Link href="/crm/messages" className="btn btn-outline-secondary">
          <FontAwesomeIcon icon={faTimes} className="me-2" />
          Cancel
        </Link>
      </div>

      {/* Message Form */}
      <div className="card shadow">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="sender" className="form-label">
                Sender <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className={`form-control ${errors.sender ? "is-invalid" : ""}`}
                id="sender"
                name="sender"
                value={formData.sender}
                onChange={handleChange}
              />
              {errors.sender && <div className="invalid-feedback">{errors.sender}</div>}
            </div>

            <div className="mb-3">
              <label htmlFor="receiver" className="form-label">
                Receiver <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className={`form-control ${errors.receiver ? "is-invalid" : ""}`}
                id="receiver"
                name="receiver"
                value={formData.receiver}
                onChange={handleChange}
              />
              {errors.receiver && <div className="invalid-feedback">{errors.receiver}</div>}
            </div>

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
              <label htmlFor="content" className="form-label">
                Content <span className="text-danger">*</span>
              </label>
              <textarea
                className={`form-control ${errors.content ? "is-invalid" : ""}`}
                id="content"
                name="content"
                value={formData.content}
                onChange={handleChange}
                rows={5}
              />
              {errors.content && <div className="invalid-feedback">{errors.content}</div>}
            </div>

            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <button type="submit" className="btn btn-primary">
                <FontAwesomeIcon icon={faSave} className="me-2" />
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}