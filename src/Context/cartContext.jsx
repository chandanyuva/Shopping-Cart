import { createContext, useState } from "react";
import PropTypes from "prop-types";

// Create a new context
export const CartContext = createContext();

// Context Provider Component
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const addToCart = (element, eleCount) => {
        if (eleCount > 0) {
            setCart((prevCart) => {
                const existingItem = prevCart.find(
                    (item) => item.id === element.id
                );
                if (existingItem) {
                    return prevCart.map((item) =>
                        item.id === element.id
                            ? { ...item, count: eleCount }
                            : item
                    );
                } else {
                    return [...prevCart, { id: element.id, count: eleCount }];
                }
            });
        }
    };
    // Increment item count in cart
    const incrementItem = (id) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id
                    ? { ...item, count: item.count < 10 ? item.count + 1 : 10 }
                    : item
            )
        );
    };

    // Decrement item count in cart (remove if count reaches 0)
    const decrementItem = (id) => {
        setCart(
            (prevCart) =>
                prevCart
                    .map((item) =>
                        item.id === id
                            ? { ...item, count: item.count - 1 }
                            : item
                    )
                    .filter((item) => item.count > 0) // Remove items with count 0
        );
    };
    const cartSizeCal = () => {
        return cart.length;
    };
    return (
        <CartContext.Provider
            value={{
                cart,
                setCart,
                addToCart,
                incrementItem,
                decrementItem,
                cartSizeCal,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

CartProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
