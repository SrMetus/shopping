import { useShoppingCard } from "../../Hooks/useShoppingCard";
import { SideMenu } from "../SideMenu";

export const CheckoutSideMenu = () => {
  const { isCheckoutSideMenuOpen, closeCheckoutSideMenu } = useShoppingCard();

  return (
    <SideMenu
      openMenu={isCheckoutSideMenuOpen}
      handleCloseMenu={closeCheckoutSideMenu}
      title="My Order"
    > 
    </SideMenu>
  );
};
