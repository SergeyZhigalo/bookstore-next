import { useEffect, useState } from "react";
import Image from "next/image";
import Header from "../components/Header";
import Card from "../components/Card";
import Button from "../components/Button";
import styles from '../styles/Home.module.sass';

export default function Home() {
  const [data, setData] = useState()
  const [favourites, setFavourites] = useState([])

  async function load() {
    const response = await fetch('http://localhost:3001/apiBooks?isPopular=true&_limit=10')
    const data = await response.json()
    setData(data)
  }

  function getFavourites() {
    if (String(localStorage.getItem('favourites')) === 'null' ){
      localStorage.setItem('favourites', '[]')
      console.log('favourites is empty')
      setFavourites([])
    }else{
      console.log(JSON.parse(localStorage.getItem('favourites')))
      setFavourites(JSON.parse(localStorage.getItem('favourites')))
    }
  }

  function addToFavourites(id) {
    let favourites = JSON.parse(localStorage.getItem('favourites'))
    favourites = [...favourites, id]
    localStorage.setItem('favourites', JSON.stringify(favourites))
    setFavourites(favourites)
  }

  function removeFromFavourites(id) {
    console.log('removeFromFavourites')
    let favourites = JSON.parse(localStorage.getItem('favourites'))
    favourites = favourites.filter(favourite => favourite !== id)
    localStorage.setItem('favourites', JSON.stringify(favourites))
    setFavourites(favourites)
  }

  useEffect(() => {
    load()
    getFavourites()
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
          data && data.map((item, index) =>
            <Card
              key={index}
              id={item.id}
              title={item.title}
              author={item.author}
              rating={item.rating}
              isPopular={item.isPopular}
              addToFavourites={addToFavourites}
              isFavourite={favourites.includes(item.id)}
              removeFromFavourites={removeFromFavourites}
            /> )
        }
      </div>
    </div>
  )
}