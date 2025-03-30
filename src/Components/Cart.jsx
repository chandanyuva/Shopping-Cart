import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import { CartContext } from "../Context/cartContext";
import { ProductContext } from "../Context/productContext";
import { useContext, useMemo } from "react";

const Cart = () => {
    let { data, error, loading } = useContext(ProductContext);
    const { cart, incrementItem, decrementItem } = useContext(CartContext);
    const cartProducts = useMemo(() => {
        return cart
            .map((cartItem) => {
                const productDetails = data.find(
                    (product) => product.id === cartItem.id
                );
                return productDetails
                    ? { ...productDetails, count: cartItem.count }
                    : null;
            })
            .filter(Boolean);
    }, [cart, data]);

    // Calculate total cost
    const totalCost = useMemo(() => {
        return cartProducts.reduce(
            (total, product) => total + product.price * product.count,
            0
        );
    }, [cartProducts]);

    return (
        <>
            <div className="flex justify-center">
                <Stack
                    direction="row"
                    spacing={2}
                    divider={<Divider orientation="vertical" flexItem />}
                >
                    <Button>
                        <Link to="/">Home</Link>
                    </Button>
                    <Button>
                        <Link to="/Shop">Shop</Link>
                    </Button>
                    <Button>Cart</Button>
                </Stack>
            </div>
            {loading ? (
                <p className="flex justify-center">Loading Cart...</p>
            ) : (
                <div className="flex justify-center">
                    <div className="p-4">
                        {cartProducts.length > 0 ? (
                            <>
                                {cartProducts.map((product) => (
                                    <div
                                        key={product.id}
                                        className="border rounded-sm p-4 my-2 gap-1.5 flex justify-between items-center"
                                    >
                                        <img
                                            src={product.image}
                                            alt={product.title}
                                            className="w-16 h-16 object-contain"
                                        />
                                        <p className="w-1/3">{product.title}</p>
                                        <p>${product.price.toFixed(2)}</p>
                                        <div className="flex items-center">
                                            <button
                                                onClick={() =>
                                                    decrementItem(product.id)
                                                }
                                                className="bg-red-500 text-white px-2"
                                            >
                                                -
                                            </button>
                                            <span className="px-4">
                                                {product.count}
                                            </span>
                                            <button
                                                onClick={() =>
                                                    incrementItem(product.id)
                                                }
                                                className="bg-green-500 text-white px-2"
                                            >
                                                +
                                            </button>
                                        </div>
                                        <p>
                                            Subtotal: $
                                            {(
                                                product.price * product.count
                                            ).toFixed(2)}
                                        </p>
                                    </div>
                                ))}

                                {/* Total Cost Section */}
                                <div className="text-right mt-4">
                                    <h2 className="text-xl font-bold">
                                        Total Cost: ${totalCost.toFixed(2)}
                                    </h2>
                                </div>
                            </>
                        ) : (
                            <p>
                                Your cart is empty. <br />
                                Add items from Shop page.
                            </p>
                        )}
                    </div>
                </div>
            )}
            {error ? <p>A Network error was encountered</p> : ""}
        </>
    );
};

export default Cart;
