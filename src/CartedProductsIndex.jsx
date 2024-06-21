import axios from "axios";
import { useState, useEffect } from "react";

export function CartedProductIndex() {
  const [cartedProducts, setCartedProducts] = useState([]);

  const getCartedProductIndex = () => {
    console.log("getCartedProductIndex");
    axios.get("http://localhost:3000/carted_products.json").then((response) => {
      console.log(response.data);
      setCartedProducts(response.data);
    });
  };

  const setOrderFromCartedProducts = () => {
    console.log("setOrderFromCartedProducts");
    axios.post("http://localhost:3000//orders.json").then((response) => {
      console.log(response.data);
      window.location.href = "/";
    });
  };
  useEffect(getCartedProductIndex, []);

  return (
    <div>
      {cartedProducts.map((cartedProduct) => (
        <div key={cartedProduct.id}>
          <p>name : {cartedProduct.product.name}</p>
          <p>price : {cartedProduct.product.price}</p>
          <p>quantity : {cartedProduct.quantity}</p>
        </div>
      ))}
      <button onClick={setOrderFromCartedProducts}> Buy Them ALL!!!!!</button>
    </div>
  );
}
