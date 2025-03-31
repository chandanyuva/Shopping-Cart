import Product from "./Product";
import PropTypes from "prop-types";

const ProductsList = ({ productsData }) => {
    const productList = productsData.map((element) => {
        return <Product element={element} key={element.id}></Product>;
    });
    return (
        <div className="flex flex-row flex-wrap justify-center">
            {productList}
        </div>
    );
};
export default ProductsList;

ProductsList.propTypes = {
    productsData: PropTypes.array.isRequired,
};
