import React, { useState, useEffect } from 'react';
import { Modal, Form, Button } from 'semantic-ui-react';
import { updateBook } from '../api/api';

const EditBook = ({ open, onClose, book, onBookUpdated }) => {
    const [formData, setFormData] = useState({
        isbn: '',
        title: '',
        author: '',
        publicationYear: '',
        price: '',
        quantity: '',
        genre: '',
        imageUrl: ''
    });

    useEffect(() => {
        if (book) {
            setFormData({
                isbn: book.isbn || '',
                title: book.title || '',
                author: book.author || '',
                publicationYear: book.publicationYear || '',
                price: book.price || '',
                quantity: book.quantity || '',
                genre: book.genre || '',
                imageUrl: book.imageUrl || ''
            });
        }
    }, [book]);

    const handleChange = (e, { name, value }) => {
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async () => {
        try {
            console.log("Submitting update with data:", formData);
            await updateBook(formData.isbn, formData);
            onBookUpdated();
            onClose();
        } catch (error) {
            console.error('Error updating book:', error.response || error);
        }
    };

    return (
        <Modal open={open} onClose={onClose} size='small'>
            <Modal.Header>Edit Book</Modal.Header>
            <Modal.Content>
                <Form>
                    <Form.Input
                        label='ISBN'
                        name='isbn'
                        value={formData.isbn}
                        disabled
                    />
                    <Form.Input
                        label='Title'
                        name='title'
                        value={formData.title}
                        onChange={handleChange}
                    />
                    <Form.Input
                        label='Author'
                        name='author'
                        value={formData.author}
                        onChange={handleChange}
                    />
                    <Form.Input
                        label='Publication Year'
                        name='publicationYear'
                        value={formData.publicationYear}
                        onChange={handleChange}
                    />
                    <Form.Input
                        label='Price'
                        name='price'
                        value={formData.price}
                        onChange={handleChange}
                    />
                    <Form.Input
                        label='Quantity'
                        name='quantity'
                        value={formData.quantity}
                        onChange={handleChange}
                    />
                    <Form.Input
                        label='Genre'
                        name='genre'
                        value={formData.genre}
                        onChange={handleChange}
                    />
                    <Form.Input
                        label='Image URL'
                        name='imageUrl'
                        value={formData.imageUrl}
                        onChange={handleChange}
                    />
                </Form>
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={onClose}>Cancel</Button>
                <Button color='blue' onClick={handleSubmit}>Update Book</Button>
            </Modal.Actions>
        </Modal>
    );
};

export default EditBook;
