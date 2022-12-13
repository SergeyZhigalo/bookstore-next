import Image from "next/image";
import Rating from "./Rating";
import Button from "./Button";
import { Fire, Heart } from "./Icons";
import styles from '../styles/Card.module.sass';

export default function Card({ id, title, author, rating, isPopular, addToFavourites, isFavourite, removeFromFavourites }) {

  return (
    <div className={styles.card}>
      <div className={styles.image}>
        {isPopular && <Fire style={styles.popular} />}
        <Image src="/book-preloader.svg" width={128} height={192} alt={title} />
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.author}>{author}</div>
      <Rating rating={rating} />
      <div className={styles.buy}>
        <Button children="В корзину" style={styles.button__moreDetail} />
        <Heart
          style={isFavourite ? `${styles.like} ${styles.red}` : styles.like}
          onClick={isFavourite ? ()=>removeFromFavourites(id) : ()=>addToFavourites(id)}
        />
      </div>
    </div>
  )
}