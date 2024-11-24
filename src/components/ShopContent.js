import React, { useState, useEffect } from 'react';

export default function ShopContent() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch products from Fake Store API
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
      <div>
        {/* Start Content */}
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-3">
              <h1 className="h2 pb-4">Categories</h1>
              <ul className="list-unstyled templatemo-accordion">
                <li className="pb-3">
                  <a className="collapsed d-flex justify-content-between h3 text-decoration-none" href="#">
                    Gender
                    <i className="fa fa-fw fa-chevron-circle-down mt-1" />
                  </a>
                  <ul className="collapse show list-unstyled pl-3">
                    <li><a className="text-decoration-none" href="#">Men</a></li>
                    <li><a className="text-decoration-none" href="#">Women</a></li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="col-lg-9">
              <div className="row">
                <div className="col-md-6">
                  <ul className="list-inline shop-top-menu pb-3 pt-1">
                    <li className="list-inline-item">
                      <a className="h3 text-dark text-decoration-none mr-3" href="#">All</a>
                    </li>
                    <li className="list-inline-item">
                      <a className="h3 text-dark text-decoration-none mr-3" href="#">Men's</a>
                    </li>
                    <li className="list-inline-item">
                      <a className="h3 text-dark text-decoration-none" href="#">Women's</a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6 pb-4">
                  <div className="d-flex">
                    <select className="form-control">
                      <option>Featured</option>
                      <option>A to Z</option>
                      <option>Item</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                {loading ? (
                  <p>Loading products...</p>
                ) : (
                  products.map(product => (
                    <div key={product.id} className="col-md-4">
                      <div className="card mb-4 product-wap rounded-0">
                        <div className="card rounded-0">
                          <img
                            className="card-img rounded-0 img-fluid"
                            src={product.image}
                            alt={product.title}
                          />
                          <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                            <ul className="list-unstyled">
                              <li><a className="btn btn-success text-white" href="#"><i className="far fa-heart" /></a></li>
                              <li><a className="btn btn-success text-white mt-2" href="#"><i className="far fa-eye" /></a></li>
                              <li><a className="btn btn-success text-white mt-2" href="#"><i className="fas fa-cart-plus" /></a></li>
                            </ul>
                          </div>
                        </div>
                        <div className="card-body">
                          <a href="/shop-single" className="h3 text-decoration-none">{product.title}</a>
                          <p className="text-center mb-0">${product.price.toFixed(2)}</p>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
