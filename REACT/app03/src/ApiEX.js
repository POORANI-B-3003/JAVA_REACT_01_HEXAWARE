import { useEffect, useState } from "react";
import SCard from "./SCard";
import {
  Dimmer,
  Loader,
  Image,
  Segment,
  Modal,
  Button,
  Input,
} from "semantic-ui-react";

const ApiEX = () => {
  const [Products, setProducts] = useState([]);
  const [FProducts, setFProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  // Modal State
  const [open, setOpen] = useState(false);
  const [editProduct, setEditProduct] = useState(null); // product object being edited

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((temp) => {
        setProducts(temp.products);
        setLoading(false);
      })
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    const data = Products.filter((temp) =>
      temp.category.toLowerCase().includes(search.toLowerCase())
    );
    setFProducts(data);
  }, [search, Products]);

  const handleSearch = (e) => setSearch(e.target.value);

  const RemoveData = (id) => {
    setProducts(Products.filter((temp) => temp.id !== id));
  };

  const openEditModal = (product) => {
    setEditProduct(product);
    setOpen(true);
  };

  const handleEditChange = (e, field) => {
    setEditProduct({ ...editProduct, [field]: e.target.value });
  };

  const saveChanges = () => {
    const updated = Products.map((item) =>
      item.id === editProduct.id ? editProduct : item
    );
    setProducts(updated);
    setOpen(false);
  };

  return (
    <>
      <h2>Product List</h2>
      <input
        type="text"
        placeholder="Search by category..."
        onChange={handleSearch}
        style={{ padding: "8px", marginBottom: "10px", width: "250px" }}
      />

      {/* Loader */}
      {loading ? (
        <Segment style={{ minHeight: "200px" }}>
          <Dimmer active inverted>
            <Loader size="large">Loading Products...</Loader>
          </Dimmer>
          <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
        </Segment>
      ) : (
        // Cards
        (search.length > 0 ? FProducts : Products).map((temp) => (
          <SCard
            key={temp.id}
            id={temp.id}
            title={temp.title}
            pic={temp.thumbnail}
            category={temp.category}
            price={temp.price}
            RemoveData={RemoveData}
            showEditModal={() => openEditModal(temp)}
          />
        ))
      )}

      {/* Simple Edit Modal */}
      <Modal onClose={() => setOpen(false)} open={open}>
        <Modal.Header>Edit Product</Modal.Header>
        <Modal.Content>
  <Input
    fluid
    placeholder="Enter title"
    onChange={(e) => handleEditChange(e, "title")}
    style={{ marginBottom: "10px" }}
  />
  <Input
    fluid
    placeholder="Enter price"
    onChange={(e) => handleEditChange(e, "price")}
    style={{ marginBottom: "10px" }}
  />
  <Input
    fluid
    placeholder="Enter category"
    onChange={(e) => handleEditChange(e, "category")}
    style={{ marginBottom: "10px" }}
  />
  <Input
    fluid
    placeholder="Enter thumbnail URL"
    onChange={(e) => handleEditChange(e, "thumbnail")}
  />
</Modal.Content>

        <Modal.Actions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button color="green" onClick={saveChanges}>Save</Button>
        </Modal.Actions>
      </Modal>
    </>
  );
};

export default ApiEX;
