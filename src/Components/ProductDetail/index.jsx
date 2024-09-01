import { useShoppingCard } from "../../Hooks/useShoppingCard";

export const ProductDetail = () => {
  const { isProductDetailOpen, closeProductDetail, productToShow } = useShoppingCard();

  return (
    <aside className={`${isProductDetailOpen ? 'flex' : 'hidden'} top-[68px] w-[360px] h-[calc(100vh-68px)] flex-col fixed right-0 border border-black rounded-lg bg-white right-0.5`}>
      <div className="flex justify-between items-center p-3">
        <h2 className="text-xl font-medium">Product Details</h2>
        <button
          className="text-sm text-gray-500 hover:text-gray-700 cursor-pointer"
          onClick={closeProductDetail}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <figure className="p-5">
        <img className="w-full h-full rounded-lg" 
          src={productToShow.image} 
          alt={productToShow.title} 
        />
      </figure>
      <p className="flex flex-col p-5">
        <span className="font-semibold text-2xl mb-1">${productToShow.price}</span>
        <span className="font-medium text-md">{productToShow.title}</span>
        <span className="font-light text-sm text-justify">{productToShow.description}</span>
      </p>
    </aside>
  );
};
