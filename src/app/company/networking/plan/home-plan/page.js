"use client";
import { faTableColumns, faPlus, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

// Import home plan data
import homePlans from "@/_mock/plans/home-plan/data";

export default function Page() {
  return (
    <div className="container-fluid">
      {/* Dashboard Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="mb-0">
          <FontAwesomeIcon icon={faTableColumns} className="me-2" style={{ color: "#000" }} />
          Home Plans
        </h2>
        <Link href="/company/networking/plan/home-plan/create" className="btn btn-primary">
          <FontAwesomeIcon icon={faPlus} className="me-2" />
          Add Home Plan
        </Link>
      </div>

      {/* Home Plan List Table */}
      <div className="card shadow">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Download</th>
                  <th>Upload</th>
                  <th>Price</th>
                  <th>Data Cap</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {homePlans.map((plan, idx) => (
                  <tr key={idx}>
                    <td>{plan.name}</td>
                    <td>{plan.speedDownload}</td>
                    <td>{plan.speedUpload}</td>
                    <td>${plan.price}</td>
                    <td>{plan.dataCap}</td>
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