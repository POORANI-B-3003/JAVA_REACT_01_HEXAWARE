import React, { useState, useEffect } from 'react';
import { FiEdit2, FiTrash2, FiPlus, FiX } from 'react-icons/fi';
import '../../styles/ManageCategories.css';
import API from '../../services/api';

const ManageCategories = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editId, setEditId] = useState(null);
  const [newCategory, setNewCategory] = useState({ name: '', description: '' });
  const [alert, setAlert] = useState({ type: '', message: '' });
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const res = await API.get('/api/categories');
      setCategories(res.data);
    } catch (err) {
      console.error('Failed to fetch categories', err);
      setCategories([]);
    }
  };

  const handleAddOrUpdate = async () => {
    const { name, description } = newCategory;

    if (!name.trim() || !description.trim()) {
      setAlert({ type: 'error', message: 'Both fields are required.' });
      return;
    }

    const isDuplicate = categories.some(cat =>
      cat.name.toLowerCase() === name.toLowerCase() && cat.id !== editId
    );

    if (isDuplicate) {
      setAlert({ type: 'error', message: 'Category already exists.' });
      return;
    }

    try {
      if (isEditMode) {
        await API.put(`/api/categories/${editId}`, {
          name: name.trim().toUpperCase(),
          description: description.trim(),
        });
        setAlert({ type: 'success', message: 'Category updated successfully!' });
      } else {
        await API.post('/api/categories', {
          name: name.trim().toUpperCase(),
          description: description.trim(),
        });
        setAlert({ type: 'success', message: 'Category added successfully!' });
      }

      setShowModal(false);
      setNewCategory({ name: '', description: '' });
      setIsEditMode(false);
      setEditId(null);
      fetchCategories();
    } catch (err) {
      console.error('Failed to save category:', err);
      setAlert({ type: 'error', message: 'Something went wrong.' });
    }
  };

  const handleEdit = (category) => {
    setNewCategory({ name: category.name, description: category.description });
    setEditId(category.id);
    setIsEditMode(true);
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this category?");
    if (!confirmDelete) return;

    try {
      await API.delete(`/api/categories/${id}`);
      setCategories(prev => prev.filter(cat => cat.id !== id));
      setAlert({ type: 'success', message: 'Category deleted successfully!' });
    } catch (err) {
      setAlert({ type: 'error', message: 'Failed to delete category.' });
      console.error(err);
    }
  };

  const filteredCategories = categories.filter(cat =>
    cat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cat.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="manage-categories">
      {alert.message && (
        <div className={`alert-box ${alert.type}`}>
          <span>{alert.message}</span>
          <button onClick={() => setAlert({ type: '', message: '' })}><FiX /></button>
        </div>
      )}

      <div className="header-row">
        <h2>Asset <span>Categories</span></h2>
        <button className="add-btn" onClick={() => {
          setShowModal(true);
          setIsEditMode(false);
          setNewCategory({ name: '', description: '' });
        }}>
          <FiPlus /> Add Category
        </button>
      </div>

      <input
        className="search-bar"
        type="text"
        placeholder="Search categories..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="category-list">
        {filteredCategories.map(category => (
          <div className="category-card" key={category.id}>
            <div className="category-text">
              <h3>{category.name}</h3>
              <p>{category.description}</p>
            </div>
            <div className="category-actions">
              <button className="edit-btn" onClick={() => handleEdit(category)}><FiEdit2 /></button>
              <button className="delete-btn" onClick={() => handleDelete(category.id)}><FiTrash2 /></button>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <div className="modal-header">
              <h3>{isEditMode ? 'Edit Category' : 'Add New Category'}</h3>
              <button onClick={() => {
                setShowModal(false);
                setIsEditMode(false);
                setNewCategory({ name: '', description: '' });
              }}><FiX /></button>
            </div>
            <input
              type="text"
              placeholder="Category Name"
              value={newCategory.name}
              onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })}
            />
            <textarea
              placeholder="Description"
              rows={3}
              value={newCategory.description}
              onChange={(e) => setNewCategory({ ...newCategory, description: e.target.value })}
            />
            <div className="modal-actions">
              <button className="submit" onClick={handleAddOrUpdate}>
                {isEditMode ? 'Update' : 'Submit'}
              </button>
              <button className="cancel" onClick={() => {
                setShowModal(false);
                setIsEditMode(false);
                setNewCategory({ name: '', description: '' });
              }}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageCategories;
