import { ProductsIndex } from "./ProductsIndex";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import axios from "axios";
import { useState, useEffect } from "react";

export function Content() {
  const [products, setproducts] = useState([]);

  const handleIndexproducts = () => {
    console.log("handleIndexproducts");
    axios.get("http://localhost:3000/products.json").then((response) => {
      console.log(response.data);
      setproducts(response.data);
    });
  };

  useEffect(handleIndexproducts, []);
  return (
    <div>
      <Signup />
      <Login />
      <LogoutLink />
      <ProductsIndex products={products} />
    </div>
  );
}
