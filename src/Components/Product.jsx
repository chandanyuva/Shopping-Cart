import { useEffect, useState } from "react";
const Product = ({ element, cart }) => {
    const [buy, setBuy] = useState(0);
    // console.log(cart);
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
            // border: "solid #c6c6c6",
            // borderRadius: "8px",
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
            // border: "solid #c6c6c6",
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
            // border: "solid #c6c6c6",
            borderRadius: "8px",
        },
    };

    return (
        <div style={styles.card}>
            <img src={element.image} alt={element.title} style={styles.image} />
            <div style={styles.content}>
                <h2 style={styles.title} className="text-sm text-pretty">
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
                <div className="flex border rounded-sm w-min divide-x-1 ">
                    <button
                        onClick={(e) => {
                            if (buy > 0) {
                                cart.decreaseQuantity(element.id);
                                setBuy(buy - 1);
                            }
                        }}
                        className="pr-2 pl-2"
                    >
                        -
                    </button>
                    <p className="pr-2 pl-2">{buy}</p>
                    <button
                        onClick={(e) => {
                            // console.log(buy);
                            if (buy < 10) {
                                cart.addToCart(element);
                                setBuy(buy + 1);
                            }
                        }}
                        className="pr-2 pl-2"
                    >
                        +
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;
