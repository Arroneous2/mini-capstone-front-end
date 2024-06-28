export function ProductsIndex(props) {
  return (
    <div>
      <h1>All Products</h1>
      <div className="card-group">
        {props.products.map((product) => (
          <div className="row">
            <div className="card" style={{ width: "25vw", height: "50vw" }} key={product.id}>
              <img src={product.images[0].url} className="card-img-top" alt="..." />

              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <h6 className="card-title">{product.price}</h6>
                <p className="card-text">{product.description}</p>
                <button className="btn btn-primary" onClick={() => props.onShowProduct()}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
