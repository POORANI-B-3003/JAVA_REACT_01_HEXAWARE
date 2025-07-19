import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import AddBook from './components/AddBook';
import RemoveBook from './components/RemoveBook';
import IssueBook from './components/IssueBook';
import ReturnBook from './components/ReturnBook';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/addbook" element={<AddBook />} />
      <Route path="/removebook" element={<RemoveBook />} />
      <Route path="/issuebook" element={<IssueBook />} />
      <Route path="/returnbook" element={<ReturnBook />} />
    </Routes>
  );
};

export default AppRoutes;
