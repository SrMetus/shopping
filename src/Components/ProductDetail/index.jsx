import { useShoppingCard } from "../../Hooks/useShoppingCard";
import { SideMenu } from "../SideMenu";

export const ProductDetail = () => {
  const { isProductDetailOpen, closeProductDetail, productToShow } =
    useShoppingCard();

  return (
    <SideMenu
      openMenu={isProductDetailOpen}
      handleCloseMenu={closeProductDetail}
      title="Product Details"
    >
      <figure className="p-5">
        <img
          className="w-full h-full rounded-lg"
          src={productToShow.image}
          alt={productToShow.title}
        />
      </figure>
      <p className="flex flex-col p-5">
        <span className="font-semibold text-2xl mb-1">
          ${productToShow.price}
        </span>
        <span className="font-medium text-md">{productToShow.title}</span>
        <span className="font-light text-sm text-justify">
          {productToShow.description}
        </span>
      </p>
    </SideMenu>
  );
};
