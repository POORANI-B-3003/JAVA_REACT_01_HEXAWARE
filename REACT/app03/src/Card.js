import { useState } from "react";

const Card = ({ id, title, pic, category, price, RemoveData, updatePrice }) => {
  const [newPrice, setNewPrice] = useState("");

  return (
    <div className="card" style={{
      border: "1px solid gray",
      padding: "10px",
      margin: "10px",
      width: "300px"
    }}>
      <img src={pic} alt={title} style={{ width: "100%", height: "180px", objectFit: "cover" }} />
      <h2>{title}</h2>
      <p>Category: {category}</p>
      <p>Price: ₹{price}</p>

      <input
        type="number"
        placeholder="New Price"
        value={newPrice}
        onChange={(e) => setNewPrice(e.target.value)}
        style={{ width: "100%", marginBottom: "5px" }}
      />
      <button onClick={() => updatePrice(id, newPrice)} style={{ marginRight: "10px" }}>
        Update Price
      </button>
      <button onClick={() => RemoveData(id)}>Remove</button>
    </div>
  );
};

export default Card;
