import { useShoppingCard } from "../../Hooks/useShoppingCard";

export const Card = ({ id, title, price, category, description, image }) => {
  const {
    increment,
    openProductDetail,
    closeProductDetail,
    setProductToShow,
    addProductToCard,
    openCheckoutSideMenu,
    closeCheckoutSideMenu,
    cardProducts, // Asegúrate de que cardProducts esté disponible
  } = useShoppingCard();

  const showProduct = () => {
    openProductDetail();
    setProductToShow({ title, price, category, description, image });
    closeCheckoutSideMenu();
  };

  const handleAddProductToCard = (e) => {
    e.stopPropagation(); // Evita que el clic en el botón propague al contenedor de la tarjeta
    increment();
    addProductToCard({ id, title, price, category, description, image });
    openCheckoutSideMenu();
    closeProductDetail();
  };

  // Verifica si el producto ya está en el carrito
  const isInCard = cardProducts.some((item) => item.id === id);

  const renderIcon = () => {
    return isInCard ? (
      <button className="absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-4 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 12.75 6 6 9-13.5"
          />
        </svg>
      </button>
    ) : (
      <button
        className="absolute top-0 right-0 flex justify-center items-center bg-white/70 w-6 h-6 rounded-full m-2"
        onClick={handleAddProductToCard}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-4" // Asegúrate de que el color esté visible
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>
    );
  };

  return (
    <div
      className="bg-white cursor-pointer w-56 h-60 rounded-lg relative"
      onClick={showProduct}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/70 rounded-lg text-black text-xs m-2 px-2 py-0.5">
          {category}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={image}
          alt={description}
        />
        {renderIcon()}
      </figure>
      <p className="flex justify-between items-center p-2">
        <span className="text-sm font-light">{title}</span>
        <span className="text-lg font-medium">${price}</span>
      </p>
    </div>
  );
};
