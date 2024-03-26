import { Link } from "react-router-dom";
import { TbListDetails, TbShoppingBagCheck  } from "react-icons/tb";
import { MdDeleteOutline } from "react-icons/md";

import { productQuantity, shortenText } from "../helpers/helper";

import styles from "./Card.module.css"
import { useCart } from "../context/CartContext";

function Card({ data }) {
  const { id, title, image, price } = data;

  const [state, dispatch] = useCart()
  console.log(state);

  const quantity = productQuantity(state, id)

  const clickHanadler = (type) => {
    dispatch({ type, payload: data })
  }

  return (
    <div className={styles.card}>
        <img src={image} alt={title} />
        <h3>{shortenText(title)}</h3>
        <p>{price}</p>
        <div className={styles.actions}>
            <Link to={`/products/${id}`}>
                <TbListDetails />
            </Link>
            <div>
              {
                quantity === 1 && (
                  <button onClick={() => clickHanadler("REMOVE_ITEM")}>
                    <MdDeleteOutline />
                  </button>
                )
              }
              {
                quantity > 1 && (
                  <button onClick={() => clickHanadler("DECREASE")}>-</button>
                )
              }
              {!!quantity && <span>{quantity}</span>}
              {
                quantity === 0 ? (
                  <button onClick={() => clickHanadler("ADD_ITEM")}>
                    <TbShoppingBagCheck />
                  </button>
                ) : (
                  <button onClick={() => clickHanadler("INCREASE")}>+</button>
                )
              }


            </div>
        </div>
    </div>
  )
}

export default Card