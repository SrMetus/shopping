import { useState } from "react";

export const OrderCard = (props) => {
  const { title, imgUrl, price } = props;
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(price);

  const handleOnChange = (e) => {
    const newQuantity = e.target.value;
    if(newQuantity < 1){
      newQuantity = 1;
    }
    setQuantity(newQuantity);
    setTotal(price * newQuantity);
  };

  return (
    <div className="flex justify-between items-center mb-3">
      <div className="flex items-center">
        <figure className="w-20 h-20">
          <img  
            className="w-full h-full rounded-lg object-cover pr-2"
            src={imgUrl}
            alt={title}
          />
        </figure>
      </div>
      <p className="font-light text-sm text-justify items-center pr-2">
        {title}
      </p>
      <div className="flex items-center gap-2">
        <label className="text-sm font-thin" htmlFor="quantity">
          {" "}
          Qty
        </label>
        <input
          className="w-1/2 border border-black rounded-lg text-md"
          type="number"
          name="quantity"
          value={quantity}
          onChange={handleOnChange}
        />
      </div>
      <div>
        <p className="font-medium text-lg">${total}</p>
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
      </div>
    </div>
  );
};
