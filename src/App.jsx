import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import { useContext } from "react";
import { CartContext } from "./Context/cartContext";

function App() {
    let { cartSizeCal } = useContext(CartContext);
    let cartSize = cartSizeCal();
    return (
        <>
            <div className="flex justify-center">
                <Stack
                    direction="row"
                    spacing={2}
                    divider={<Divider orientation="vertical" flexItem />}
                >
                    <Button>Home</Button>
                    <Button>
                        <Link to="/Shop">Shop</Link>
                    </Button>
                    <Button className="w-6">
                        <Link to="/Cart" className="flex items-center">
                            Cart
                            <span className="relative flex flex-row items-center justify-center w-6 h-6 m-2 bg-blue-500 text-white text-sm rounded-full">
                                {cartSize}
                            </span>
                        </Link>
                    </Button>
                </Stack>
            </div>
            <div className="relative w-full h-screen flex items-center justify-center bg-gray-100">
                <div className="relative text-center p-8 bg-white/75 rounded-2xl shadow-lg">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">
                        Welcome to ShopEase!
                    </h1>
                    <p className="text-lg text-gray-600 mb-6">
                        Discover amazing products at unbeatable prices.
                    </p>
                    <Link to="/Shop">
                        <button className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition">
                            Shop Now
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default App;
