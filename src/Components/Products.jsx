const Products = ({ productsData }) => {
    console.log(productsData);
    const productList = productsData.map((element) => {
        return (
            <div key={element.id}>
                {element.title} | {element.description}| {element.category}|{" "}
                {element.price}
                <br></br>
            </div>
        );
    });
    // console.log(productList);
    return <div>{productList}</div>;
};
export default Products;
