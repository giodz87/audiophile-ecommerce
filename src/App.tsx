import { useState } from "react";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Footer from "./components/Footer";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";
import CartBox from "./components/CartBox";
import Shop from "./components/Shop";
import ComplaintOrder from "./components/ComplaintOrder";
import ScrollToTop from "./utils/ScrollOnTop";

function App() {
  const [cart, setCart] = useState(false);
  const [shop, setShop] = useState(false);

  const [number, setNumber] = useState(0);

  const [cardsProduct, setCardsProduct] = useState<any>([]);

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <div className=" z-2">
          <Header cart={cart} setCart={setCart} shop={shop} setShop={setShop} />
        </div>
        {cart ? (
          <CartBox
            number={number}
            setNumber={setNumber}
            cardsProduct={cardsProduct}
            setCardsProduct={setCardsProduct}
            cart={cart}
            setCart={setCart}
          />
        ) : (
          ""
        )}
        {shop ? (
          <div className="flex flex-col items-center justify-start  absolute w-full h-[100vh]">
            <div className=" w-full  h-[870px] flex flex-col items-center justify-center bg-white absolute top-0 z-20 md:h-[340px]">
              <Shop />
            </div>
            <div
              onClick={() => {
                setShop(false);
              }}
              className=" fixed w-full h-[100vh] top-0 bg-black bg-opacity-50 z-10"
            ></div>
          </div>
        ) : null}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:category" element={<Category />} />
          <Route
            path="/:category/:product"
            element={
              <Product
                number={number}
                setNumber={setNumber}
                cardsProduct={cardsProduct}
                setCardsProduct={setCardsProduct}
              />
            }
          />
          <Route
            path="/checkout"
            element={<Checkout cardsProduct={cardsProduct} />}
          />
          <Route
            path="/complaint-order"
            element={
              <ComplaintOrder
                cardsProduct={cardsProduct}
                setCardsProduct={setCardsProduct}
              />
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
// mapis dros romeli iyeneba  () {}
/// id-1 earphones || id-2 white-Headphones || id-3 0ld-Headpones
/// id-4 new-Headpones || id-5 Black-speaker || id-6 white-speakers
