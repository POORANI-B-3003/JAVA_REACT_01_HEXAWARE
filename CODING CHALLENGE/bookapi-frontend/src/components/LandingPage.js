
import React from 'react';
import { Button, Container, Header, Image, Segment } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import landingpg from '../assets/landpg.png';
import logo from '../assets/logo.png'; // Add your logo image in assets folder

function LandingPage() {
    const navigate = useNavigate();

    return (
        <Segment vertical textAlign='center' className='landing-segment'>
            <Container textAlign='center'>
                <Image src={logo} size='small' centered className='landing-logo' />
                <Header as='h1' size='huge' className='landing-header'>Welcome to Book Manager</Header>
                <Header as='h3' className='landing-subheader'>Track your reading, organize your personal library, and discover your next favorite book easily with an elegant interface.</Header>
                <p style={{ fontSize: '1em', marginTop: '1em' }}>
                    Manage your collection, track your progress, and keep your library beautifully organized in one place.
                </p>
                <Button primary size='huge' className='landing-button' style={{ marginTop: '1em' }} onClick={() => navigate('/signup')}>
                    SignUp/SignIn
                </Button>
                <Image src={landingpg} size='large' rounded bordered centered style={{ marginTop: '1em' }} />
                
            </Container>
        </Segment>
    );
}

export default LandingPage;

