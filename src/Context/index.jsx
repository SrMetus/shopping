import { createContext, useState } from "react";

export const ShoppingCardContext = createContext();

export const ShoppingCardProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  const [productToShow, setProductToShow] = useState({});
  const [cardProducts, setCardProducts] = useState([])

  const increment = () => setCount(count + 1);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false); // Corregido aquí
  const addProductToCard = (product) => {
    setCardProducts(prevProducts => [...prevProducts, product]);
  }

  const contextValue = {
    count,
    increment,
    isProductDetailOpen,
    openProductDetail,
    closeProductDetail,
    isCheckoutSideMenuOpen,
    openCheckoutSideMenu,
    closeCheckoutSideMenu,
    productToShow,
    setProductToShow,
    cardProducts,
    addProductToCard,
    setCardProducts,
  }

  return (
    <ShoppingCardContext.Provider value={contextValue}>
      {children}
    </ShoppingCardContext.Provider>
  );
};
