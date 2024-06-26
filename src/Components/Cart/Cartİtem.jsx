import "./Cartİtem.css";

const Cartİtem = ({ product }) => {
  const { name, img, price, amount } = product;
  return (
    <li className="cart-item">
      <div className="cart-item-img">
        <img src={img} alt={name} />
      </div>
      <div className="cart-item-info">
        <div className="cart-item-texts">
          <b>{name}</b>
          <div>
            <span>₺{price}x</span>
            <span>{amount}</span>
          </div>
        </div>
        <a href="/" className="cart-item-remove"></a>
      </div>
    </li>
  );
};

export default Cartİtem;
