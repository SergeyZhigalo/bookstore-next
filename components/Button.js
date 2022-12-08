import styles from '../styles/Button.module.sass';

export default function Button({ children, onClick, style }) {
  return (
    <div className={`${style} ${styles.button}`} onClick={onClick}>
      {children}
    </div>
  )
}