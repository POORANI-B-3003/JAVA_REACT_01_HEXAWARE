import { useEffect, useState } from "react";
import BCard from "./BCard";
import { Message, Dimmer, Loader, Segment, Button, Modal } from "semantic-ui-react";

const App = () => {
  // State variables to hold books and input field values
  const [books, setBooks] = useState([]);
  const [bname, setName] = useState("");
  const [qty, setQty] = useState("");
  const [price, setPrice] = useState("");
  const [city, setCity] = useState("");

  // For result calculation
  const [marks, setMarks] = useState(0);
  const [flag, setFlag] = useState(0); // 0 = neutral, 1 = fail, 2 = pass

  // To show success message
  const [newFlag, setNewFlag] = useState(false);

  // Modal open/close
  const [open, setOpen] = useState(false);

  // For edit functionality
  const [editIndex, setEditIndex] = useState(null);

  // Dummy data for initial book list
  const temp = [
    { bname: "JavaScript Basics", price: 299, qty: 10, city: "Delhi" },
    { bname: "Learning Python", price: 499, qty: 5, city: "Mumbai" },
    { bname: "Mastering Java", price: 399, qty: 8, city: "Chennai" },
    { bname: "Web Dev Guide", price: 199, qty: 15, city: "Kolkata" },
    { bname: "React Essentials", price: 349, qty: 12, city: "Bangalore" },
    { bname: "Node.js Handbook", price: 429, qty: 7, city: "Pune" },
    { bname: "HTML & CSS", price: 150, qty: 20, city: "Hyderabad" },
    { bname: "C++ for Beginners", price: 250, qty: 10, city: "Ahmedabad" },
    { bname: "Data Structures", price: 300, qty: 9, city: "Jaipur" },
    { bname: "Machine Learning", price: 550, qty: 4, city: "Chandigarh" },
    { bname: "AI Fundamentals", price: 600, qty: 3, city: "Bhopal" },
    { bname: "Django for All", price: 375, qty: 6, city: "Nagpur" },
    { bname: "Spring Boot Intro", price: 420, qty: 7, city: "Lucknow" },
    { bname: "Flutter Dev", price: 310, qty: 8, city: "Patna" },
    { bname: "SQL Mastery", price: 280, qty: 11, city: "Surat" },
    { bname: "MongoDB Guide", price: 270, qty: 13, city: "Indore" },
    { bname: "AWS for Developers", price: 650, qty: 2, city: "Noida" },
    { bname: "Cyber Security", price: 480, qty: 5, city: "Kanpur" },
    { bname: "Kotlin in Action", price: 360, qty: 6, city: "Thane" },
    { bname: "TypeScript Deep Dive", price: 330, qty: 9, city: "Amritsar" },
  ];

  // Load initial book data after 1 second
  useEffect(() => {
    setTimeout(() => setBooks(temp), 1000);
  }, []);

  // Handle marks input
  const handleMarks = (e) => setMarks(e.target.value);

  // Show pass/fail message based on marks
  const showR = () => {
    if (marks === "") setFlag(0);
    else if (marks < 50) setFlag(1);
    else setFlag(2);
  };

  // Clear all input fields
  const resetInputs = () => {
    setName("");
    setQty("");
    setPrice("");
    setCity("");
  };

  // Add new book to the list
  const addBook = () => {
    const newBook = {
      bname: bname.toLowerCase(), // store lowercase for uniformity
      qty,
      price,
      city,
    };
    setBooks([newBook, ...books]); // Add new book at top
    setOpen(false); // Close modal
    setNewFlag(true); // Show success message
    resetInputs(); // Clear form
  };

  // Load selected book values into modal form for editing
  const handleEdit = (index) => {
    const selectedBook = books[index];
    setName(selectedBook.bname);
    setQty(selectedBook.qty);
    setPrice(selectedBook.price);
    setCity(selectedBook.city);
    setEditIndex(index); // Track the book index being edited
    setOpen(true); // Open modal
  };

  // Update book data at selected index
  const handleUpdate = () => {
    const updatedBook = {
      bname: bname.toLowerCase(),
      qty,
      price,
      city,
    };
    const updatedBooks = [...books];
    updatedBooks[editIndex] = updatedBook; // Replace the book
    setBooks(updatedBooks);
    setEditIndex(null); // Reset editing state
    setOpen(false);
    setNewFlag(true);
    resetInputs();
  };

  return (
    <>
      {/* Modal Form for Add / Edit */}
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<Button color="blue">Add / Edit Book</Button>}
        
      >
     
      
        <div className="cont" style={{ padding: "40px" }}>
          <input
            type="text"
            placeholder="Enter book name"
            value={bname}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="Enter book qty"
            value={qty}
            onChange={(e) => setQty(e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="Enter book price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="Enter book city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <br />

          {/* Button changes based on whether you're adding or editing */}
          {editIndex === null ? (
            <Button color="green" onClick={addBook}>Add Item</Button>
          ) : (
            <Button color="blue" onClick={handleUpdate}>Update Item</Button>
          )}
          <Button onClick={() => setOpen(false)}>Cancel</Button>
        </div>
      </Modal>

      {/* Success message after Add / Edit */}
      {newFlag && <Message color="green">Book Added or Updated Successfully!</Message>}

      {/* Marks Result Section */}
         <br/>
      <br/>
      <input
        type="text"
        placeholder="Enter your total marks"
        onChange={handleMarks}
      />
      <br/>
      <br/>
      <button onClick={showR}>Show Result</button>
      {flag === 1 && <Message color="red">Fail</Message>}
      {flag === 2 && <Message color="green">Pass</Message>}
      {flag === 0 && <Message color="grey">Enter Marks to Check Result</Message>}

      {/* Display Book Cards */}
      {books.length > 0 ? (
        books.map((temp, index) => (
          <div key={index} style={{ margin: "10px" }}>
            <BCard
              bname={temp.bname}
              price={temp.price}
              qty={temp.qty}
              city={temp.city}
            />
            <Button color="teal" onClick={() => handleEdit(index)}>Edit</Button>
          </div>
        ))
      ) : (
        <Segment>
          <Dimmer active>
            <Loader>Loading...</Loader>
          </Dimmer>
        </Segment>
      )}
    </>
  );
};

export default App;
