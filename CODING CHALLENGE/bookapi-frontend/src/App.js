import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Dashboard from './components/Dashboard';
import AddBook from './components/AddBook';
import EditBook from './components/EditBook';


function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<LandingPage />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/signin' element={<SignIn />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/add-book' element={<AddBook />} />
                <Route path='/edit-book/:isbn' element={<EditBook />} />

            </Routes>
        </Router>
    );
}

export default App;
