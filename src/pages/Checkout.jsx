import BasketCard from "../components/BasketCard";
import BasketSideBar from "../components/BasketSideBar";
import { useCart } from "../context/CartContext"

import emptyPng from "../assets/empty-cart.png"
import styles from "./Checkout.module.css"
import { Link } from "react-router-dom";

function Checkout() {
  const [state, dispatch] = useCart();

  const clickHandler = (type, payload) => dispatch({ type, payload })

  if (!state.itemsCounter) {
    return (
      <div className={styles.empty}>
        <img src={emptyPng} alt="emptyPNG" />
        <h2>Your cart is empty</h2>
        <Link to="/products">Back to shop</Link>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <BasketSideBar state={state} clickHandler={clickHandler} />
      <div className={styles.products}>
        {state.selectedItems.map((product) => (
          <BasketCard key={product.id} data={product} clickHandler={clickHandler} />
        ))}
      </div>
    </div>
  )
}

export default Checkout