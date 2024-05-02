import { Link } from "react-router-dom";
import "./Navbar.css";
import { useEffect, useState } from "react";
import { useCartProductContext } from "../context/CartProductContext";

export default function Navbar() {
  const { cartProducts } = useCartProductContext();
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const headerHeight = document.querySelector("header").offsetHeight;

      if (window.scrollY > headerHeight) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={isFixed ? "navbar fixed-navbar" : "navbar"}>
      <ul>
        <li>
          <Link className="link" to={"/"}>
            Home
          </Link>
        </li>
        <li>
          <Link className="link" to={"/cart"}>
            Cart ({cartProducts.length})
          </Link>
        </li>
      </ul>
    </nav>
  );
}
