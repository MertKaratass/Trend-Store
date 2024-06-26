import { useContext } from "react";
import CartIcon from "../Cart/Cartİcon";
import "./HeaderCartButton.css";
import { CartContext } from "../../context/CartProvider";

const HeaderCartButton = ({ onShowCart }) => {
  const cartCtx = useContext(CartContext);

  const totalItemsInCart = cartCtx.items.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.amount;
  }, 0);

  return (
    <button className="button" onClick={onShowCart}>
      <span className="icon">
        <CartIcon />
      </span>
      <span>Sepetim</span>
      <span className="badge">
        {totalItemsInCart}
      </span>
    </button>
  );
};

export default HeaderCartButton;
