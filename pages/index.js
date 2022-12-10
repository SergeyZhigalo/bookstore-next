import Header from "../components/Header";
import Card from "../components/Card";
import styles from '../styles/Home.module.sass';
import Image from "next/image";
import Button from "../components/Button";
import {useEffect, useState} from "react";

export default function Home() {

  const [data, setData] = useState()

  async function load() {
    const response = await fetch('http://localhost:3001/apiBooks?isPopular=true&_limit=10')
    const data = await response.json()
    setData(data)
  }

  useEffect(() => {
    load()
  }, []);

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
        {
          data && data.map((item, index) => <Card key={index} title={item.title} author={item.author} rating={item.rating} isPopular={item.isPopular} /> )
        }
      </div>
    </div>
  )
}