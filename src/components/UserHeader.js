// UserHeader.js
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEllipsisH, faUser } from '@fortawesome/free-solid-svg-icons';
import '../App.css'; // Import your App.css file

const UserHeader = ({ user, ticketCount }) => {
  return (
    <div className="user-header">
      <div className="left-section">
        <p>
          <FontAwesomeIcon icon={faUser} color="grey" className="icons" />
          {user.name} 
          <span className="ticket-count">
          &nbsp;&nbsp;{ticketCount}
          </span>
        </p>

        <div>
          <FontAwesomeIcon icon={faPlus} color="grey" className="icons" />
          <FontAwesomeIcon icon={faEllipsisH} color="grey" className="icons" />
        </div>
      </div>
      
    </div>
  );
};

UserHeader.propTypes = {
  user: PropTypes.object.isRequired,
  ticketCount: PropTypes.number.isRequired,
};

export default UserHeader;
