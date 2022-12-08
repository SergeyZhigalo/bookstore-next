import {Star} from "./Icons";
import styles from '../styles/Rating.module.sass'

export default function Rating({ rating }) {
  return (
    <div className={styles.rating}>
      {
        [1, 2, 3, 4, 5].map((x) => ( <Star key={x} isActive={x <= rating} /> ))
      }
    </div>
  )
}