import React, { useState } from 'react';
import { Modal, Form, Button } from 'semantic-ui-react';
import { addBook } from '../api/api';

const AddBook = ({ open, onClose, onBookAdded }) => {
    const [formData, setFormData] = useState({
        isbn: '',
        title: '',
        author: '',
        publicationYear: '',
        price: '',
        quantity: '',
        genre: '',
        imageUrl: '',
    });

    const handleChange = (e, { name, value }) => {
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async () => {
        if (!formData.isbn || !formData.title || !formData.author || !formData.publicationYear) {
            alert('Please fill in all required fields.');
            return;
        }

        try {
            const payload = {
                ...formData,
                publicationYear: parseInt(formData.publicationYear),
                price: formData.price ? parseFloat(formData.price) : 0,
                quantity: formData.quantity ? parseInt(formData.quantity) : 0,
            };

            await addBook(payload);

            onBookAdded(); 
            setFormData({
                isbn: '',
                title: '',
                author: '',
                publicationYear: '',
                price: '',
                quantity: '',
                genre: '',
                imageUrl: '',
            });
            onClose();
        } catch (error) {
            console.error('Error adding book:', error);
            alert('Error adding book. Please check the console for details.');
        }
    };

    return (
        <Modal open={open} onClose={onClose}>
            <Modal.Header>Add Book</Modal.Header>
            <Modal.Content>
                <Form>
                    <Form.Input
                        label="ISBN"
                        name="isbn"
                        value={formData.isbn}
                        onChange={handleChange}
                        required
                    />
                    <Form.Input
                        label="Title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                    />
                    <Form.Input
                        label="Author"
                        name="author"
                        value={formData.author}
                        onChange={handleChange}
                        required
                    />
                    <Form.Input
                        label="Publication Year"
                        name="publicationYear"
                        value={formData.publicationYear}
                        onChange={handleChange}
                        type="number"
                        required
                    />
                    <Form.Input
                        label="Price"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        type="number"
                        step="0.01"
                    />
                    <Form.Input
                        label="Quantity"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        type="number"
                    />
                    <Form.Input
                        label="Genre"
                        name="genre"
                        value={formData.genre}
                        onChange={handleChange}
                    />
                    <Form.Input
                        label="Image URL"
                        name="imageUrl"
                        value={formData.imageUrl}
                        onChange={handleChange}
                    />
                </Form>
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={onClose}>Cancel</Button>
                <Button color="green" onClick={handleSubmit}>Add</Button>
            </Modal.Actions>
        </Modal>
    );
};

export default AddBook;
