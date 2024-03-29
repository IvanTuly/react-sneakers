import React from "react";

import styles from "./Header.module.scss";

import { Link } from "react-router-dom";
import { AppContext } from "../../App";

function Header(props) {
  const { cartItems, currency, setCurrency } = React.useContext(AppContext);

  const totalPrice =
    currency === "$"
      ? cartItems.reduce((sum, obj) => Number(obj.price) + sum, 0)
      : cartItems.reduce((sum, obj) => Number(obj.priceEur) + sum, 0);

  return (
    <header className="d-flex justify-between align-center">
      <Link to="/react-sneakers/">
        <div className={styles.headerLeft}>
          <img
            width={70}
            height={70}
            src={process.env.PUBLIC_URL + "/img/logo.png"}
            alt="logo"
          />
          <div className="headerInfo">
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Best sneakers store</p>
          </div>
        </div>
      </Link>
      <div className={styles.headerRight}>
        <div className={styles.cart} onClick={props.onClickCart}>
          <img
            width={24}
            height={24}
            src={process.env.PUBLIC_URL + "/img/cart.svg"}
            alt="cart"
          />
          <p>
            {totalPrice} {currency === "$" ? "$" : "€"}
          </p>
        </div>
        <div className={styles.accountAndFavorites}>
          <div className="cu-p">
            <Link to="/react-sneakers/favorites">
              <img
                width={24}
                height={24}
                src={process.env.PUBLIC_URL + "/img/heart.svg"}
                alt="favorite"
              />
            </Link>
          </div>
          <div>
            <Link to="/react-sneakers/orders">
              <img
                width={24}
                height={24}
                src={process.env.PUBLIC_URL + "/img/account.svg"}
                alt="user"
              />
            </Link>
          </div>
        </div>
        <div className={styles.currency}>
          <div
            onClick={() => setCurrency("$")}
            className={
              currency === "$"
                ? styles.dollar + " " + styles.selected
                : styles.dollar
            }
          >
            $
          </div>
          <div
            onClick={() => setCurrency("€")}
            className={
              currency === "€"
                ? styles.euro + " " + styles.selected
                : styles.euro
            }
          >
            €
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
