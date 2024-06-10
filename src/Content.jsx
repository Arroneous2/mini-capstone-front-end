import { ProductsIndex } from "./ProductsIndex";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import axios from "axios";
import { useState, useEffect } from "react";
import { ProductsNew } from "./ProductsNew";

export function Content() {
  const [products, setproducts] = useState([]);

  const handleIndexProducts = () => {
    console.log("handleIndexproducts");
    axios.get("http://localhost:3000/products.json").then((response) => {
      console.log(response.data);
      setproducts(response.data);
    });
  };

  const handleCreateProduct = (params, successCallback) => {
    console.log("handleCreateproduct", params);
    axios.post("http://localhost:3000/products.json", params).then((response) => {
      setproducts([...products, response.data]);
      successCallback();
    });
  };

  useEffect(handleIndexProducts, []);
  return (
    <div>
      <Signup />
      <Login />
      <LogoutLink />
      <ProductsNew onCreateProduct={handleCreateProduct} />
      <ProductsIndex products={products} />
    </div>
  );
}
