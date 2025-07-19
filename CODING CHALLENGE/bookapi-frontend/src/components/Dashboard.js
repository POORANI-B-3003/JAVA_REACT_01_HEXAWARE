import React, { useEffect, useState } from 'react';
import { Container, Header, Image, Card, Button, Grid, Icon } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import { getBooks, deleteBook } from '../api/api';
import AddBook from './AddBook';
import logo from '../assets/logo.png';
import SearchBook from './SearchBook';
import EditBook from './EditBook';

const Dashboard = () => {
    const navigate = useNavigate();
    const [books, setBooks] = useState([]);
    const [addModalOpen, setAddModalOpen] = useState(false);
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [selectedBook, setSelectedBook] = useState(null);
    const [successModalOpen, setSuccessModalOpen] = useState(false); // ✅ moved here

    const fetchBooks = async () => {
        try {
            const response = await getBooks();
            setBooks(response.data);
        } catch (error) {
            console.error('Error fetching books:', error);
        }
    };

    useEffect(() => {
        fetchBooks();
    }, []);

    const handleLogout = () => {
        navigate('/signin');
    };

    const handleDelete = async (isbn) => {
        try {
            await deleteBook(isbn);
            fetchBooks();
        } catch (error) {
            console.error('Error deleting book:', error);
        }
    };

    const handleEdit = (book) => {
        setSelectedBook(book);
        setEditModalOpen(true);
    };

    return (
        <Container style={{ padding: '2em' }}>
            <Header as='h1' textAlign='center'>
                <Image src={logo} size='large' centered />
                Welcome to Book Manager
            </Header>

            <Grid columns={3} stackable centered style={{ marginTop: '2em', marginBottom: '2em' }}>
                <Grid.Column width={4}>
                    <Button color='green' fluid onClick={() => setAddModalOpen(true)}>
                        Add New Book
                    </Button>
                </Grid.Column>
                <Grid.Column width={6}>
                    <SearchBook books={books} setBooks={setBooks} fetchBooks={fetchBooks} />
                </Grid.Column>
                <Grid.Column width={4}>
                    <Button color='red' fluid onClick={handleLogout}>
                        Logout
                    </Button>
                </Grid.Column>
            </Grid>

            <Card.Group itemsPerRow={3} stackable>
                {books.map(book => (
                    <Card key={book.isbn}>
                        <Image
    src={book.imageUrl || 'https://via.placeholder.com/150x220?text=No+Image'}
    wrapped
    ui={false}
    style={{
        height: '300px',
        width: '200px',
        objectFit: 'cover',
        objectPosition: 'center',
    }}
/>

                        <Card.Content>
                            <Card.Header>{book.title}</Card.Header>
                            <Card.Meta>{book.author}</Card.Meta>
                            <Card.Description>
                                Genre: {book.genre}<br />
                                Price: ${book.price}<br />
                                Quantity: {book.quantity}<br />
                                Year: {book.publicationYear}
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <Button
                                icon
                                color='blue'
                                size='small'
                                onClick={() => handleEdit(book)}
                                style={{ marginRight: '0.5em' }}
                            >
                                <Icon name='edit' />
                            </Button>
                            <Button
                                icon
                                color='red'
                                size='small'
                                onClick={() => handleDelete(book.isbn)}
                            >
                                <Icon name='trash' />
                            </Button>
                        </Card.Content>
                    </Card>
                ))}
            </Card.Group>

            {/* AddBook Modal */}
            <AddBook
                open={addModalOpen}
                onClose={() => setAddModalOpen(false)}
                onBookAdded={fetchBooks}
            />

            {/* EditBook Modal */}
            <EditBook
                open={editModalOpen}
                onClose={() => setEditModalOpen(false)}
                book={selectedBook}
                onBookUpdated={fetchBooks}
            />
        </Container>
    );
};

export default Dashboard;
