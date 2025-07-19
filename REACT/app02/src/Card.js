// Card.js
const Card = ({ title, category, price, thumbnail }) => {
  return (
    <div className="cont">
      <img src={thumbnail} alt={title} width="150" />
      <h3>{title}</h3>
      <p>Category: {category}</p>
      <p>Price: ₹{price}</p>
      <hr />
    </div>
  );
};

export default Card;
