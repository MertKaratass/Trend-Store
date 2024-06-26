import Cart from "./Components/Cart/Cart";
import Hero from "./Components/Hero/Hero";
import Header from "./Components/Layout/Header";
import Products from "./Components/Products/Products";
import { useState } from "react";
import CartProvider from "./context/CartProvider";

function App() {
  const [cartIsShow, setCartIsShow] = useState(false);
  const showCartHandler = () => {
    setCartIsShow(true);
  };

  const hideCartHandler = (e) => {
    e.preventDefault();
    setCartIsShow(false);
  };

  return (
    <CartProvider>
      {cartIsShow && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <Hero />
      <Products />
    </CartProvider>
  );
}

export default App;
