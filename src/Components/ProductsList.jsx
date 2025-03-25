import { useState } from "react";
import Product from "./Product";

const ProductsList = ({ productsData }) => {
    // console.log(productsData);
    const [inCart, setInCart] = useState({ id: "", count: 0 });

    const productList = productsData.map((element) => {
        return (
            <Product
                element={element}
                key={element.id}
                cart={[inCart, setInCart]}
            ></Product>
        );
    });
    // console.log(productList);
    return <div className="flex flex-row flex-wrap">{productList}</div>;
};
export default ProductsList;
