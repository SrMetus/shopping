import { useShoppingCard } from "../../Hooks/useShoppingCard"

export const Card = ({title, price, category, description, image}) => {
    const { increment } = useShoppingCard()


    return (
        <div className="bg-white cursor-pointer w-56 h-60 rounded-lg">
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/70 rounded-lg text-black text-xs m-2 px-2 py-0.5">
                    {category}
                </span>
                <img className="w-full h-full object-cover rounded-lg" src={image} alt={description} />
                <button className="absolute top-0 right-0 flex justify-center items-center bg-white/70 w-6 h-6 rounded-full m-2"
                    onClick={increment}    
                >
                    +
                </button>
            </figure>
            <p className="flex justify-between items-center">
                <span className="text-sm font-light">{title}</span>
                <span className="text-lg font-medium">${price}</span>
            </p>
        </div>
    )
}