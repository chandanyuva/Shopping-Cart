import { createContext } from "react";
import useGetData from "../Hooks/GetData";
import PropTypes from "prop-types";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    let [data, error, loading] = useGetData(
        "https://fakestoreapi.com/products"
    );
    return (
        <ProductContext.Provider value={{ data, error, loading }}>
            {children}
        </ProductContext.Provider>
    );
};

ProductProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
