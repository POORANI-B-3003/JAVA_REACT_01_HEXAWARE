import "./App.css";

const Book = ({ pic, name, price, qty, city }) => {
  // props - take info from one component to another component
  // App (parent)     Book (child)

  return (
    <>
      <div className="cont">
        <img src={pic} alt={name} />
        <h1>Name: {name}</h1>
        <h2>Price: {price}</h2>
        <h3>Qty: {qty}</h3>
        <h2>City: {city}</h2>
      </div>
    </>
  );
};

export default Book;
