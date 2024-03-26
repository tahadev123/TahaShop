import { MdDeleteOutline } from "react-icons/md";

import { shortenText } from '../helpers/helper'

import styles from "./BasketCard.module.css"

function BasketCard({ data, clickHandler }) {
  const { image, title, quantity, price } = data

  return (
    <div className={styles.card}>
        <img src={image} alt={title} />
        <p>
            {shortenText(title)}
            <span className={styles.price}>{price} $</span>
        </p>
        <div className={styles.actions}>
            {quantity === 1 && (
                <button onClick={() => clickHandler("REMOVE_ITEM", data)}>
                    <MdDeleteOutline />
                </button>
            )}
            {quantity > 1 && <button onClick={() => clickHandler("DECREASE", data)}>-</button>}
            <span>{quantity}</span>
            <button onClick={() => clickHandler("INCREASE", data)}>+</button>
        </div>
    </div>
  )
}

export default BasketCard