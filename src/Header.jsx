import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <nav>
        <a href="/">Home</a>
      </nav>
      <Link to="/cart">Cart</Link>
      <Link to="/login">Login</Link>
      <Link to="/logout">Logout</Link>
      <Link to="/signup">Signup</Link>
      <Link to="/new_product">New Product</Link>
      <Link to="/products">Products</Link>
    </header>
  );
}
