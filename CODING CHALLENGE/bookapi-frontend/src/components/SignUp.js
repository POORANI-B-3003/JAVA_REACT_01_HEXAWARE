
import React, { useState } from 'react';
import { Button, Modal, Form, Header, Message } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function SignUp() {
    const navigate = useNavigate();
    const [open, setOpen] = useState(true);
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const [success, setSuccess] = useState(false);

    const handleChange = (e, { name, value }) => {
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = () => {
        localStorage.setItem(formData.email, JSON.stringify(formData));
        setSuccess(true);
        setTimeout(() => navigate('/dashboard'), 1500);
    };

    const handleLoginRedirect = () => {
        navigate('/signin');
    };

    return (
        <Modal open={open} size='tiny' dimmer='blurring'>
            <Modal.Header>Create Your Account</Modal.Header>
            <Modal.Content>
                <Form onSubmit={handleSubmit} success={success}>
                    <Form.Input
                        label='Name'
                        placeholder='Enter your name'
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <Form.Input
                        label='Email'
                        placeholder='Enter your email'
                        type='email'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <Form.Input
                        label='Password'
                        placeholder='Enter your new password'
                        type='password'
                        name='password'
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <Message success content='Account created successfully! Redirecting to dashboard...' />
                    <Button primary fluid size='large' type='submit'>Sign Up</Button>
                    <Button basic fluid size='large' style={{ marginTop: '1em' }} onClick={handleLoginRedirect}>
                        Already have an account? Login
                    </Button>
                </Form>
            </Modal.Content>
        </Modal>
    );
}

export default SignUp;

