import { createContext, useState } from "react";

export const ShoppingCardContext = createContext();

export const ShoppingCardProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);

  const increment = () => setCount(count + 1);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  return (
    <ShoppingCardContext.Provider
      value={{
        count,
        increment,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
      }}
    >
      {children}
    </ShoppingCardContext.Provider>
  );
};
