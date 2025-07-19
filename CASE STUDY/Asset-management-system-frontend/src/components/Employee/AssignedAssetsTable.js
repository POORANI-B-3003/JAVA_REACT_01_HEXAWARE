import React from 'react';

const AssignedAssetsTable = ({ assets }) => {
  return (
    <div style={{ backgroundColor: '#fff0ff', padding: '1.5rem', borderRadius: '12px' }}>
      <h3 style={{ color: '#6a1b9a', marginBottom: '1rem' }}>Assigned Assets</h3>
      {assets.length === 0 ? (
        <p style={{ color: '#9c27b0' }}>No assets assigned.</p>
      ) : (
        <div style={{ overflowX: 'auto' }}>
          <table style={{
            width: '100%',
            borderCollapse: 'collapse',
            backgroundColor: '#faf5ff',
            color: '#4a148c',
            border: '1px solid #ce93d8',
            borderRadius: '8px',
          }}>
            <thead style={{ backgroundColor: '#e1bee7' }}>
              <tr>
                <th style={headerCellStyle}>Asset Name</th>
                <th style={headerCellStyle}>Asset Number</th>
                <th style={headerCellStyle}>Status</th>
                <th style={headerCellStyle}>Condition</th>
                <th style={headerCellStyle}>Category</th>
                <th style={headerCellStyle}>Purchased Date</th>
              </tr>
            </thead>
            <tbody>
              {assets.map((asset) => (
                <tr key={asset.id} style={{ textAlign: 'center', borderBottom: '1px solid #ce93d8' }}>
                  <td style={cellStyle}>{asset.name}</td>
                  <td style={cellStyle}>{asset.assetNumber}</td>
                  <td style={cellStyle}>{asset.status}</td>
                  <td style={cellStyle}>{asset.assetCondition}</td>
                  <td style={cellStyle}>{asset.categoryName}</td>
                  <td style={cellStyle}>{asset.purchasedDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

const headerCellStyle = {
  padding: '12px',
  color: '#4a148c',
  fontWeight: 'bold',
  borderBottom: '1px solid #ce93d8',
};

const cellStyle = {
  padding: '10px',
  color: '#6a1b9a',
};

export default AssignedAssetsTable;
