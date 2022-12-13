import Image from "next/image";
import SearchInput from "./SearchInput";
import { BasketShopping, Heart } from "./Icons";
import styles from '../styles/Header.module.sass';

export default function Header() {
  return (
    <header className={styles.header}>
      <Image src="/logo.svg" width={160} height={40} alt="logo" />
      <SearchInput />
      <div className={styles.icon}>
        <Heart />
        <BasketShopping />
      </div>
    </header>
  )
}