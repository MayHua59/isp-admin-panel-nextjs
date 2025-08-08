"use client";
import { faTableColumns, faPlus, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

// Import ticket mock data
import tickets from "@/_mock/ticket/data";

export default function Page() {
  return (
    <div className="container-fluid">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="mb-0">
          <FontAwesomeIcon icon={faTableColumns} className="me-2" style={{ color: "#000" }} />
          All Tickets
        </h2>
        <Link href="/crm/tickets/create" className="btn btn-primary">
          <FontAwesomeIcon icon={faPlus} className="me-2" />
          New Ticket
        </Link>
      </div>

      {/* Ticket List Table */}
      <div className="card shadow">
        <div className="card-body">
          <div className="table-responsive" style={{ overflowX: "auto" }}>
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Subject</th>
                  <th>Customer</th>
                  <th>Status</th>
                  <th>Priority</th>
                  <th>Assigned To</th>
                  <th>Created At</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {tickets.map((ticket) => (
                  <tr key={ticket.id}>
                    <td>{ticket.id}</td>
                    <td>{ticket.subject}</td>
                    <td>{ticket.customer}</td>
                    <td>
                      <span className={`badge ${ticket.status === "open" ? "bg-warning text-dark" : "bg-success"}`}>
                        {ticket.status.charAt(0).toUpperCase() + ticket.status.slice(1)}
                      </span>
                    </td>
                    <td>
                      <span className={`badge ${
                        ticket.priority === "high"
                          ? "bg-danger"
                          : ticket.priority === "medium"
                          ? "bg-info text-dark"
                          : "bg-secondary"
                      }`}>
                        {ticket.priority.charAt(0).toUpperCase() + ticket.priority.slice(1)}
                      </span>
                    </td>
                    <td>{ticket.assignedTo}</td>
                    <td>{new Date(ticket.createdAt).toLocaleString()}</td>
                    <td className="h-100 text-center" style={{ verticalAlign: "middle" }}>
                     <div className="d-flex justify-content-center align-items-center h-100">
                         <button className="btn btn-sm btn-outline-primary me-2">
                        <FontAwesomeIcon icon={faEdit} />
                      </button>
                      <button className="btn btn-sm btn-outline-danger">
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                     </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <nav aria-label="Page navigation">
            <ul className="pagination justify-content-center">
              <li className="page-item disabled">
                <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">Previous</a>
              </li>
              <li className="page-item active"><a className="page-link" href="#">1</a></li>
              <li className="page-item"><a className="page-link" href="#">2</a></li>
              <li className="page-item"><a className="page-link" href="#">3</a></li>
              <li className="page-item">
                <a className="page-link" href="#">Next</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}