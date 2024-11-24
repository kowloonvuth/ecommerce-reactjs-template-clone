import React, { useState, useEffect } from 'react';

export default function Category() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  // Correct paths to reference images in the public folder
  const categoryImages = {
    "men's clothing": "/assets/img/men-showing.jpg", // Removed '/template/public'
    "women's clothing": "/assets/img/women-showing.jpg"
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products/categories');
        const data = await response.json();
        // Filter to include only men's and women's clothing
        const filteredCategories = data.filter(
          (category) => category === "men's clothing" || category === "women's clothing"
        );
        setCategories(filteredCategories);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <>
      {/* Start Categories of The Month */}
      <section className="container py-5">
        <div className="row text-center pt-3">
          <div className="col-lg-6 m-auto">
            <h1 className="h1">Categories of The Month</h1>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <div className="row">
          {loading ? (
            <p>Loading categories...</p>
          ) : (
            categories.map((category, index) => (
              <div key={index} className="col-12 col-md-4 p-5 mt-3 text-center">
                <a href="#">
                  <img
                    src={categoryImages[category]} // Fetch the correct image based on the category
                    className="rounded-circle img-fluid border"
                    alt={category}
                  />
                </a>
                <h5 className="text-center mt-3 mb-3">{category}</h5>
                <p className="text-center">
                  <a className="btn btn-success" href="#">
                    Go Shop
                  </a>
                </p>
              </div>
            ))
          )}
        </div>
      </section>
      {/* End Categories of The Month */}
    </>
  );
}
