import React, { useState } from 'react';
import { Button, Modal, Form, Header, Message } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function SignIn() {
    const navigate = useNavigate();
    const [open, setOpen] = useState(true);
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const [forgotOpen, setForgotOpen] = useState(false);
    const [forgotEmail, setForgotEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [success, setSuccess] = useState(false);

    const handleChange = (e, { name, value }) => {
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = () => {
        const user = JSON.parse(localStorage.getItem(formData.email));
        if (user && user.password === formData.password) {
            setSuccess(true);
            setTimeout(() => navigate('/dashboard'),1500);
        } else {
            setError('ID not found or incorrect password');
        }
    };

    const handleForgotPassword = () => {
        const user = JSON.parse(localStorage.getItem(forgotEmail));
        if (user) {
            user.password = newPassword;
            localStorage.setItem(forgotEmail, JSON.stringify(user));
            alert('Password updated successfully!');
            setForgotOpen(false);
        } else {
            alert('ID not found');
        }
    };

    const handleSignupRedirect = () => {
        navigate('/signup');
    };

    return (
        <>
            <Modal open={open} size='tiny' dimmer='blurring'>
                <Modal.Header>Login to Your Account</Modal.Header>
                <Modal.Content>
                    <Form onSubmit={handleSubmit} error={!!error} success={success}>
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
                            placeholder='Enter your password'
                            type='password'
                            name='password'
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                        <Message error content={error} />
                        <Message success content='Login successful! Redirecting to dashboard...' />
                        <Button primary fluid size='large' type='submit'>Sign In</Button>
                        <Button basic fluid size='large' style={{ marginTop: '1em' }} onClick={() => setForgotOpen(true)}>
                            Forgot Password?
                        </Button>
                        <Button basic fluid size='large' style={{ marginTop: '1em' }} onClick={handleSignupRedirect}>
                            Create an Account
                        </Button>
                    </Form>
                </Modal.Content>
            </Modal>

            <Modal open={forgotOpen} size='tiny' onClose={() => setForgotOpen(false)}>
                <Modal.Header>Reset Password</Modal.Header>
                <Modal.Content>
                    <Form>
                        <Form.Input
                            label='Email'
                            placeholder='Enter your registered email'
                            type='email'
                            value={forgotEmail}
                            onChange={(e) => setForgotEmail(e.target.value)}
                            required
                        />
                        <Form.Input
                            label='New Password'
                            placeholder='Enter your new password'
                            type='password'
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            required
                        />
                        <Button primary fluid size='large' style={{ marginTop: '1em' }} onClick={handleForgotPassword}>
                            Reset Password
                        </Button>
                    </Form>
                </Modal.Content>
            </Modal>
        </>
    );
}

export default SignIn;