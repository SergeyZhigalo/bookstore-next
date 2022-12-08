import styles from '../styles/SearchInput.module.sass'
import {SearchGlass} from "./Icons";

export default function SearchInput() {
  return (
    <div className={styles.searchInput}>
      <input type="text" placeholder="Поиск по названию и автору..." />
      <SearchGlass style={styles.icon} />
    </div>
  );
}