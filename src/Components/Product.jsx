import { useContext } from "react";
import { CartContext } from "../Context/cartContext";
import PropTypes from "prop-types";

const Product = ({ element }) => {
    const { cart, addToCart, incrementItem, decrementItem } =
        useContext(CartContext);

    const cartItem = cart.find((item) => item.id === element.id);

    const styles = {
        card: {
            border: "1px solid #ddd",
            borderRadius: "8px",
            width: "250px",
            height: "350px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            overflow: "hidden",
            margin: "10px",
            fontFamily: "Arial, sans-serif",
            padding: "8px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        },
        image: {
            width: "70%",
            height: "150px",
            objectFit: "contain",
            margin: "2px",
        },
        content: {
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            border: "solid #ddd",
            borderRadius: "8px",
        },
        title: {
            fontSize: "14px",
            fontWeight: "bold",
        },
        description: {
            fontSize: "12px",
            color: "#555",
        },
        price: {
            fontSize: "16px",
            fontWeight: "bold",
            color: "#000",
        },
        rating: {
            fontSize: "14px",
            color: "#888",
        },
        border: {
            border: "solid #ddd",
            borderRadius: "8px",
        },
    };

    return (
        <div style={styles.card}>
            <img src={element.image} alt={element.title} style={styles.image} />
            <div style={styles.content}>
                <h2
                    style={styles.title}
                    className="text-sm text-pretty line-clamp-2"
                >
                    {element.title}
                </h2>
                <div
                    className="flex justify-around p-2 w-full"
                    style={styles.border}
                >
                    <p style={styles.price}>${element.price}</p>
                    <div style={styles.rating}>
                        <span>Rating: </span>
                        <span>{element.rating.rate} / 5</span>
                    </div>
                </div>
                <p style={styles.description} className="line-clamp-3">
                    {element.description}
                </p>
                <div className="flex  w-min divide-x-1 ">
                    {cartItem ? (
                        // Show increment/decrement buttons if item is in cart
                        <div className="flex items-center border rounded-sm">
                            <button
                                onClick={() => decrementItem(element.id)}
                                className="bg-red-500 text-white px-2"
                            >
                                -
                            </button>
                            <span className="px-4">{cartItem.count}</span>
                            <button
                                onClick={() => incrementItem(element.id)}
                                className="bg-green-500 text-white px-2"
                            >
                                +
                            </button>
                        </div>
                    ) : (
                        // Show "Add to Cart" button if item is not in cart
                        <button
                            onClick={() => addToCart(element, 1)}
                            className="p-1  bg-blue-600 text-white border-none font-semibold rounded-lg hover:bg-blue-700 transition w-24"
                        >
                            Add to Cart
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Product;

Product.propTypes = {
    element: PropTypes.object.isRequired,
};
