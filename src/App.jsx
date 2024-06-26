import Cart from "./Components/Cart/Cart";
import Hero from "./Components/Hero/Hero";
import Header from "./Components/Layout/Header";
import Products from "./Components/Products/Products";
import { useState } from "react";

function App() {
  const [cartIsShow, setCartIsShow] = useState(false);
  const showCartHandler = () => {
    setCartIsShow(true);
  };
  return (
    <div>
      {cartIsShow && <Cart />}
      <Header onShowCart={showCartHandler} />
      <Hero />
      <Products />

    </div>
  );
}

export default App;
