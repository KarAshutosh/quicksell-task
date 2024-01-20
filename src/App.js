import React, { useState } from 'react';
import TicketTable from './components/TicketTable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import './App.css';

const App = () => {
  const [displayOptions, setDisplayOptions] = useState(false);
  const [groupBy, setGroupBy] = useState('status');
  const [orderBy, setOrderBy] = useState('');

  const handleDisplayClick = () => {
    setDisplayOptions(!displayOptions);
  };

  const handleGroupByChange = (event) => {
    setGroupBy(event.target.value);
  };

  const handleOrderByChange = (event) => {
    setOrderBy(event.target.value);
  };

  return (
    <div>
      <div className="container">
        <button className="button" onClick={handleDisplayClick}>
          <span className='button-icons'>
            <FontAwesomeIcon icon={faBars} />           
          </span>
          &nbsp; Display &nbsp;
          <span className='button-icons'>
            <FontAwesomeIcon icon={faAngleDown} />
          </span>
        </button>
        {displayOptions && (
          <div className="options-dropdown">
            <div className="dropdown-options">
              <label className="label">

                <span>Grouping</span>
                
                <span>
                  <select className="select" value={groupBy} onChange={handleGroupByChange}>
                    <option value="users">User</option>
                    <option value="status">Status</option>
                    <option value="priority">Priority</option>
                  </select>
                </span>

              </label>
            </div>

            <div className="dropdown-options">
              <label className="label">

                <span>Ordering</span>

                <span>
                  <select className="select" value={orderBy} onChange={handleOrderByChange}>
                    <option value="priority">Priority</option>
                    <option value="title">Title</option>
                  </select>
                </span>

              </label>
            </div>
          </div>
        )}
      </div>
      <div className="table-wrapper">
        <TicketTable groupBy={groupBy} orderBy={orderBy} />
      </div>
    </div>
  );
};

export default App;
