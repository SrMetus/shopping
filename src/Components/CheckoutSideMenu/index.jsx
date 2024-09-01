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
      <div className="max-h-full overflow-y-scroll">
        {cardProducts.map((product) => (
          <OrderCard
            key={product.id}
            title={product.title}
            price={product.price}
            imgUrl={product.image}
          />
        ))}
      </div>
    </SideMenu>
  );
};
