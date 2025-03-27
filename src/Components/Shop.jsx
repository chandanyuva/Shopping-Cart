import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import { useEffect, useState } from "react";
import ProductsList from "./ProductsList";
import useGetData from "../Hooks/GetData";
// import { useState } from "react";

const Shop = () => {
    let [data, error, loading] = useGetData(
        "https://fakestoreapi.com/products"
    );
    // console.log(ProductsList)
    // console.log(data,error,loading,"bye");
    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>A network error was encountered</p>;
    const [cart, setCart] = useState([]);
    useEffect(() => {
        console.log(cart);
    }, [cart]);
    const addToCart = (product) => {
        console.log("in cart.addToCart");
        // Check if the product is already in the cart
        const existingProduct = cart.find(
            (item) => item.product.id === product.id
        );

        if (existingProduct) {
            // If product exists, increment the quantity
            setCart(
                cart.map((item) =>
                    item.product.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            );
        } else {
            // If product doesn't exist, add it to the cart with quantity 1
            setCart([...cart, { product, quantity: 1 }]);
        }
    };
    const removeFromCart = (productId) => {
        setCart(cart.filter((item) => item.product.id !== productId));
    };
    const decreaseQuantity = (productId) => {
        setCart(
            cart
                .map((item) => {
                    if (item.product.id === productId) {
                        const newQuantity = item.quantity - 1;
                        if (newQuantity > 0) {
                            return { ...item, quantity: newQuantity };
                        } else {
                            // If quantity is 0, remove the product from the cart
                            return null;
                        }
                    }
                    return item;
                })
                .filter((item) => item !== null)
        ); // Remove null values
    };
    const calculateTotal = () => {
        return cart
            .reduce(
                (total, item) => total + item.product.price * item.quantity,
                0
            )
            .toFixed(2);
    };
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
                    <Button>Shop</Button>
                    <Button>
                        <Link to="/Cart">Cart</Link>
                    </Button>
                </Stack>
            </div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    <ProductsList
                        productsData={data}
                        cart={{
                            addToCart,
                            removeFromCart,
                            decreaseQuantity,
                            calculateTotal,
                        }}
                    ></ProductsList>
                </div>
            )}
            {error ? <p>A Network error was encountered</p> : ""}
            {/* <div>
                <Products productsData={data}></Products>
            </div> */}
        </>
    );
};

export default Shop;
