import { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import ProductsList from "./ProductsList";
import { ProductContext } from "../Context/productContext";

const Shop = () => {
    let { data, error, loading } = useContext(ProductContext);
    return (
        <div>
            <img
                src="./assets/bg.jpg"
                alt="Shopping Banner"
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-white/75"></div>
            <div className="relative z-10">
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
                    <p className="flex justify-center">Loading...</p>
                ) : (
                    <div>
                        <ProductsList
                            productsData={data}
                            className="flex justify-center"
                        ></ProductsList>
                    </div>
                )}
                {error ? (
                    <p className="flex justify-center">
                        A Network error was encountered
                    </p>
                ) : (
                    ""
                )}
            </div>
        </div>
    );
};

export default Shop;
