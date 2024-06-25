import CartIcon from "../Cart/Cartİcon";
import "./HeaderCartButton.css";

const HeaderCartButton = () => {
  return (
    <button className="button">
      <span className="icon">
        <CartIcon />
      </span>
      <span>Sepetim</span>
      <span className="badge">0</span>
    </button>
  );
};

export default HeaderCartButton;
