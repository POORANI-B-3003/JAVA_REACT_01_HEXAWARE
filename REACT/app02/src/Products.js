import { useEffect, useState } from "react";
import "./App.css"; // Import the CSS for styling

const Products = () => {
  // Main list of all products
  const [products, setProducts] = useState([]);
  
  // Filtered list of products based on search
  const [filterProducts, setFilterProducts] = useState([]);
  
  // Search text state
  const [search, setSearch] = useState("");

  // States for the Add Product form
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [thumbnail, setThumbnail] = useState("");

  // Fetch product data from API once when the component mounts
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((p) => setProducts(p.products)) // Store the full product list
      .catch((e) => console.log(e));
  }, []);

  // Filter products when search input or product list changes
  useEffect(() => {
    const matched = products.filter((p) =>
      // Match either category or title with the search input
      p.category.toLowerCase().includes(search.toLowerCase()) ||
      p.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilterProducts(matched); // Update filtered products
  }, [search, products]);

  // Update search state when input changes
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  // Handle adding a new product to the list
  const handleAdd = () => {
    const newProduct = {
      id: products.length + 1, // Assign a new ID (not ideal for real apps)
      category,
      title,
      price,
      thumbnail,
    };

    // Add new product to the top of product list
    const updated = [newProduct, ...products];
    setProducts(updated);

    // If it matches the current search, also add to the filtered list
    if (
      newProduct.title.toLowerCase().includes(search.toLowerCase()) ||
      newProduct.category.toLowerCase().includes(search.toLowerCase())
    ) {
      setFilterProducts([newProduct, ...filterProducts]);
    }

    // Clear input fields after adding
    setCategory("");
    setTitle("");
    setPrice("");
    setThumbnail("");
  };

  // Use filtered list if there's a search input, else use full list
  const productList = search.length > 0 ? filterProducts : products;

  return (
    <div className="container">
      <h1>Products from API</h1>

      {/* Search box to filter products */}
      <input
        type="text"
        placeholder="Search by title or category..."
        onChange={handleSearch}
        className="search-box"
      />

      {/* Form to add a new product */}
      <div className="form-card">
        <input
          type="text"
          placeholder="Add category..."
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          type="text"
          placeholder="Add title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Add price..."
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="text"
          placeholder="Add image url..."
          value={thumbnail}
          onChange={(e) => setThumbnail(e.target.value)}
        />
        <button onClick={handleAdd}>Add new item</button>
      </div>

      {/* Product display section */}
      <div className="product-grid">
        {productList.map((p) => (
          <div key={p.id} className="product-card">
            <img src={p.thumbnail} alt={p.title} />
            <h2>{p.title}</h2>
            <p>{p.category}</p>
            <h3>₹{p.price}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
