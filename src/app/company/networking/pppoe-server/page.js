"use client";
import { faTableColumns, faPlus, faEdit, faTrash, faServer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";


import pppoeServers from "@/_mock/pppoe-server/data";


export default function PppoeServerListPage() {
  return (
    <div className="container-fluid">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="mb-0">
          <FontAwesomeIcon icon={faServer} className="me-2" style={{ color: "#000" }} />
          PPPoE Servers
        </h2>
        <Link href="/company/networking/pppoe-server/create" className="btn btn-primary">
          <FontAwesomeIcon icon={faPlus} className="me-2" />
          Add PPPoE Server
        </Link>
      </div>

      {/* PPPoE Server List Table */}
      <div className="card shadow">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>IP Address</th>
                  <th>Port</th>
                  <th>Location</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {pppoeServers.map((server) => (
                  <tr key={server.id}>
                    <td>{server.id}</td>
                    <td>{server.name}</td>
                    <td>{server.ip_address}</td>
                    <td>{server.port || 'N/A'}</td> {/* Display N/A if port is null */}
                    <td>{server.location || 'N/A'}</td>
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