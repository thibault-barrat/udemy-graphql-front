import React, { useState } from "react";
import { MdShoppingCart } from "react-icons/md";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

type Props = {
  showCart: boolean;
  handleCartClick: () => void;
};

const CartDropdown = ({ showCart, handleCartClick }: Props) => {
  const items: string[] = ["test"];
  return (
    <div className={`${styles.cartDropdown} ${showCart ? styles.show : ''}`} onClick={handleCartClick}>
      <div className={styles.cartDropdown__top}>
        <span>0</span>
        <span className={styles.emphasis}>€0.00</span>
      </div>
      <div className={styles.cartDropdown__divider}></div>
      <ul className={styles.cartDropdown__list}>
        {items.map((item, index) => (
          <li key={index} className={styles.product}>
            <div className={styles.product__imageContainer}>
              <img
                src={`images/men_1.png`}
                alt=""
                className={styles.product__image}
              />
            </div>
            <div className={styles.product__info}>
              <div className={styles.product__name}>
                <Link to="/product/men_1">
                  Product name
                </Link>
              </div>
              <span className={styles.product__quantity}>quantity: 1</span><br />
              <span className={styles.product__price}>€0.00</span>
            </div>
          </li>
        ))}
      </ul>
      <Link to="/cart" className={`btn-orange ${styles.cartDropdown__link}`}>
        view cart
      </Link>
    </div>
  );
};

const Header = () => {
  const [currentLink] = useState("");
  const [showCart, setShowCart] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const links = ["cart", "orders"];
  const handleCartClick = () => setShowCart(!showCart);
  const toggleMenu = () => setShowMobileMenu(!showMobileMenu);

  return (
    <header>
      <nav className={styles.nav}>
        <div className={styles.container}>
          <Link to="/" className={`font ${styles.brand}`}>
            Click & Collect
          </Link>
          <button
            className={styles.menu}
            type="button"
            aria-controls="navbar"
            aria-expanded={showMobileMenu}
            aria-label="Toggle navigation"
            onClick={toggleMenu}
          >
            <span className={styles.burger}></span>
          </button>
          <div
            className={`${styles["navbar-collapse"]} ${
              showMobileMenu ? styles.show : ""
            }`}
            id="navbar"
          >
            <ul className={styles.navbar}>
              {links.map((link, index) => {
                const isCurrent = link === currentLink;
                const isActive = link === currentLink && "active";
                return (
                  <li
                    key={index}
                    className={`${isActive ? styles.active : ""}`}
                  >
                    <Link
                      to={link}
                      className={styles.navbar__link}
                      aria-current={isCurrent}
                    >
                      {link}
                    </Link>
                  </li>
                );
              })}
              <li className={`${styles.dropdown}`} onClick={handleCartClick}>
                <button
                  className={`${styles.navbar__link} ${
                    styles.dropdown__toggle
                  } ${showCart ? styles.show : ""}`}
                >
                  <MdShoppingCart className={styles.icon} />
                  <span className={`${styles.badge} bg-orange`}></span>
                </button>
                <CartDropdown
                  showCart={showCart}
                  handleCartClick={handleCartClick}
                />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
