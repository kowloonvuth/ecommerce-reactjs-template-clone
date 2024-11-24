import React from 'react';
import { useCart } from '../context/CartContext'; // Import useCart hook

export default function Header() {
    const { cartCount } = useCart(); // Access cartCount from context

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light shadow">
                <div className="container d-flex justify-content-between align-items-center">
                    <a className="navbar-brand text-success logo h1 align-self-center" href="index.html">
                        Zay
                    </a>
                    <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#templatemo_main_nav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between" id="templatemo_main_nav">
                        <div className="flex-fill">
                            <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/about">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/shop">Shop</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/contact-us">Contact</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/checkout">Check Out</a>
                                </li>
                            </ul>
                        </div>
                        <div className="navbar align-self-center d-flex">
                            <a className="nav-icon position-relative text-decoration-none" href="#">
                                <i className="fa fa-fw fa-cart-arrow-down text-dark mr-1" />
                                {/* Display cartCount directly since it's a number */}
                                <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">
                                    {cartCount}
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
