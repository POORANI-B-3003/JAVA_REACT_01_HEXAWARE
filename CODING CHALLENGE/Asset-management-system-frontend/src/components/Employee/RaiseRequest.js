import React, { useState, useEffect } from 'react';
import API from '../../services/api';
import '../../styles/BrowseAssets.css';

const RaiseRequest = () => {
  const [assets, setAssets] = useState([]);
  const [filteredAssets, setFilteredAssets] = useState([]);
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [requestedAssetIds, setRequestedAssetIds] = useState([]);

  //  FIXED: Fetch categories safely
  const fetchCategories = async () => {
    try {
      const res = await API.get('/categories');
      const catList = Array.isArray(res.data) ? res.data : res.data.categories || [];
      setCategories(catList);
      console.log('Fetched categories:', catList);
    } catch (err) {
      console.error(' Category fetch error:', err);
      setCategories([]);
    }
  };

  // Fetch available assets
  const fetchAssets = async () => {
    try {
      setLoading(true);
      const res = await API.get('/assets/status/AVAILABLE');
      if (Array.isArray(res.data)) {
        setAssets(res.data);
      } else {
        console.error(' Assets response not an array:', res.data);
        setAssets([]);
      }
    } catch (err) {
      console.error(' Asset fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  // Fetch requested asset IDs
  const fetchRequestedAssets = async () => {
    try {
      const res = await API.get('/requests');
      const ids = res.data
        .filter(r => r.status === 'PENDING' || r.status === 'APPROVED')
        .map(r => r.assetId);
      setRequestedAssetIds(ids);
    } catch (err) {
      console.error(" Error fetching requests:", err);
    }
  };

  // Initial fetch
  useEffect(() => {
    fetchCategories();
    fetchAssets();
    fetchRequestedAssets();
  }, []);

  // Filter assets
  useEffect(() => {
    const filtered = Array.isArray(assets)
      ? assets.filter((asset) => {
          const matchesSearch =
            asset.name.toLowerCase().includes(search.toLowerCase()) ||
            asset.assetNumber.toLowerCase().includes(search.toLowerCase());

          const matchesCategory =
            category === '' || asset.categoryName === category;

          const isAvailable =
            asset.status === 'AVAILABLE' &&
            asset.assetCondition === 'GOOD' &&
            !asset.assignedToName &&
            !asset.purchasedDate;

          const isRequested = requestedAssetIds.includes(asset.id);

          return matchesSearch && matchesCategory && isAvailable && !isRequested;
        })
      : [];

    setFilteredAssets(filtered);
  }, [search, category, assets, requestedAssetIds]);

  // Handle asset request
  const handleRequest = async (asset) => {
    const confirm = window.confirm(`Request asset "${asset.name}"?`);
    if (!confirm) return;

    const user = JSON.parse(localStorage.getItem('loggedInUser'));
    if (!user || !user.id || !user.name) {
      setMessage({ type: 'error', text: 'User info missing. Please login again.' });
      return;
    }

    const payload = {
      issueType: 'REQUEST',
      description: `Requesting asset ${asset.name}`,
      status: 'PENDING',
      requestDate: new Date().toISOString().split('T')[0],
      assetId: asset.id,
      assetName: asset.name,
      employeeId: user.id,
      employeeName: user.name
    };

    try {
      const res = await API.post('/requests', payload);
      if (res.status === 200 || res.status === 201) {
        setMessage({ type: 'success', text: `Request sent for ${asset.name}` });
        setTimeout(() => {
          fetchAssets();
          fetchRequestedAssets();
        }, 300);
      } else {
        setMessage({ type: 'error', text: 'Failed to send request. Try again.' });
      }
    } catch (err) {
      console.error('❌ Request error:', err);
      setMessage({ type: 'error', text: 'Something went wrong. Try again later.' });
    }
  };

  return (
    <div className="browse-assets">
      <h2>📝 Raise New Request</h2>
      <p>Discover and request available assets.</p>

      {/* Filters */}
      <div className="filters">
        <input
          type="text"
          placeholder="🔍 Search by name or number"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.name}>{cat.name}</option>
          ))}
        </select>
      </div>

      {/* Message Box */}
      {message && (
        <div className={`message-box ${message.type}`}>
          {message.text}
          <button className="close-btn" onClick={() => setMessage(null)}>❌</button>
        </div>
      )}

      {/* Loading */}
      {loading && <p>Loading assets...</p>}

      {/* Asset Cards */}
      <div className="asset-list">
        {!loading && filteredAssets.length > 0 ? (
          filteredAssets.map((asset) => (
            <div className="asset-card" key={asset.id}>
              <img src="/assets.png" alt={asset.name} className="asset-image" />
              <div className="asset-info">
                <p><strong>Asset No:</strong> {asset.assetNumber}</p>
                <p><strong>Name:</strong> {asset.name}</p>
                <p><strong>Category:</strong> {asset.categoryName}</p>
              </div>
              <button className="request-btn" onClick={() => handleRequest(asset)}>
                REQUEST THIS
              </button>
            </div>
          ))
        ) : (
          !loading && <p>No available assets found</p>
        )}
      </div>
    </div>
  );
};

export default RaiseRequest;
