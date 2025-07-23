"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./FirstRowStatCard.module.css";
import Link from "next/link";

export default function FirstRowStatCard({
  icon,
  mainText,
  leftText,
  rightText,
  href = "#",
  bgColor = "bg-white",
  textColor = "text-dark",
  cardStyle = {},
  iconColor = "#007bff",
  iconSize = "1.5rem",
}) {
  return (
    <div className="col-12 col-md-3 mb-3">
      
      <div
        className={`card shadow-sm rounded ${bgColor} ${textColor} ${styles.statCard}`}
        style={{
          ...cardStyle,
          borderRadius: "0.375rem",
          overflow: "hidden",
        }}
      >
        <div className="card-body p-3 pb-2">
          <div className="d-flex align-items-center mb-2">
            {icon && (
              <FontAwesomeIcon
                icon={icon}
                className="me-2"
                style={{ fontSize: iconSize, color: iconColor }}
              />
            )}
            <span className={styles.mainTextSmall}>{mainText}</span>
          </div>
          <div className="d-flex justify-content-between">
            <span>{leftText}</span>
            <Link href={href} >
            <span>{rightText}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}