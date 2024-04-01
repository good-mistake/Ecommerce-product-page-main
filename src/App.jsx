import React, { useState } from "react";
import { ReactComponent as Minus } from "./images/icon-minus.svg";
import { ReactComponent as Plus } from "./images/icon-plus.svg";
import { ReactComponent as Cart } from "./images/icon-cart.svg";
import Img from "./images/image-avatar.png";
import imageProduct1 from "./images/image-product-1.jpg";
import deleteIcon from "./images/icon-delete.svg";
import { ReactComponent as Logo } from "./images/logo.svg";
import { useEffect } from "react";
import CarouselInMain from "./CarouselInMain";
import { ReactComponent as Menu } from "./images/icon-menu.svg";
import { ReactComponent as Close } from "./images/icon-close.svg";
const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [showItem, setShowItem] = useState(false);
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const [navBtn, setNavBtn] = useState(false);
  const handleNavShow = () => {
    setNavBtn(!navBtn);
  };
  const handleShow = () => {
    setShowItem(!showItem);
  };
  const addToCart = () => {
    const itemsToAdd = [];
    for (let i = 0; i < quantity; i++) {
      itemsToAdd.push(i);
    }
    setCartItems([...cartItems, ...itemsToAdd]);
    setQuantity(0);
  };
  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };
  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div className="container">
        <header>
          <nav>
            {screenSize < 768 ? (
              <>
                <aside className={` ${navBtn ? "sideMenuContainer" : ""}`}>
                  <div className={`sideMenu ${navBtn ? "open" : ""}`}>
                    <button onClick={handleNavShow} className="toggleBtn">
                      {navBtn ? <Close /> : <Menu />}
                    </button>
                    {navBtn ? (
                      <ul>
                        <li>
                          <button onClick={handleNavShow} className="toggleBtn">
                            {navBtn ? <Close /> : <Menu />}
                          </button>
                        </li>
                        <li>
                          <a href="./">Collections</a>
                        </li>
                        <li>
                          <a href="./">Men</a>
                        </li>
                        <li>
                          <a href="./">Women</a>
                        </li>
                        <li>
                          <a href="./">About</a>
                        </li>
                        <li>
                          <a href="./">Contact</a>
                        </li>
                      </ul>
                    ) : (
                      ""
                    )}

                    <h1 href="./" className="sneaker">
                      <Logo />
                    </h1>
                  </div>
                </aside>
              </>
            ) : (
              <ul>
                <h1 href="./" className="sneaker">
                  <Logo />
                </h1>

                <li>
                  <a href="./">Collections</a>
                </li>
                <li>
                  <a href="./">Men</a>
                </li>
                <li>
                  <a href="./">Women</a>
                </li>
                <li>
                  <a href="./">About</a>
                </li>
                <li>
                  <a href="./">Contact</a>
                </li>
              </ul>
            )}
            <div className="profileAndCart">
              <div>
                <div className="cart">
                  <button onClick={handleShow} className="cursor shoppingCart">
                    {" "}
                    <span className="cart-icon">
                      <Cart />
                    </span>
                    {cartItems.length > 0 ? (
                      <span className="cartItemCount">{cartItems.length}</span>
                    ) : (
                      <span className="cartItemCount">0</span>
                    )}
                  </button>{" "}
                </div>
                {showItem ? (
                  cartItems.length > 0 ? (
                    <div className="cartItem">
                      {" "}
                      <h4>Cart</h4>
                      <div>
                        <div className="productInfo">
                          <img
                            src={imageProduct1}
                            alt=""
                            className="productImg"
                          />
                          <div>
                            <p>Fall Limited Edition Sneakers</p>
                            <p className="">
                              $125.00 x {cartItems.length}{" "}
                              <span>${125 * cartItems.length}.00</span>
                            </p>
                          </div>
                          <img src={deleteIcon} alt="" className="deleteIcon" />
                        </div>
                        <button className="checkout cursor">Checkout</button>
                      </div>
                    </div>
                  ) : (
                    <div className="emptyCart">
                      <h4>Cart</h4>
                      <p>Your cart is empty</p>
                    </div>
                  )
                ) : (
                  ""
                )}
              </div>
              <img src={Img} alt="" />{" "}
            </div>
          </nav>
        </header>
        <main className="main">
          <div className="images">
            <CarouselInMain />
          </div>
          <section className="details">
            {" "}
            <h3>SNEAKER COMPANY</h3>
            <h1>Fall Limited Edition Sneakers</h1>
            <p>
              {" "}
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they’ll withstand
              everything the weather can offer.
            </p>
            <div>
              {screenSize < 375 ? (
                <h2 className="price">
                  <span>
                    $125.00 <span className="discount">50%</span>
                  </span>
                  <h5>$250.00</h5>{" "}
                </h2>
              ) : (
                <h2 className="price">
                  $125.00 <span className="discount">50%</span>{" "}
                </h2>
              )}

              {screenSize < 375 ? <></> : <h5>$250.00</h5>}
            </div>
            <div className="scoreAndBuy">
              <button className="score">
                <span onClick={decrementQuantity}>
                  <Minus />
                </span>
                <span>{quantity}</span>
                <span onClick={incrementQuantity}>
                  <Plus />
                </span>
              </button>
              <button className="buy cursor" onClick={addToCart}>
                <span>
                  {" "}
                  <Cart />
                </span>
                Add to cart
              </button>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default App;
