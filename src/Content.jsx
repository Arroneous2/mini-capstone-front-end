import { ProductsIndex } from "./ProductsIndex";

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
      <ProductsIndex products={products} />
    </div>
  );
}
