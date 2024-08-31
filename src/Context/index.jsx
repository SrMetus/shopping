import { createContext, useState } from "react"

export const ShoppingCardContext = createContext()

export const ShoppingCardProvider = ({children}) => {
    const [count, setCount] = useState(0)
    const increment = () => {
        setCount(count + 1)
    }

    return (
        <ShoppingCardContext.Provider value={{
            count,
            setCount,
            increment
        }}>
            {children}
        </ShoppingCardContext.Provider>
    )
}