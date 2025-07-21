"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartArea } from "@fortawesome/free-solid-svg-icons";
import styles from "./NetworkStatusChart.module.css";

export default function NetworkStatusChart() {
  return (
    <div className={`card ${styles.networkCard} h-100`}>
      <div className={`card-header d-flex align-items-center ${styles.cardHeader}`}>
        <h5 className={styles.cardHeaderH5}>
          <FontAwesomeIcon icon={faChartArea} className="me-2" /> Network status
        </h5>
      </div>
      <div className={`card-body ${styles.cardBody}`}>
        <h6 className={`card-subtitle mb-3 text-muted ${styles.cardBodyH6}`}>Daily network status</h6>
        <div className={`${styles.graphContainer} mb-3`}>
          <span className={styles.yAxisLabel}>ONUs</span>
          <span className={`${styles.yAxisValue} ${styles.yAxisValueVal20}`}>2.0</span>
          <span className={`${styles.yAxisValue} ${styles.yAxisValueVal15}`}>1.5</span>
          <span className={`${styles.yAxisValue} ${styles.yAxisValueVal10}`}>1.0</span>
          <span className={`${styles.yAxisValue} ${styles.yAxisValueVal05}`}>0.5</span>
          <span className={`${styles.yAxisValue} ${styles.yAxisValueVal00}`}>0.0</span>
          <div className={`${styles.gridLine} ${styles.gridLineLine1}`} />
          <div className={`${styles.gridLine} ${styles.gridLineLine2}`} />
          <div className={`${styles.gridLine} ${styles.gridLineLine3}`} />
          <div className={`${styles.verticalGridLine} ${styles.verticalGridLineFr04}`} />
          <div className={`${styles.verticalGridLine} ${styles.verticalGridLineFr08}`} />
          <div className={`${styles.verticalGridLine} ${styles.verticalGridLineFr12}`} />
          <div className={`${styles.verticalGridLine} ${styles.verticalGridLineFr16}`} />
          <div className={styles.graphData}>
            <div className={styles.graphGreenArea} />
            <div className={styles.graphBrownArea} />
          </div>
          <span className={styles.xAxisLabel} style={{ left: '0%' }}>Fr 00:00</span>
          <span className={styles.xAxisLabel} style={{ left: '20%' }}>Fr 04:00</span>
          <span className={styles.xAxisLabel} style={{ left: '40%' }}>Fr 08:00</span>
          <span className={styles.xAxisLabel} style={{ left: '60%' }}>Fr 12:00</span>
          <span className={styles.xAxisLabel} style={{ left: '80%' }}>Fr 16:00</span>
          <span className={styles.xAxisLabel} style={{ left: '100%', transform: 'translateX(-100%)' }}>Fr 20:00</span>
        </div>
        <div className={`${styles.graphLegend} mb-3`}>
          <div className={`${styles.legendItem} ${styles.legendItemOnlineOnus} me-4`}>
            <span className={styles.legendColorBox} />
            <span>Online ONUs</span>
          </div>
          <div className={` ${styles.legendItem} me-4`}>
            <span className={`${styles.legendColorBox} bg-white border`} />
            <span>1 Maximum</span>
          </div>
          <div className={` ${styles.legendItem} me-4`}>
            <span className={`${styles.legendColorBox} bg-white border`} />
            <span>0 Signal loss</span>
          </div>
          <div className={` ${styles.legendItem} me-4`}>
            <span className={`${styles.legendColorBox} bg-white border`} />
            <span>1 N/A</span>
          </div>
        </div>
      </div>
    </div>
  );
}