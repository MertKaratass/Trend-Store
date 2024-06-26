import CartIcon from "../Cart/Cartİcon";
import "./HeaderCartButton.css";

const HeaderCartButton = ({ onShowCart }) => {
  return (
    <button className="button" onClick={onShowCart}>
      <span className="icon">
        <CartIcon />
      </span>
      <span>Sepetim</span>
      <span className="badge">0</span>
    </button>
  );
};

export default HeaderCartButton;
