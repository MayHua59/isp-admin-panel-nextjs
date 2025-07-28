"use client";
import { faTableColumns, faPlus, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

// Import OLT data
import olts from "@/_mock/olt/data";

export default function Page() {
  return (
    <div className="container-fluid">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="mb-0">
          <FontAwesomeIcon icon={faTableColumns} className="me-2" style={{ color: "#000" }} />
          All OLTs
        </h2>
        <Link href="/company/networking/olt/create" className="btn btn-primary">
          <FontAwesomeIcon icon={faPlus} className="me-2" />
          Add OLT
        </Link>
      </div>

      {/* OLT List Table */}
      <div className="card shadow">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>IP Address</th>
                  <th>Location</th>
                  <th>Serial Number</th>
                  <th>Model</th>
                  {/* <th>Vendor</th>
                  <th>Managed By</th> */}
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {olts.map((olt) => (
                  <tr key={olt.id}>
                    <td>{olt.id}</td>
                    <td>{olt.name}</td>
                    <td>{olt.ip_address}</td>
                    <td>{olt.location}</td>
                    <td>{olt.serial_number}</td>
                    <td>{olt.model}</td>
                    {/* <td>{olt.vendor}</td>
                    <td>{olt.managed_by}</td> */}
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