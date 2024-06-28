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
        <div className="card" style={{ minWidth: "25vw", maxWidth: "50vw" }} key={cartedProduct.id}>
          <div className="card-body">
            <h5 className="card-title">{cartedProduct.product.name}</h5>
            <h6 className="card-title">{cartedProduct.product.price}</h6>
            <p className="card-text">{cartedProduct.quantity}</p>
          </div>
        </div>
      ))}
      <button className="btn btn-primary" onClick={setOrderFromCartedProducts}>
        {" "}
        Buy Them ALL!!!!!
      </button>
    </div>
  );
}
