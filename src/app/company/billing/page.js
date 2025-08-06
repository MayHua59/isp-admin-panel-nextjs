"use client";

import { faFileInvoiceDollar, faPlus, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import billingData from "@/_mock/billing/data";

export default function BillingListPage() {
  return (
    <div className="container-fluid">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="mb-0">
          <FontAwesomeIcon icon={faFileInvoiceDollar} className="me-2" style={{ color: "#000" }} />
          Billing List
        </h2>
        <Link href="/company/billing/create" className="btn btn-primary">
          <FontAwesomeIcon icon={faPlus} className="me-2" />
          Add Billing
        </Link>
      </div>

      {/* Billing List Table */}
      <div className="card shadow">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Customer Name</th>
                  <th>Amount</th>
                  <th>Due Date</th>
                  <th>Status</th>
                  <th>Invoice No.</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {billingData.map((bill) => (
                  <tr key={bill.id}>
                    <td>{bill.id}</td>
                    <td>{bill.customer_name}</td>
                    <td>${bill.amount.toFixed(2)}</td>
                    <td>{bill.due_date}</td>
                    <td>
                      <span className={`badge ${
                        bill.status === 'Paid' ? 'bg-success' :
                        bill.status === 'Unpaid' ? 'bg-warning text-dark' :
                        'bg-danger'
                      }`}>
                        {bill.status}
                      </span>
                    </td>
                    <td>{bill.invoice_number}</td>
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