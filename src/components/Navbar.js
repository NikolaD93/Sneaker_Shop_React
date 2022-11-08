import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../contexts/CartContext";

const Navbar = () => {
  const { cart } = useContext(CartContext);

  return (
    <nav>
      <Link to="/"><p className="logo-text"> <span>Sneaker</span> Store</p></Link> 
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="products">Products</Link>
        </li>
        <li>
          <Link to="about">About us</Link>
        </li>
        <li>
          <Link to="contact">Contact us</Link>
        </li>
        <li>
          <Link to="cart">Cart <span>({cart.length})</span></Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
