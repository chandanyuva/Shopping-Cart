import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import { useEffect, useState } from "react";
import Products from "./Product";
import useGetData from "../Hooks/GetData";

const Shop = () => {
    [data, error, loading]=useGetData("https://fakestoreapi.com/products")
    return (
        <>
            <Products productsData={data ? data : "Loading..."}></Products>
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
        </>
    );
};

export default Shop;
