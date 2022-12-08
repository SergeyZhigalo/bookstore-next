import Header from "../components/Header";
import Card from "../components/Card";
import styles from '../styles/Home.module.sass';
import Image from "next/image";
import Button from "../components/Button";

export default function Home() {
  return (
    <div>
      <Header />
      <div className={styles.marketing}>
        <div className={styles.marketing__text}>
          <h2>Собери свою библиотеку</h2>
          <p>Создай свою библиотеку и отслеживай свой прогресс чтения</p>
          <Button children="Начать" style={styles.marketing__button} />
        </div>
        <div className={styles.marketing__image}>
          <Image src="/book-preloader.svg" width={200} height={200} alt="marketing" />
        </div>
      </div>
      <div className={styles.popular}>
        <h2>Популярно сейчас</h2>
        <Card title="Война и мир" author="Лев Толстой" rating={5} />
        <Card title="The Lord of the Rings" author="J.R.R. Tolkien" rating={4} isPopular={true} />
        <Card title="Война и мир" author="Лев Толстой" rating={5} />
        <Card title="The Lord of the Rings" author="J.R.R. Tolkien" rating={4} isPopular={true} />
        <Card title="Война и мир" author="Лев Толстой" rating={5} />
        <Card title="The Lord of the Rings" author="J.R.R. Tolkien" rating={4} isPopular={true} />
        <Card title="Война и мир" author="Лев Толстой" rating={5} />
        <Card title="The Lord of the Rings" author="J.R.R. Tolkien" rating={4} isPopular={true} />
        <Card title="Война и мир" author="Лев Толстой" rating={5} />
        <Card title="The Lord of the Rings" author="J.R.R. Tolkien" rating={4} isPopular={true} />
      </div>
    </div>
  )
}