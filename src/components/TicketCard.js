// TicketCard.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignal, faEllipsisH, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.css'; 
import { faCircle, faUser } from '@fortawesome/free-solid-svg-icons';
import '../App.css'; 

const getPriorityIcon = (priority) => {
  switch (priority) {
    case 0:
      return <FontAwesomeIcon icon={faEllipsisH} color="gray" />;
    case 1:
      return <FontAwesomeIcon icon={faSignal} color="green" />;
    case 2:
      return <FontAwesomeIcon icon={faSignal} color="orange" />;
    case 3:
      return <FontAwesomeIcon icon={faSignal} color="red"/>;
    case 4:
      return <FontAwesomeIcon icon={faExclamationTriangle} color="red" />;
    default:
      return null; 
  }
};


const TicketCard = ({ ticket }) => {
  return (
    <div className="ticket-card">
      <div className="ticket-id">
        <div>{ticket.id}</div> <div><FontAwesomeIcon icon={faUser} color="grey" className="fa-signal" /></div>
      </div>

      <p className="title">{ticket.title}</p>

      <div className="priority-icon">
        <div className="ticket-details-box">
          {getPriorityIcon(ticket.priority)}
        </div>
        <div className="ticket-details-box">
          <p className="tags"><FontAwesomeIcon icon={faCircle} color="lightgrey" />{ticket.tag.join(', ')}</p>
        </div>
      </div>
    </div>
  );
};


export default TicketCard;
