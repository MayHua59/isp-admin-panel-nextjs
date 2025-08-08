"use client";
import { useState, useEffect } from "react";
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
  const [isMobile, setIsMobile] = useState(false);
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
useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  // Arrow icon logic
 const Arrow = ({ isOpen }) => (
  <FontAwesomeIcon
    icon={faChevronDown}
    className={styles.arrow}
    style={{
      fontSize: "0.85rem",
      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
      transition: "transform 0.4s cubic-bezier(0.4,0,0.2,1)",
    }}
  />
);

  return (
   <nav
      className={
        isMobile
          ? `${styles.sidebar} ${openSidebar ? styles.open : styles.closed}`
          : styles.sidebar
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
            <FontAwesomeIcon icon={faTableColumns} className="me-2 sidebarIcon" />
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
              <FontAwesomeIcon icon={faUsers} className="me-2 sidebarIcon" />
              Customers
            </span>
            <Arrow isOpen={open.customers} />
          </button>
          {open.customers && (
            <ul className={`nav flex-column ms-4 ${styles.submenu}`}>
              <li>
                <a className="nav-link text-dark" href="/crm/customers">
                  All Customers
                </a>
              </li>
              <li>
                <a className="nav-link text-dark" href="/crm/customers/create">
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
              <FontAwesomeIcon icon={faTicket} className="me-2 sidebarIcon" />
              Tickets
            </span>
            <Arrow isOpen={open.tickets} />
          </button>
          {open.tickets && (
            <ul className={`nav flex-column ms-4 ${styles.submenu}`}>
              <li>
                <a className="nav-link text-dark" href="/crm/tickets">
                  All Tickets
                </a>
              </li>
              <li >
                <a className="nav-link text-dark" href="/crm/tickets/create">
                  Add Ticket
                </a>
              </li>
              {/* <li>
                <a className="nav-link text-dark" href="#">
                  Closed Tickets
                </a>
              </li> */}
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
              <FontAwesomeIcon icon={faEnvelope} className="me-2 sidebarIcon" />
              Messages
            </span>
            <Arrow isOpen={open.messages} />
          </button>
          {open.messages && (
            <ul className={`nav flex-column ms-4 ${styles.submenu}`}>
              <li>
                <a className="nav-link text-dark" href="/crm/messages">
                  All Messages
                </a>
              </li>
              <li>
                <a className="nav-link text-dark" href="/crm/messages/create">
                  Add Message
                </a>
              </li>
              {/* <li>
                <a className="nav-link text-dark" href="#">
                  Sent
                </a>
              </li> */}
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
          <FontAwesomeIcon icon={faGlobe} className="me-2 sidebarIcon" />
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
                <FontAwesomeIcon icon={faMicrochip} className="me-2 sidebarIcon" />
                OLT
              </span>
              <Arrow isOpen={open.olt} />
            </button>
            {open.olt && (
              <ul className="nav flex-column">
                <li className="nav-item ">
                  <a className="nav-link text-dark" href="/company/networking/olt">OLT List</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark" href="/company/networking/olt/create">Add OLT</a>
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
                <FontAwesomeIcon icon={faCodeBranch} className="me-2 sidebarIcon" />
                Splitter
              </span>
              <Arrow isOpen={open.splitter} />
            </button>
            {open.splitter && (
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a className="nav-link text-dark" href="/company/networking/splitter">Splitter List</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark" href="/company/networking/splitter/create">Add Splitter</a>
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
                <FontAwesomeIcon icon={faSitemap} className="me-2 sidebarIcon" />
                ONU
              </span>
              <Arrow isOpen={open.onu} />
            </button>
            {open.onu && (
              <ul className="nav flex-column ">
                <li className="nav-item">
                  <a className="nav-link text-dark" href="/company/networking/onu">ONU List</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark" href="/company/networking/onu/create">Add ONU</a>
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
                <FontAwesomeIcon icon={faLayerGroup} className="me-2 sidebarIcon" />
                Tariff Plan
              </span>
              <Arrow isOpen={open.plan} />
            </button>
            {open.plan && (
              <ul className="nav flex-column ms-4 pt-3">
                {/* Home Plan */}
                <li className="nav-item">
                  <button
                    className={`nav-link text-dark d-flex justify-content-between align-items-center w-100 ${styles.btn}`}
                    onClick={() => setOpen(o => ({ ...o, homePlan: !o.homePlan }))}
                    aria-expanded={open.homePlan}
                  >
                    <span>
                      <FontAwesomeIcon icon={faHome} className="me-2 sidebarIcon" />
                      Home Plan
                    </span>
                    <Arrow isOpen={open.homePlan} />
                  </button>
                  {open.homePlan && (
                    <ul className="nav flex-column ms-4">
                      <li className="nav-item">
                        <a className="nav-link text-dark" href="/company/networking/plan/home-plan">Plan List</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link text-dark" href="/company/networking/plan/home-plan/create">Add Plan</a>
                      </li>
                    </ul>
                  )}
                </li>
                {/* Card Plan */}
                <li className="nav-item pt-3">
                  <button
                    className={`nav-link text-dark d-flex justify-content-between align-items-center w-100 ${styles.btn}`}
                    onClick={() => setOpen(o => ({ ...o, cardPlan: !o.cardPlan }))}
                    aria-expanded={open.cardPlan}
                  >
                    <span>
                      <FontAwesomeIcon icon={faIdCard} className="me-2 sidebarIcon" />
                      Card Plan
                    </span>
                    <Arrow isOpen={open.cardPlan} />
                  </button>
                  {open.cardPlan && (
                    <ul className="nav flex-column ms-4">
                      <li className="nav-item">
                        <a className="nav-link text-dark" href="/company/networking/plan/card-plan">Plan List</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link text-dark" href="/company/networking/plan/card-plan/create">New Plan</a>
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
                <FontAwesomeIcon icon={faFileInvoiceDollar} className="me-2 sidebarIcon" />
                Billing
              </span>
              <Arrow isOpen={open.billing} />
            </button>
            {open.billing && (
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a className="nav-link text-dark" href="/company/billing">Billing List</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark" href="/company/billing/create">Add Billing</a>
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
                <FontAwesomeIcon icon={faUserLock} className="me-2 sidebarIcon" />
                PPPoE Account
              </span>
              <Arrow isOpen={open.pppoe} />
            </button>
            {open.pppoe && (
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a className="nav-link text-dark" href="/company/networking/pppoe-account">Account List</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark" href="/company/networking/pppoe-account/create">Add Account</a>
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
                <FontAwesomeIcon icon={faServer} className="me-2 sidebarIcon" />
                PPPoE Server
              </span>
              <Arrow isOpen={open.pppoeServer} />
            </button>
            {open.pppoeServer && (
              <ul className="nav flex-column ">
                <li className="nav-item">
                  <a className="nav-link text-dark" href="/company/networking/pppoe-server">Server List</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark" href="/company/networking/pppoe-server/create">Add Server</a>
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
            <FontAwesomeIcon icon={faUserShield} className="me-2 sidebarIcon" />
            Administration
          </a>
        </li>
        <li>
          <a className="nav-link text-dark d-flex align-items-center" href="#">
            <FontAwesomeIcon icon={faCog} className="me-2 sidebarIcon" />
            Config
          </a>
        </li>
      </ul>
    </nav>
  );
}