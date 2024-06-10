import { ProductsIndex } from "./ProductsIndex";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";

export function Content() {
  const products = [
    {
      name: "first",
      price: 10,
      image_url: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_92x30dp.png",
      description: "lots of text here now",
    },
  ];

  return (
    <div>
      <Signup />
      <Login />
      <LogoutLink />
      <ProductsIndex products={products} />
    </div>
  );
}
