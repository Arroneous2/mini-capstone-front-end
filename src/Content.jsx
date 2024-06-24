import { ProductsIndex } from "./ProductsIndex";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import axios from "axios";
import { useState, useEffect } from "react";
import { ProductsNew } from "./ProductsNew";
import { CartedProductIndex } from "./CartedProductsIndex";
import { Route, Routes } from "react-router-dom";
import { Modal } from "./Modal";

export function Content() {
  const [products, setproducts] = useState([]);
  const [isShowProductVisible, setShowProductVisible] = useState(false);

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

  const handleOpenShowProduct = () => {
    setShowProductVisible(true);
    console.log("showProduct");
  };

  const handleCloseShowProduct = () => {
    setShowProductVisible(false);
  };

  useEffect(handleIndexProducts, []);
  return (
    <div className="container">
      <div>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<LogoutLink />} />
          <Route path="/cart" element={<CartedProductIndex />} />
          <Route path="/new_product" element={<ProductsNew onCreateProduct={handleCreateProduct} />} />
          <Route
            path="/products"
            element={<ProductsIndex products={products} onShowProduct={handleOpenShowProduct} />}
          />
        </Routes>
        <Modal show={isShowProductVisible} onClose={handleCloseShowProduct}>
          Hello
        </Modal>
      </div>
    </div>
  );
}
