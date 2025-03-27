import { useState } from "react";
import Product from "./Product";

const ProductsList = ({ productsData, cart }) => {
    // console.log(productsData);
    console.log(cart.calculateTotal());
    const productList = productsData.map((element) => {
        return (
            <Product element={element} key={element.id} cart={cart}></Product>
        );
    });
    // console.log(productList);
    return <div className="flex flex-row flex-wrap">{productList}</div>;
};
export default ProductsList;
