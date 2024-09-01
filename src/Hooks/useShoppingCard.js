import { useContext } from "react";
import { ShoppingCardContext } from "../Context";

export const useShoppingCard = () => {
  return useContext(ShoppingCardContext);
};
