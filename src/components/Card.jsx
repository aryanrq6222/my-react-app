function Card({ product }) {
    return (
        <div>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <h4>₹{product.price}</h4>
        </div>
    );
}

export default Card;
