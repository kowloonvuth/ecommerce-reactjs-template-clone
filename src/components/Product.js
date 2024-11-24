import React, { useState, useEffect } from 'react';

export default function Product() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      {/* Start Featured Product */}
      <section className="bg-light">
        <div className="container py-5">
          <div className="row text-center py-3">
            <div className="col-lg-6 m-auto">
              <h1 className="h1">Featured Product</h1>
              <p>
                Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident.
              </p>
            </div>
          </div>
          <div className="row">
            {loading ? (
              <p>Loading products...</p>
            ) : (
              products.slice(0, 6).map((product) => (
                <div key={product.id} className="col-12 col-md-4 mb-4">
                  <div className="card h-100">
                    <a href="shop-single.html">
                      <img
                        src={product.image}
                        className="card-img-top"
                        alt={product.title}
                      />
                    </a>
                    <div className="card-body">
                      <ul className="list-unstyled d-flex justify-content-between">
                        <li>
                          <i className="text-warning fa fa-star" />
                          <i className="text-warning fa fa-star" />
                          <i className="text-warning fa fa-star" />
                          <i className="text-muted fa fa-star" />
                          <i className="text-muted fa fa-star" />
                        </li>
                        <li className="text-muted text-right">${product.price.toFixed(2)}</li>
                      </ul>
                      <a
                        href="shop-single.html"
                        className="h2 text-decoration-none text-dark"
                      >
                        {product.title}
                      </a>
                      <p className="card-text">{product.description.substring(0, 60)}...</p>
                      <p className="text-muted">Reviews (32)</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
      {/* End Featured Product */}
    </>
  );
}
