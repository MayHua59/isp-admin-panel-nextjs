"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./SecondRowStatCard.module.css";

/**
 * Props:
 * icon - FontAwesomeIcon object (e.g. faUser)
 * row1col2 - main value (string/number)
 * row2col1, row2col2, row3col1, row3col2 - stats/labels (string)
 * bgColor - background color (e.g. "#1976d2" or Bootstrap class)
 * textColor - text color class (default "text-dark")
 * cardStyle - extra inline style
 * iconColor - icon color (default "#007bff")
 */
export default function SecondRowStatCard({
  icon,
  row1col2,
  row2col1,
  row2col2,
  row3col1,
  row3col2,
  bgColor = "#1976d2",
  textColor = "text-dark",
  cardStyle = {},
  iconColor = "#007bff",
}) {
  // If bgColor is a color code, use inline style; if it's a class, use className
  const isBgColorCode = bgColor.startsWith("#") || bgColor.startsWith("rgb");

  return (
    <div className="col-md-3 col-12 mb-3">
      <div
        className={`card shadow-sm ${!isBgColorCode ? bgColor : ""} ${textColor} ${styles.statCard}`}
        style={{
          ...cardStyle,
          border: `1px solid ${isBgColorCode ? bgColor : "#ddd"}`,
          borderRadius: "0.375rem",
          overflow: "hidden",
        }}
      >
        <div className="card-body p-0">
          <div
            className={styles.headerSection}
            style={isBgColorCode ? { background: bgColor } : {}}
          >
            <div className="container-fluid px-3 py-2">
              <div className="row align-items-center mb-2">
                <div className="col-6 d-flex justify-content-between">
                  {icon && (
                    <FontAwesomeIcon
                      icon={icon}
                      style={{ fontSize: "2.5rem", color: iconColor }}
                    />
                  )}
                </div>
                <div className="col-6 d-flex justify-content-end align-items-center">
                  <span className={styles.mainValue}>{row1col2}</span>
                </div>
              </div>
              <div className="row mb-2">
                {row2col1 ? (
                  <>
                    <div className={`${styles.label} col-6 text-white`}>{row2col1}</div>
                    <div className={`${styles.label} col-6 text-end text-white`}>{row2col2}</div>
                  </>
                ) : (
                  <div className={`${styles.label} col-12 text-end text-white`}>{row2col2}</div>
                )}
              </div>
            </div>
          </div>

          <div className="container-fluid mt-2">
            <div className="row align-items-center">
              {row3col2 ? (
                <>
                  <div className="col-6 d-flex align-items-center text-nowrap mt-2" style={{ fontSize: "0.7rem" }}>
                    {row3col1}
                  </div>
                  <div className="col-6 d-flex align-items-center justify-content-end mt-2" style={{ fontSize: "0.7rem" }}>
                    {row3col2}
                  </div>
                </>
              ) : (
                <div className="col-12 d-flex align-items-center text-nowrap mt-2" style={{ fontSize: "0.7rem" }}>
                  {row3col1}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}