import "./Cart.css";
import Cartİtem from "./Cartİtem";
import products from "../../productData";
import Offcanvas from "../UI/Offcanvas";

const Cart = (props) => {
  const cartItems = (
    <ul className="cart-items">
      {products.map((product) => (
        <Cartİtem key={product.id} product={product} />
      ))}
    </ul>
  );

  return (
    <Offcanvas onClose={props.onClose}>
      <div className="content">
        <div className="cart-head">
          <h2>Sepetim</h2>
          <a href="/" className="cart-close" onClick={props.onClose}>
            X
          </a>
        </div>
        {cartItems}
        <div className="total">
          <span>Toplam Değer</span>
          <span>100$</span>
        </div>
        <div className="actions">
          <button className="cart-order">Sipariş ver</button>
          <button className="cart-clear">Temizle</button>
        </div>
      </div>
    </Offcanvas>
  );
};

export default Cart;
