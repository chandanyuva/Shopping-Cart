import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
// import { useEffect, useState } from "react";
import Products from "./Products";
import useGetData from "../Hooks/GetData";

const Shop = () => {
    let [data, error, loading] = useGetData(
        "https://fakestoreapi.com/products"
    );
    // console.log(data,error,loading,"bye");
    if (loading) return <p>Loading...</p>;
    if (error) return <p>A network error was encountered</p>;
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
                </Stack>
            </div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    <Products productsData={data}></Products>
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
