import Product from "./Product";

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
