"use client";
import { useState } from "react";
import styles from "./Sidebar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTableColumns,
  faUsers,
  faTicket,
  faEnvelope,
  faChevronDown,
  faGlobe,
  faUserShield,
  faCog,
  faMicrochip,
  faCodeBranch,
  faSitemap,
  faLayerGroup,
  faHome,
  faIdCard,
  faFileInvoiceDollar,
  faUserLock,
  faServer
} from "@fortawesome/free-solid-svg-icons";

export default function Sidebar({ openSidebar, onClose }) {
  const [open, setOpen] = useState({
    customers: false,
    tickets: false,
    messages: false,
    networking: false,
    olt: false,
    splitter: false,
    onu: false,
    plan: false,
    homePlan: false,
    cardPlan: false,
    billing: false,
    pppoe: false,
    pppoeServer: false,
  });

  // Arrow icon logic
 const Arrow = ({ isOpen }) => (
  <FontAwesomeIcon
    icon={faChevronDown}
    className={styles.arrow}
    style={{
      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
    }}
  />
);

  return (
    <nav
      className={
        typeof window !== 'undefined' && window.innerWidth < 768
          ? `${styles.sidebar} bg-white shadow-sm ${openSidebar ? styles.open : styles.closed}`
          : `${styles.sidebar} bg-white shadow-sm`
      }
    >
          <button
        className={styles.closeBtn}
        onClick={onClose}
        aria-label="Close sidebar"
      >
        &times;
      </button>
      <ul className="nav flex-column">
        {/* Dashboard */}
        <li className={styles.activeItem}>
          <a className="nav-link text-white d-flex align-items-center" href="#">
            <FontAwesomeIcon icon={faTableColumns} className="me-2" />
            Dashboard
          </a>
        </li>

        {/* CRM Section */}
        <li className={`mt-3 mb-1 ${styles.sectionTitle}`}>CRM</li>
        <li className={`px-3 pt-3`}>
          <button
            className={`nav-link w-100 text-dark d-flex align-items-center justify-content-between ${styles.btn}`}
            onClick={() =>
              setOpen((o) => ({ ...o, customers: !o.customers }))
            }
            aria-expanded={open.customers}
          >
            <span >
              <FontAwesomeIcon icon={faUsers} className="me-2" />
              Customers
            </span>
            <Arrow isOpen={open.customers} />
          </button>
          {open.customers && (
            <ul className={`nav flex-column ms-4 ${styles.submenu}`}>
              <li>
                <a className="nav-link text-dark" href="#">
                  All Customers
                </a>
              </li>
              <li>
                <a className="nav-link text-dark" href="#">
                  Add Customer
                </a>
              </li>
              <li>
                <a className="nav-link text-dark" href="#">
                  Customer Groups
                </a>
              </li>
            </ul>
          )}
        </li>
        <li className={`px-3 pt-3`}>
          <button
            className={`nav-link w-100 text-dark d-flex align-items-center justify-content-between ${styles.btn}`}
            onClick={() => setOpen((o) => ({ ...o, tickets: !o.tickets }))}
            aria-expanded={open.tickets}
          >
            <span>
              <FontAwesomeIcon icon={faTicket} className="me-2" />
              Tickets
            </span>
            <Arrow isOpen={open.tickets} />
          </button>
          {open.tickets && (
            <ul className={`nav flex-column ms-4 ${styles.submenu}`}>
              <li>
                <a className="nav-link text-dark" href="#">
                  All Tickets
                </a>
              </li>
              <li >
                <a className="nav-link text-dark" href="#">
                  Open Tickets
                </a>
              </li>
              <li>
                <a className="nav-link text-dark" href="#">
                  Closed Tickets
                </a>
              </li>
            </ul>
          )}
        </li>
        <li className={`px-3 pt-3`}>
          <button
            className={`nav-link w-100 text-dark d-flex align-items-center justify-content-between ${styles.btn}`}
            onClick={() =>
              setOpen((o) => ({ ...o, messages: !o.messages }))
            }
            aria-expanded={open.messages}
          >
            <span>
              <FontAwesomeIcon icon={faEnvelope} className="me-2" />
              Messages
            </span>
            <Arrow isOpen={open.messages} />
          </button>
          {open.messages && (
            <ul className={`nav flex-column ms-4 ${styles.submenu}`}>
              <li>
                <a className="nav-link text-dark" href="#">
                  All Messages
                </a>
              </li>
              <li>
                <a className="nav-link text-dark" href="#">
                  Unread
                </a>
              </li>
              <li>
                <a className="nav-link text-dark" href="#">
                  Sent
                </a>
              </li>
            </ul>
          )}
        </li>

        {/* COMPANY Section */}
        <li className={`mt-3 mb-1 ${styles.sectionTitle}`}>COMPANY</li>
        <li className="nav-item px-3 pt-3">
      <button
        className={`nav-link text-dark d-flex justify-content-between align-items-center w-100 ${styles.btn}`}
        onClick={() => setOpen(o => ({ ...o, networking: !o.networking }))}
        aria-expanded={open.networking}
      >
        <span>
          <FontAwesomeIcon icon={faGlobe} className="me-2" />
          Networking
        </span>
        <Arrow isOpen={open.networking} />
      </button>
      {open.networking && (
        <ul className="nav flex-column ms-4">
          {/* OLT */}
          <li className="nav-item pt-3 px-3">
            <button
              className={`nav-link text-dark d-flex justify-content-between align-items-center w-100 ${styles.btn}`}
              onClick={() => setOpen(o => ({ ...o, olt: !o.olt }))}
              aria-expanded={open.olt}
            >
              <span>
                <FontAwesomeIcon icon={faMicrochip} className="me-2" />
                OLT
              </span>
              <Arrow isOpen={open.olt} />
            </button>
            {open.olt && (
              <ul className="nav flex-column">
                <li className="nav-item ">
                  <a className="nav-link text-dark" href="#">OLT List</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark" href="#">Add OLT</a>
                </li>
              </ul>
            )}
          </li>
          {/* Splitter */}
          <li className="nav-item px-3 pt-3">
            <button
              className={`nav-link text-dark d-flex justify-content-between align-items-center w-100 ${styles.btn}`}
              onClick={() => setOpen(o => ({ ...o, splitter: !o.splitter }))}
              aria-expanded={open.splitter}
            >
              <span>
                <FontAwesomeIcon icon={faCodeBranch} className="me-2" />
                Splitter
              </span>
              <Arrow isOpen={open.splitter} />
            </button>
            {open.splitter && (
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a className="nav-link text-dark" href="#">Splitter List</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark" href="#">Add Splitter</a>
                </li>
              </ul>
            )}
          </li>
          {/* ONU */}
          <li className="nav-item pt-3 px-3">
            <button
              className={`nav-link text-dark d-flex justify-content-between align-items-center w-100 ${styles.btn}`}
              onClick={() => setOpen(o => ({ ...o, onu: !o.onu }))}
              aria-expanded={open.onu}
            >
              <span>
                <FontAwesomeIcon icon={faSitemap} className="me-2" />
                ONU
              </span>
              <Arrow isOpen={open.onu} />
            </button>
            {open.onu && (
              <ul className="nav flex-column ">
                <li className="nav-item">
                  <a className="nav-link text-dark" href="#">ONU List</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark" href="#">Add ONU</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark" href="#">ONU Config</a>
                </li>
              </ul>
            )}
          </li>
          {/* Tariff Plan */}
          <li className="nav-item pt-3 px-3">
            <button
              className={`nav-link text-dark d-flex justify-content-between align-items-center w-100 ${styles.btn}`}
              onClick={() => setOpen(o => ({ ...o, plan: !o.plan }))}
              aria-expanded={open.plan}
            >
              <span>
                <FontAwesomeIcon icon={faLayerGroup} className="me-2" />
                Tariff Plan
              </span>
              <Arrow isOpen={open.plan} />
            </button>
            {open.plan && (
              <ul className="nav flex-column ms-4">
                {/* Home Plan */}
                <li className="nav-item">
                  <button
                    className={`nav-link text-dark d-flex justify-content-between align-items-center w-100 ${styles.btn}`}
                    onClick={() => setOpen(o => ({ ...o, homePlan: !o.homePlan }))}
                    aria-expanded={open.homePlan}
                  >
                    <span>
                      <FontAwesomeIcon icon={faHome} className="me-2" />
                      Home Plan
                    </span>
                    <Arrow isOpen={open.homePlan} />
                  </button>
                  {open.homePlan && (
                    <ul className="nav flex-column ms-4">
                      <li className="nav-item">
                        <a className="nav-link text-dark" href="#">Plan List</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link text-dark" href="#">Add Plan</a>
                      </li>
                    </ul>
                  )}
                </li>
                {/* Card Plan */}
                <li className="nav-item">
                  <button
                    className={`nav-link text-dark d-flex justify-content-between align-items-center w-100 ${styles.btn}`}
                    onClick={() => setOpen(o => ({ ...o, cardPlan: !o.cardPlan }))}
                    aria-expanded={open.cardPlan}
                  >
                    <span>
                      <FontAwesomeIcon icon={faIdCard} className="me-2" />
                      Card Plan
                    </span>
                    <Arrow isOpen={open.cardPlan} />
                  </button>
                  {open.cardPlan && (
                    <ul className="nav flex-column ms-4">
                      <li className="nav-item">
                        <a className="nav-link text-dark" href="#">Plan List</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link text-dark" href="#">New Plan</a>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>
          {/* Billing */}
          <li className="nav-item px-3 pt-3">
            <button
              className={`nav-link text-dark d-flex justify-content-between align-items-center w-100 ${styles.btn}`}
              onClick={() => setOpen(o => ({ ...o, billing: !o.billing }))}
              aria-expanded={open.billing}
            >
              <span>
                <FontAwesomeIcon icon={faFileInvoiceDollar} className="me-2" />
                Billing
              </span>
              <Arrow isOpen={open.billing} />
            </button>
            {open.billing && (
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a className="nav-link text-dark" href="#">Billing List</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark" href="#">Add Billing</a>
                </li>
              </ul>
            )}
          </li>
          {/* PPPoE Account */}
          <li className="nav-item px-3 pt-3">
            <button
              className={`nav-link text-dark d-flex justify-content-between align-items-center w-100 ${styles.btn}`}
              onClick={() => setOpen(o => ({ ...o, pppoe: !o.pppoe }))}
              aria-expanded={open.pppoe}
            >
              <span>
                <FontAwesomeIcon icon={faUserLock} className="me-2" />
                PPPoE Account
              </span>
              <Arrow isOpen={open.pppoe} />
            </button>
            {open.pppoe && (
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a className="nav-link text-dark" href="#">Account List</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark" href="#">Add Account</a>
                </li>
              </ul>
            )}
          </li>
          {/* PPPoE Server */}
          <li className="nav-item px-3 pt-3">
            <button
              className={`nav-link text-dark d-flex justify-content-between align-items-center w-100 ${styles.btn}`}
              onClick={() => setOpen(o => ({ ...o, pppoeServer: !o.pppoeServer }))}
              aria-expanded={open.pppoeServer}
            >
              <span>
                <FontAwesomeIcon icon={faServer} className="me-2" />
                PPPoE Server
              </span>
              <Arrow isOpen={open.pppoeServer} />
            </button>
            {open.pppoeServer && (
              <ul className="nav flex-column ">
                <li className="nav-item">
                  <a className="nav-link text-dark" href="#">Server List</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark" href="#">Add Server</a>
                </li>
              </ul>
            )}
          </li>
        </ul>
      )}
    </li>

        {/* SYSTEM Section */}
        <li className={`mt-3 mb-1 ${styles.sectionTitle}`}>SYSTEM</li>
        <li>
          <a className="nav-link text-dark d-flex align-items-center" href="#">
            <FontAwesomeIcon icon={faUserShield} className="me-2" />
            Administration
          </a>
        </li>
        <li>
          <a className="nav-link text-dark d-flex align-items-center" href="#">
            <FontAwesomeIcon icon={faCog} className="me-2" />
            Config
          </a>
        </li>
      </ul>
    </nav>
  );
}