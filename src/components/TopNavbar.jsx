"use client";
import { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faSearch,
  faBell,
  faQuestionCircle,
  faUserCircle,
  faBars
} from "@fortawesome/free-solid-svg-icons";
import styles from "./TopNavbar.module.css";

export default function TopNavbar({ onMenuClick }) {
  const [adminDropdownOpen, setAdminDropdownOpen] = useState(false);
  const adminDropdownRef = useRef(null);

  // Close dropdown if click outside
  
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        adminDropdownRef.current &&
        !adminDropdownRef.current.contains(event.target)
      ) {
        setAdminDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light bg-white shadow-sm ${styles.topbar}`}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        padding: "0.5rem 1rem",
        zIndex: 1050,
        borderRadius: 0,
        boxShadow: "0 0.125rem 0.25rem rgba(0,0,0,.075)",
      }}
    >
      <div className="container-fluid">
        <a className="navbar-brand d-md-none" href="#">
          Dashboard
        </a>
        {/* Mobile sidebar toggler */}
        <button
          className={styles.toggleBtn + " d-md-none me-2"}
          aria-label="Open sidebar"
          onClick={onMenuClick}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        
        <div className="d-flex align-items-center ms-auto">
          <button className="btn btn-primary btn-sm me-3">Deployment guide</button>
          <a href="#" className="nav-link text-dark me-3">
            <FontAwesomeIcon icon={faPlus} />
          </a>
          <a href="#" className="nav-link text-dark me-3">
            <FontAwesomeIcon icon={faSearch} />
          </a>
          <a href="#" className="nav-link text-dark me-3">
            <FontAwesomeIcon icon={faBell} />
          </a>
          <a href="#" className="nav-link text-dark me-3">
            <FontAwesomeIcon icon={faQuestionCircle} />
          </a>
          {/* Admin Dropdown */}
          <div className="dropdown" ref={adminDropdownRef}>
            <a
              className="nav-link dropdown-toggle text-dark"
              href="#"
              id="navbarDropdown"
              role="button"
              onClick={e => {
                e.preventDefault();
                setAdminDropdownOpen(open => !open);
              }}
              aria-expanded={adminDropdownOpen}
            >
              <FontAwesomeIcon icon={faUserCircle} className="me-1" /> Main Admin
            </a>
            <ul
              className={`dropdown-menu dropdown-menu-end${adminDropdownOpen ? " show" : ""}`}
              aria-labelledby="navbarDropdown"
            >
              <li><a className="dropdown-item" href="#">Profile</a></li>
              <li><a className="dropdown-item" href="#">Settings</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#">Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}