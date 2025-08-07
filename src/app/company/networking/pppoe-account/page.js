"use client"; // This component needs client-side interactivity for buttons

import { faUserLock, faPlus, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";


import pppoeAccounts from "@/_mock/pppoe-account/data";

export default function PppoeAccountListPage() {
  return (
    <div className="container-fluid">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="mb-0">
          <FontAwesomeIcon icon={faUserLock} className="me-2" style={{ color: "#000" }} />
          PPPoE Accounts
        </h2>
        <Link href="/company/networking/pppoe-account/create" className="btn btn-primary">
          <FontAwesomeIcon icon={faPlus} className="me-2" />
          Add PPPoE Account
        </Link>
      </div>

      {/* PPPoE Account List Table */}
      <div className="card shadow">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Username</th>
                  <th>ONU ID</th>
                  <th>Plan ID</th>
                  <th>User ID</th>
                  <th>Created At</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {pppoeAccounts.map((account) => (
                  <tr key={account.id}>
                    <td>{account.id}</td>
                    <td>{account.username}</td>
                    <td>{account.onu_id}</td>
                    <td>{account.plan_id}</td>
                    <td>{account.user_id}</td>
                    <td>{new Date(account.created_at).toLocaleDateString()}</td>
                    <td>
                      <button className="btn btn-sm btn-outline-primary me-2">
                        <FontAwesomeIcon icon={faEdit} />
                      </button>
                      <button className="btn btn-sm btn-outline-danger">
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
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