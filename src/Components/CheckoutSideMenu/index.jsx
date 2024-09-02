import { useShoppingCard } from "../../Hooks/useShoppingCard";
import { SideMenu } from "../SideMenu";
import { OrderCard } from "../OrderCard";
import { TotalPrice } from "../../utils";

export const CheckoutSideMenu = () => {
  const { 
    isCheckoutSideMenuOpen, 
    closeCheckoutSideMenu, 
    cardProducts, 
    setCardProducts, 
    setOrder, 
    order 
  } = useShoppingCard();

  const handleDelete = (id) => {
    const filteredProducts = cardProducts.filter(product => product.id !== id);
    setCardProducts(filteredProducts);
  };

  const handleCheckout = () => {
    const orderToAdd = {
      date: new Date(),
      products: cardProducts,
      totalProducts: cardProducts.length,
      totalPrice: TotalPrice(cardProducts),
    };
    setOrder([...order, orderToAdd]);
    setCardProducts([]);
  };

  return (
    <SideMenu
      openMenu={isCheckoutSideMenuOpen}
      handleCloseMenu={closeCheckoutSideMenu}
      title="My Order"
    >
      <div className="overflow-y-scroll flex-1">
        {cardProducts.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            imgUrl={product.image}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <div className="px-4">
        <p className="flex justify-between items-center mb-2">
          <span className="font-light">Total:</span>
          <span className="font-medium">${TotalPrice(cardProducts)}</span>
        </p>
        <button onClick={handleCheckout} className="btn-checkout w-full bg-black py-3 mb-4 text-white rounded-lg">Checkout</button>
      </div>
    </SideMenu>
  );
};
