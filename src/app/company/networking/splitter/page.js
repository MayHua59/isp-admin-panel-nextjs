"use client";
import { faTableColumns, faPlus, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

// Import splitter data
import splitters from "@/_mock/splitter/data";

export default function Page() {
  return (
    <div className="container-fluid">
      {/* Dashboard Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="mb-0">
          <FontAwesomeIcon icon={faTableColumns} className="me-2" style={{ color: "#000" }} />
          All Splitters
        </h2>
        <Link href="/company/networking/splitter/create" className="btn btn-primary">
          <FontAwesomeIcon icon={faPlus} className="me-2" />
          Add Splitter
        </Link>
      </div>

      {/* Splitter List Table */}
      <div className="card shadow">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Location</th>
                  <th>Type</th>
                  <th>Manufacturer</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {splitters.map((splitter) => (
                  <tr key={splitter.id}>
                    <td>{splitter.id}</td>
                    <td>{splitter.name}</td>
                    <td>{splitter.location}</td>
                    <td>{splitter.type}</td>
                    <td>{splitter.manufacturer}</td>
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