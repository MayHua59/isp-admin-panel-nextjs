import styles from './Overlay.module.css';
export default function Overlay({ show, onClick }) {
  if (!show) return null;
  return <div className={styles.overlay} onClick={onClick} />;
}