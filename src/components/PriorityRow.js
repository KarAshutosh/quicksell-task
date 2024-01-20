// PriorityRow.js
import React from 'react';
import TicketCard from './TicketCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEllipsisH, faSignal,faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

const priorityLabels = ['No priority', 'Low', 'Medium', 'High', 'Urgent'];

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

const PriorityRow = ({ priority, tickets, ticketCount }) => {
  return (
    <div>

      <div className="priority-header left-section">
        <p>
          {getPriorityIcon(priority)}
          {`${priorityLabels[priority]}`} 
          <span className="ticket-count">
          &nbsp;&nbsp;{ticketCount}
          </span>
        </p>
        <div>
          <FontAwesomeIcon icon={faPlus} color="grey" className="icons" />
          <FontAwesomeIcon icon={faEllipsisH} color="grey" className="icons" />
        </div>
      </div>
      
      
      
      {tickets.map((ticket) => (
        <div key={ticket.id} style={{ marginBottom: '10px' }}>
          <TicketCard ticket={ticket} />
        </div>
      ))}
    </div>
  );
};

export default PriorityRow;
