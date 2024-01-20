// DisplayOptions.js
import React from 'react';
import '../App.css'

const DisplayOptions = ({ onGroupChange, onOrderChange }) => {
  return (
    <div style={{ margin: '20px' }}>
      <div className='dropdown-options'>
        <label htmlFor="grouping">Grouping</label>
        <select id="grouping" onChange={(e) => onGroupChange(e.target.value)}>
          <option value="status">Status</option>
          <option value="user">User</option>
          <option value="priority">Priority</option>
        </select>
      </div>

      <br/>

      <div className='dropdown-options'>
        <label htmlFor="ordering">Ordering</label>
        <select id="ordering" onChange={(e) => onOrderChange(e.target.value)}>
          <option value="priority">Priority</option>
          <option value="title">Title</option>
        </select>
      </div>
    </div>
  );
};

export default DisplayOptions;
