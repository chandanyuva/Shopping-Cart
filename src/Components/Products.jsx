import "./productCard.css";

const Products = ({ productsData }) => {
    console.log(productsData);
    const productList = productsData.map((element) => {
        return (
            <div key={element.id} className="productCard">
                <img src={element.image} className=""></img>
                <div className="info">
                    <p className="title">{element.title}</p>
                    <p className="description">{element.description}</p>
                    <p>{element.price}</p>
                    <p> {element.rating.rate}</p>
                </div>
            </div>
        );
    });
    // console.log(productList);
    return <div className="flex flex-row flex-wrap">{productList}</div>;
};
export default Products;
