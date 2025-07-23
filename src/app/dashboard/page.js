"use client";
import { faUser, faTicket, faDesktop, faTableColumns } from "@fortawesome/free-solid-svg-icons";
import FirstRowStatCard from "@/components/dashboard/FirstRowStatCard";
import { faWandMagicSparkles, faWifi, faX, faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import SecondRowStatCard from "@/components/dashboard/SecondRowStatCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartPie } from "@fortawesome/free-solid-svg-icons";
import NetworkStatusChart from "@/components/dashboard/NetworkStatusChart";
import styles from "@/components/dashboard/NetworkStatusChart.module.css";


export default function Dashboard() {
  return (
    <div className="container-fluid">
      {/* Dashboard Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="mb-0">
          <FontAwesomeIcon icon={faTableColumns} className="me-2" style={{ color: "#000" }} />
          Dashboard
        </h2>
      </div>

      {/* Statistics Cards Row 1 */}
      <div className="row">
        <FirstRowStatCard
          icon={faUser}
          mainText="Online Customers"
          leftText="View"
          rightText="10"
          bgColor="bg-light"
          textColor="text-dark"
          cardStyle={{ height: "80px" }}
          iconColor="#ADD8E6"
        />
        <FirstRowStatCard
          icon={faUser}
          mainText="New Customers"
          leftText="View"
          rightText="10"
          bgColor="bg-light"
          textColor="text-dark"
          cardStyle={{ height: "80px" }}
          iconColor="#ADD8E6"
        />
        <FirstRowStatCard
          icon={faTicket}
          mainText="New & open tickets"
          leftText="View"
          rightText="1"
          bgColor="bg-light"
          textColor="text-dark"
          cardStyle={{ height: "80px" }}
          iconColor="#ADD8E6"
        />
        <FirstRowStatCard
          icon={faDesktop}
          mainText="Devices down"
          leftText="View"
          rightText="2"
          bgColor="bg-light"
          textColor="text-dark"
          cardStyle={{ height: "80px" }}
          iconColor="#ADD8E6"
        />
      </div>
       {/* Statistics Cards Row 2 */}
      <div className="row mt-2">
        <SecondRowStatCard
          icon={faWandMagicSparkles}
          row1col2="1"
          row2col1=""
          row2col2="Waiting Authorization"
          row3col1={
            <>
              <span>D: 0</span>
              <span className="ms-2">Resyn: 0</span>
            </>
          }
          row3col2="New: 1"
          bgColor="#0d6efd"
          textColor="text-dark"
          cardStyle={{ height: "160px" }}
          iconColor="#fff"
        />
        <SecondRowStatCard
          icon={faWifi}
          row1col2="10000"
          row2col1="EAP TLS User"
          row2col2={<span>USER</span>}
          row3col1="Total Authorized: 3"
          row3col2=""
          bgColor="#E83F25"
          textColor="text-dark"
          cardStyle={{ height: "160px" }}
          iconColor="#fff"
        />
        <SecondRowStatCard
          icon={faX}
          row1col2="2"
          row2col1="EAP TLS User"
          row2col2="Total Offline"
          row3col1="PwrFail: 0 LOS: 2"
          row3col2="N/A: 1"
          bgColor="#000"
          textColor="text-dark"
          cardStyle={{ height: "160px" }}
          iconColor="#fff"
        />
        <SecondRowStatCard
          icon={faExclamationCircle}
          row1col2="0"
          row2col1="EAP TLS User"
          row2col2="Low Signal"
          row3col1="Warning:"
          row3col2="Critical"
          bgColor="#FFB22C"
          textColor="text-dark"
          cardStyle={{ height: "160px" }}
          iconColor="#fff"
        />
      </div>
       {/* Network Status Section */}
      <div className="container position-relative mt-4">
        <div className="row">
          {/* Network Status Card */}
          <div className="col-md-8 mb-4">
            <NetworkStatusChart />
          </div>
          {/* OLTS Card */}
          <div className="col-md-4 mb-4">
            <div className={`card ${styles.networkCard} h-100`}>
              <div className="card-header bg-black d-flex align-items-center justify-content-between">
                <h5 className="mb-0 text-white">
                  <FontAwesomeIcon icon={faChartPie} className="me-2" />
                  OLTS
                </h5>
                <span className="badge bg-secondary">All</span>
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush mb-4">
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <FontAwesomeIcon icon={faChartPie} className="me-2" />
                    smartolt
                    <span className="badge bg-secondary">2 days, 08:35, 49ºC</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <FontAwesomeIcon icon={faChartPie} className="me-2" />
                    OLTONE
                    <span className="badge bg-secondary">N/A</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}