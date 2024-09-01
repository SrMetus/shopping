import { useShoppingCard } from "../../Hooks/useShoppingCard";
import { SideMenu } from "../SideMenu";
import { OrderCard } from "../OrderCard";

export const CheckoutSideMenu = () => {
  const { isCheckoutSideMenuOpen, closeCheckoutSideMenu, cardProducts } = useShoppingCard();
  
  return (
    <SideMenu
      openMenu={isCheckoutSideMenuOpen}
      handleCloseMenu={closeCheckoutSideMenu}
      title="My Order"
    >
      {cardProducts.map(product => (
        <OrderCard
          key={product.id}
          title={product.title}
          price={product.price}
          imgUrl={product.image}
        />
      ))}
    </SideMenu>
  );
};
