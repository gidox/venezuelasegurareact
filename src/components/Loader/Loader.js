import React from 'react';
import FaSpinner from 'react-icons/lib/fa/spinner';

const Loader = () => (
  <div style={{ height: '100%' }}>
    <FaSpinner
      style={{
        display: 'block',
        width: '80px',
        height: '80px',
        margin: '150px 25%',
        animation: 'fa-spin 2s infinite linear',
      }}
    />
  </div>
  );

export default Loader;
